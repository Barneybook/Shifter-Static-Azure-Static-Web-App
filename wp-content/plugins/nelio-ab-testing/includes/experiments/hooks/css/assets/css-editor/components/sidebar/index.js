/**
 * WordPress dependencies
 */
import { compose } from '@wordpress/compose';
import {
	withDispatch,
	withSelect,
} from '@wordpress/data';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import './style.scss';
import SaveButton from './save';
import CssEditor from './editor';
import FooterActions from './footer-actions';

const Sidebar = ( {
	className,
	value = '',
	onChange = () => {},
} ) => (

	<div className={ classnames( [ 'nab-css-editor-sidebar', className ] ) }>

		<SaveButton />

		<CssEditor
			className="nab-css-editor-sidebar__editor"
			value={ value }
			onChange={ onChange }
		/>

		<FooterActions />

	</div>

);

const addCssAlternativeValue = withSelect( ( select, { alternativeId } ) => {

	const { getAlternative } = select( 'nab/editor' );
	const alternative = getAlternative( alternativeId );

	if ( ! alternative ) {
		return;
	}//end if

	return {
		value: alternative.attributes.css,
	};

} );

const addOnValueChange = withDispatch( ( dispatch, { alternativeId }, { select } ) => {

	const { getAlternative } = select( 'nab/editor' );
	const alternative = getAlternative( alternativeId );

	if ( ! alternative ) {
		return;
	}//end if

	const { updateAlternative } = dispatch( 'nab/editor' );
	return {
		onChange: ( value ) => updateAlternative( alternative.id, {
			...alternative,
			attributes: {
				...alternative.attributes,
				css: value,
			},
		} ),
	};

} );

export default compose(
	addCssAlternativeValue,
	addOnValueChange
)( Sidebar );
