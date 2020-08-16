<?php
/**
 * Plugin Name: Lifarl Image Strap
 * Description: Lifarl Image Strap — is a Gutenberg plugin created via create-guten-block.
 * Author: lifarl
 * Author URI: https://lifarl.com/
 * Version: 1.0.0
 * License: lifarl
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
define('SCRIPT_DEBUG', true);
/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
