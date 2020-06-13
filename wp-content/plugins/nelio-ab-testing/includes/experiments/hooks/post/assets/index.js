/**
 * External dependencies
 */
import '@nab/data';

/**
 * Internal dependencies
 */
import { default as initEditPostAlternativeMetabox } from './post-alternative-metabox';
import { default as initEditPostAlternativeBlockEditorSidebar } from './post-alternative-sidebar';

window.nab = window.nab || {};
window.nab = {
	...window.nab,
	initEditPostAlternativeMetabox,
	initEditPostAlternativeBlockEditorSidebar,
};
