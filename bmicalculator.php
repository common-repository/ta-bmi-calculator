<?php
/**
 * Plugin Name:       TA BMI Calculator
 * Description:       BMI Calculator is a calculator to find Body Mass Index
 * Version:           1.0.1
 * Author:            Tahir Afridi
 * Author URI:        https://tahirafridi.com/
 * License:           GPLv2
 * License URI:       https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 **/

if (!defined('WPINC')) {
    die;
}

if (!defined('BMICALCULATOR_PLUGIN_VERSION')) {
    define('BMICALCULATOR_PLUGIN_VERSION', '1.0.0');
}

if (!defined('BMICALCULATOR_PLUGIN_DIR_URL')) {
    define('BMICALCULATOR_PLUGIN_DIR_URL', plugin_dir_url(__FILE__));
}

if (!defined('BMICALCULATOR_PLUGIN_DIR_PATH')) {
    define('BMICALCULATOR_PLUGIN_DIR_PATH', plugin_dir_path(__FILE__));
}

if (!function_exists('bmicalculator_plugin_scripts')) {
    function bmicalculator_plugin_scripts() {
        wp_enqueue_style('bmicalculator-css', BMICALCULATOR_PLUGIN_DIR_URL . 'assets/css/style.css');
        wp_enqueue_script('bmicalculator-js', BMICALCULATOR_PLUGIN_DIR_URL . 'assets/js/bmicalculator.js', ['jquery']);
    }

    add_action('wp_enqueue_scripts', 'bmicalculator_plugin_scripts');
}

if (!function_exists('bmicalculator_form')) {
    function bmicalculator_form() {
        ob_start();

        require_once(BMICALCULATOR_PLUGIN_DIR_PATH . 'form.php');

        return ob_get_clean();
    }

    add_shortcode('show_bmicalculator', 'bmicalculator_form');
}
