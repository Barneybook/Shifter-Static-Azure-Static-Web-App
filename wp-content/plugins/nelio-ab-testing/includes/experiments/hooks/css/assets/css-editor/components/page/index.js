/**
 * WordPress dependencies
 */
import {
	compose,
	ifCondition,
} from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import {
	StrictMode,
} from '@wordpress/element';
import {
	addQueryArgs,
	removeQueryArgs,
} from '@wordpress/url';

/**
 * External dependencies
 */
import { EditorProvider } from '@nab/editor';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import './style.scss';
import Sidebar from '../sidebar';
import CssPreview from '../preview';

const CssEditorPage = ( {
	areControlsVisible,
	experiment,
	alternativeId,
	cssValue,
	previewUrl,
} ) => (
	<StrictMode>
		<EditorProvider
			experiment={ experiment }
		>
			<div className="nab-css-editor">

				<Sidebar
					className={ classnames( {
						'nab-css-editor__sidebar': true,
						'nab-css-editor__sidebar--is-collapsed': ! areControlsVisible,
					} ) }
					alternativeId={ alternativeId }
				/>

				<CssPreview
					className={ classnames( {
						'nab-css-editor__preview': true,
						'nab-css-editor__preview--is-fullscreen': ! areControlsVisible,
					} ) }
					previewUrl={ previewUrl }
					value={ cssValue }
				/>

			</div>
		</EditorProvider>
	</StrictMode>
);

const addExperiment = withSelect( ( select, { experimentId } ) => {

	const { getExperiment } = select( 'nab/data' );
	return {
		experiment: getExperiment( experimentId ),
	};

} );

const addControlsVisibility = withSelect( ( select ) => {

	const { getPageAttribute } = select( 'nab/data' );
	return {
		areControlsVisible: getPageAttribute( 'areControlsVisible', true ),
	};

} );

const addCssAlternativeValue = withSelect( ( select, { experiment, alternativeId } ) => {

	if ( ! experiment ) {
		return;
	}//end if

	const { getAlternative } = select( 'nab/editor' );
	const alternative = getAlternative( alternativeId );
	if ( ! alternative ) {
		return;
	}//end if

	return {
		cssValue: alternative.attributes.css,
	};

} );

const addPreviewUrl = withSelect( ( select, { experiment } ) => {

	if ( ! experiment ) {
		return;
	}//end if

	const { getAlternative } = select( 'nab/editor' );
	const alternative = getAlternative( 'control' );

	const baseUrl = !! alternative.links ? alternative.links.preview || '/' : '/';
	const cleanUrl = removeQueryArgs( baseUrl, 'nab-preview', 'experiment', 'alternative' );
	const previewUrl = addQueryArgs( cleanUrl, {
		'nab-css-previewer': true,
	} );

	return {
		previewUrl,
	};

} );

const ifExperimentIsLoaded = ifCondition( ( { experiment } ) => !! experiment );

export default compose(
	addExperiment,
	addControlsVisibility,
	addPreviewUrl,
	ifExperimentIsLoaded,
	addCssAlternativeValue
)( CssEditorPage );

