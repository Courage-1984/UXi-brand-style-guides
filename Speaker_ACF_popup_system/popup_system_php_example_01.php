<?php
/**
 * AMC 2026 Speakers — footer JSON for popup JS
 *
 * ACF Names: speaker_image, speaker_bio, speaker_job_title, position, session_title, linkedin_link
 * CPT: 2026-speaker
 *
 * Debug: view page source → speaker-acf-keys comment shows which fields PHP found.
 */

add_action('wp_footer', function () {
    $cpt_slug       = '2026-speaker';
    $json_script_id = 'speaker-json-data';

    $acf_map = [
        'image'     => 'speaker_image',
        'bio'       => 'speaker_bio',
        'job_title' => 'speaker_job_title',
        'position'  => 'position',
        'session'   => 'session_title',
        'linkedin'  => 'linkedin_link',
    ];

    $read_acf = function ($post_id, $field_name) {
        // 1. get_fields() — most reliable bulk read
        if (function_exists('get_fields')) {
            static $cache = [];
            if (!isset($cache[$post_id])) {
                $all = get_fields($post_id);
                $cache[$post_id] = is_array($all) ? $all : [];
            }
            if (isset($cache[$post_id][$field_name]) && $cache[$post_id][$field_name] !== '') {
                return $cache[$post_id][$field_name];
            }
        }
        // 2. get_field()
        if (function_exists('get_field')) {
            $val = get_field($field_name, $post_id);
            if ($val !== null && $val !== false && $val !== '') {
                return $val;
            }
        }
        // 3. Raw post meta (bypasses ACF reference lookup)
        $meta = get_post_meta($post_id, $field_name, true);
        if ($meta !== '' && $meta !== false && $meta !== null) {
            return $meta;
        }
        return '';
    };

    $posts = get_posts([
        'post_type'              => $cpt_slug,
        'posts_per_page'         => -1,
        'post_status'            => 'publish',
        'orderby'                => 'menu_order',
        'order'                  => 'ASC',
        'suppress_filters'       => false,
        'no_found_rows'          => true,
        'update_post_meta_cache' => true,
        'update_post_term_cache' => false,
    ]);

    $data       = [];
    $debug_keys = [];

    foreach ($posts as $post) {
        $id  = $post->ID;
        $row = ['name' => get_the_title($id)];

        foreach ($acf_map as $json_key => $acf_name) {
            $val = $read_acf($id, $acf_name);

            if ($json_key === 'image') {
                $url = is_array($val) ? ($val['url'] ?? '') : $val;
                if (!$url && is_numeric($val)) {
                    $url = wp_get_attachment_url((int) $val);
                }
                if (!$url && has_post_thumbnail($id)) {
                    $url = get_the_post_thumbnail_url($id, 'full');
                }
                $row[$json_key] = $url ?: '';
                continue;
            }

            $row[$json_key] = is_string($val) ? $val : (string) $val;
        }

        $data[(string) $id] = $row;

        if (empty($debug_keys) && function_exists('get_fields')) {
            $all = get_fields($id);
            $debug_keys = is_array($all) ? array_keys($all) : [];
        }
    }

    echo '<!-- speaker-json-count: ' . count($data) . ' -->';
    echo '<!-- speaker-acf-keys: ' . esc_html(implode(', ', $debug_keys)) . ' -->';
    if (!empty($data)) {
        $sample_id = array_key_first($data);
        $sample    = $data[$sample_id];
        echo '<!-- speaker-sample-' . esc_attr($sample_id) . ': bio=' . strlen($sample['bio'] ?? '') . ' session=' . esc_html($sample['session'] ?? '') . ' -->';
    }
    echo '<script id="' . esc_attr($json_script_id) . '" type="application/json">';
    echo wp_json_encode($data);
    echo '</script>';
}, 99);
