/**
 * WordPress dependencies
 */
import {
	Button,
	Dashicon,
} from '@wordpress/components';
import { _x } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import {
	withDispatch,
	withSelect,
} from '@wordpress/data';

const SaveButton = ( {
	experimentUrl,
	isExperimentBeingSaved = false,
	saveExperiment,
} ) => {

	return (
		<div className="nab-css-editor-sidebar__actions">

			<div className="nab-css-editor-sidebar__back-to-experiment">
				<a
					isLink
					className="nab-css-editor-sidebar__back-to-experiment-link"
					href={ experimentUrl }
					title={ _x( 'Back to test…', 'command', 'nelio-ab-testing' ) }
				>
					<Dashicon icon="arrow-left-alt2" />
				</a>
			</div>

			<div className="nab-css-editor-sidebar__save-info">
				{ isExperimentBeingSaved && (
					<span
						className="nab-css-editor-sidebar__saving-label"
					>
						<Dashicon icon="cloud" />
						{ _x( 'Saving…', 'text', 'nelio-ab-testing' ) }
					</span>
				) }
				<Button
					isPrimary
					disabled={ isExperimentBeingSaved }
					onClick={ saveExperiment }
				>{ _x( 'Save', 'command', 'nelio-ab-testing' ) }</Button>
			</div>

		</div>
	);

};

const addExperimentInfo = withSelect( ( select ) => {
	const {
		getExperimentAttribute,
		isExperimentBeingSaved,
	} = select( 'nab/editor' );
	return {
		isExperimentBeingSaved: isExperimentBeingSaved(),
		experimentUrl: getExperimentAttribute( 'experimentUrl' ),
	};
} );

const addFunctionToSaveExperiment = withDispatch( ( dispatch ) => {
	const { saveExperiment } = dispatch( 'nab/editor' );
	return {
		saveExperiment,
	};
} );

export default compose(
	addExperimentInfo,
	addFunctionToSaveExperiment,
)( SaveButton );

