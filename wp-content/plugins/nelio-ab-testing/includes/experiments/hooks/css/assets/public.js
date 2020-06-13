/**
 * Internal dependencies
 */
import { default as initCssPreviewer } from './css-previewer';

window.nab = window.nab || {};
window.nab = {
	...window.nab,
	initCssPreviewer,
};
