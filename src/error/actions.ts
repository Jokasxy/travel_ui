import { ERROR } from '../state/reducer';

export const hasError = (name: string, error: string) => {
	return {
		type: ERROR,
		payload: {
			name: name,
			error: error,
		},
	};
}
