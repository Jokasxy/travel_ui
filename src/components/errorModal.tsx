import React from 'react';
import { Context } from '../state/stateProvider';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import { hasError } from '../error/actions';

const ErrorModal = () => {
    const { state, dispatch } = React.useContext(Context);

    return (
		<Dialog
			open={state!.error.name.length > 0}
			onClose={() => dispatch(hasError('', '')) }>
			<DialogTitle>{state!.error.name}</DialogTitle>
			<DialogContent>{state!.error.error}</DialogContent>
		</Dialog>
	);
}

export default ErrorModal;
