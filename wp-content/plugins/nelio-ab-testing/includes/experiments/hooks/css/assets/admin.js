/**
 * WordPress dependencies
 */
import '@wordpress/core-data';
import '@wordpress/dom-ready';

/**
 * External dependencies
 */
import '@nab/data';

/**
 * Internal dependencies
 */
import { default as initCssEditorPage } from './css-editor';

window.nab = window.nab || {};
window.nab = {
	...window.nab,
	initCssEditorPage,
};
