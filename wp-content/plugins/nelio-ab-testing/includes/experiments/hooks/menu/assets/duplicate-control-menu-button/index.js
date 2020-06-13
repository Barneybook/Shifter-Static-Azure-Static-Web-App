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

const DuplicateControlMenuButton = ( {
	isConfirmationDialogForMenuDuplicationVisible,
	isDuplicatingMenu,
	openConfirmationDialog,
	closeConfirmationDialog,
	duplicateMenu,
} ) => (
	<>
		<Button
			className="page-title-action"
			onClick={ openConfirmationDialog }
			style={ { height: 'auto' } }
		>
			{ _x( 'Duplicate Control Menu', 'command', 'nelio-ab-testing' ) }
		</Button>
		<ConfirmationDialog
			title={ _x( 'Duplicate Control Menu?', 'title', 'nelio-ab-testing' ) }
			text={ _x( 'This will overwrite the items in your menu variant using those included in the control menu. Are you sure you want to continue?', 'user', 'nelio-ab-testing' ) }
			confirmLabel={
				isDuplicatingMenu ?
					_x( 'Duplicating…', 'text (widgets)', 'nelio-ab-testing' ) :
					_x( 'Duplicate', 'command', 'nelio-ab-testing' )
			}
			isConfirmEnabled={ ! isDuplicatingMenu }
			isCancelEnabled={ ! isDuplicatingMenu }
			isOpen={ isConfirmationDialogForMenuDuplicationVisible }
			onCancel={ closeConfirmationDialog }
			onConfirm={ duplicateMenu }
		/>
	</>
);

const addDialogStatus = withSelect( ( select ) => {
	const { getPageAttribute } = select( 'nab/data' );
	return {
		isConfirmationDialogForMenuDuplicationVisible: getPageAttribute( 'isConfirmationDialogForMenuDuplicationVisible', false ),
		isDuplicatingMenu: getPageAttribute( 'isDuplicatingMenu', false ),
	};
} );

const addDialogFunctions = withDispatch( ( dispatch, { experiment, alternative } ) => {
	const { setPageAttribute } = dispatch( 'nab/data' );
	return {
		openConfirmationDialog: () => setPageAttribute( 'isConfirmationDialogForMenuDuplicationVisible', true ),
		closeConfirmationDialog: () => setPageAttribute( 'isConfirmationDialogForMenuDuplicationVisible', false ),
		duplicateMenu: () => {
			setPageAttribute( 'isDuplicatingMenu', true );
			apiFetch( {
				path: addQueryArgs( '/nab/v1/menu/duplicate-control', { experiment, alternative } ),
				method: 'PUT',
			} ).finally( () => window.location.reload() );
		},
	};
} );

export default compose(
	addDialogStatus,
	addDialogFunctions,
)( DuplicateControlMenuButton );
