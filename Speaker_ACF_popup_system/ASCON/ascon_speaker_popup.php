<?php
/**
 * ASCON — 2026 Conference Speakers popup data (PHP)
 * Site: asconafrica.org
 *
 * CPT: 2026-conference
 * Pair with: ascon_speaker_popup.js
 */

$json_script_id = 'ascon-speaker-json-data';
$cpt_slug       = '2026-conference';

$acf_map = [
    'image'         => 'speaker_image',
    'name'          => 'name',
    'surname'       => 'surname',
    'title'         => 'title',
    'qualification' => 'qualification',
    'position'      => 'position',
    'bio'           => 'bio',
    'linkedin'      => 'social_link',
    'quote'         => 'quote',
    'session'       => 'session_title',
];

add_action('wp_footer', function () use ($cpt_slug, $acf_map, $json_script_id) {
    $read_acf = function ($post_id, $field_name) {
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

        if (function_exists('get_field')) {
            $val = get_field($field_name, $post_id);
            if ($val !== null && $val !== false && $val !== '') {
                return $val;
            }
        }

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

    $data = [];

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

        $full = trim(($row['name'] ?? '') . ' ' . ($row['surname'] ?? ''));
        $row['full_name'] = $full !== '' ? $full : get_the_title($id);

        $data[(string) $id] = $row;
    }

    echo '<script id="' . esc_attr($json_script_id) . '" type="application/json">';
    echo wp_json_encode($data);
    echo '</script>';
}, 99);
