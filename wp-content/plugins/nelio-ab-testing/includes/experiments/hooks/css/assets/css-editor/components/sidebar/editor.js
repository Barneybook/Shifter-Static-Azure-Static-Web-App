/**
 * External dependencies
 */
import { Controlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/css-hint';
import 'codemirror/addon/selection/active-line';

import 'codemirror/mode/css/css';

import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/hint/show-hint.css';

const CssEditor = ( {
	className,
	value,
	onChange,
} ) => (

	<CodeMirror
		className={ className }
		value={ value }
		onBeforeChange={ ( editor, data, newValue ) => {
			onChange( newValue );
		} }
		options={ {
			autoCloseBrackets: true,
			autoCloseTags: true,
			extraKeys: { 'Ctrl-Space': 'autocomplete' },
			lineNumbers: true,
			matchBrackets: true,
			mode: 'text/css',
			styleActiveLine: true,
		} }
	/>

);

export default CssEditor;
