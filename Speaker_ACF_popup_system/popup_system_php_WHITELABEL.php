<?php
/**
 * Speaker ACF Popup System — White-label PHP template
 *
 * 1. Paste into WPCode / Code Snippets (PHP).
 * 2. Edit ONLY the CONFIG block.
 * 3. Keep $cpt_slug identical to the real post type key.
 * 4. Keep $json_script_id identical to JS jsonScriptId.
 * 5. Add / remove fields in $acf_map as needed.
 */

$register_cpt   = true;
$cpt_slug       = 'speaker';
$cpt_label      = 'Speakers';
$menu_icon      = 'dashicons-groups';
$json_script_id = 'speaker-json-data';

/**
 * JSON key => ACF field Name
 * Use the exact ACF "Name" slug from WP Admin.
 */
$acf_map = [
    'image'         => 'speaker_image',
    'full_name'     => 'full_name',
    'name'          => 'name',
    'surname'       => 'surname',
    'title'         => 'speaker_job_title',
    'qualification' => 'qualification',
    'position'      => 'position',
    'bio'           => 'speaker_bio',
    'linkedin'      => 'linkedin_link',
    'quote'         => 'quote',
    'session'       => 'session_title',
];

if ($register_cpt) {
    add_action('init', function () use ($cpt_slug, $cpt_label, $menu_icon) {
        register_post_type($cpt_slug, [
            'label'     => $cpt_label,
            'public'    => true,
            'show_ui'   => true,
            'supports'  => ['title', 'thumbnail'],
            'menu_icon' => $menu_icon,
        ]);
    });
}

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

        if (empty($row['full_name'])) {
            $built = trim(($row['name'] ?? '') . ' ' . ($row['surname'] ?? ''));
            $row['full_name'] = $built !== '' ? $built : get_the_title($id);
        }

        $data[(string) $id] = $row;
    }

    echo '<script id="' . esc_attr($json_script_id) . '" type="application/json">';
    echo wp_json_encode($data);
    echo '</script>';
}, 99);
