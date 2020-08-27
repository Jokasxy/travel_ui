import React from 'react';
import { Context } from '../state/stateProvider';
import { Dialog, DialogTitle, DialogContent, makeStyles } from '@material-ui/core';
import { hasError } from '../error/actions';

const ErrorModal = () => {
	const { state, dispatch } = React.useContext(Context);
	const classes = useClasses();

    return (
		<Dialog
			open={state!.error.name.length > 0}
			onClose={() => dispatch(hasError('', '')) }>
			<DialogTitle className={classes.modalTitle}>
				{state!.error.name}
			</DialogTitle>
			<DialogContent className={classes.modalContent}>
				{state!.error.error}
			</DialogContent>
		</Dialog>
	);
}

export default ErrorModal;

const useClasses = makeStyles({
	modalTitle: {
		backgroundColor: '#282c34',
		color: 'white',
		textAlign: 'center',
	},
	modalContent: {
		padding: '24px',
	}
});
