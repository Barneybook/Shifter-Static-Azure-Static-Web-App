/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import {
	Button,
} from '@wordpress/components';
import {
	compose,
} from '@wordpress/compose';
import {
	withDispatch,
	withSelect,
} from '@wordpress/data';
import {
	_x,
} from '@wordpress/i18n';
import {
	addQueryArgs,
} from '@wordpress/url';

/**
 * External dependencies
 */
import {
	ConfirmationDialog,
} from '@nab/components';

const DuplicateControlWidgetButton = ( {
	isConfirmationDialogForWidgetDuplicationVisible,
	isDuplicatingWidgets,
	openConfirmationDialog,
	closeConfirmationDialog,
	duplicateWidgets,
} ) => (
	<span>
		<Button
			className="page-title-action"
			onClick={ openConfirmationDialog }
			style={ { height: 'auto' } }
		>
			{ _x( 'Duplicate Control Widgets', 'command', 'nelio-ab-testing' ) }
		</Button>
		<ConfirmationDialog
			title={ _x( 'Duplicate Control Widgets?', 'title', 'nelio-ab-testing' ) }
			text={ _x( 'This will overwrite any widgets you may have in this variant with those included in your theme. Are you sure you want to continue?', 'user', 'nelio-ab-testing' ) }
			confirmLabel={
				isDuplicatingWidgets ?
					_x( 'Duplicating…', 'text (widgets)', 'nelio-ab-testing' ) :
					_x( 'Duplicate', 'command', 'nelio-ab-testing' )
			}
			isConfirmEnabled={ ! isDuplicatingWidgets }
			isCancelEnabled={ ! isDuplicatingWidgets }
			isOpen={ isConfirmationDialogForWidgetDuplicationVisible }
			onCancel={ closeConfirmationDialog }
			onConfirm={ duplicateWidgets }
		/>
	</span>
);

const addDialogStatus = withSelect( ( select ) => {
	const { getPageAttribute } = select( 'nab/data' );
	return {
		isConfirmationDialogForWidgetDuplicationVisible: getPageAttribute( 'isConfirmationDialogForWidgetDuplicationVisible', false ),
		isDuplicatingWidgets: getPageAttribute( 'isDuplicatingWidgets', false ),
	};
} );

const addDialogFunctions = withDispatch( ( dispatch, { experiment, alternative } ) => {
	const { setPageAttribute } = dispatch( 'nab/data' );
	return {
		openConfirmationDialog: () => setPageAttribute( 'isConfirmationDialogForWidgetDuplicationVisible', true ),
		closeConfirmationDialog: () => setPageAttribute( 'isConfirmationDialogForWidgetDuplicationVisible', false ),
		duplicateWidgets: () => {
			setPageAttribute( 'isDuplicatingWidgets', true );
			apiFetch( {
				path: addQueryArgs( '/nab/v1/widget/duplicate-control', { experiment, alternative } ),
				method: 'PUT',
			} ).finally( () => window.location.reload() );
		},
	};
} );

export default compose(
	addDialogStatus,
	addDialogFunctions,
)( DuplicateControlWidgetButton );
