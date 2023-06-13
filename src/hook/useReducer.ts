interface State {
	error: boolean;
	loading: boolean;
	value: string;
	deleted: boolean;
	confirmed: boolean;
}
const initialState = {
	error: false,
	loading: false,
	value: '',
	deleted: false,
	confirmed: false,
};
type ACTION_TYPE = 'ERROR' | 'CHECK' | 'CONFIRM' | 'WRITE' | 'DELETE' | 'RESET' | 'VALIDATE';

interface Reducer {
	state: State;
	action: {
		type: ACTION_TYPE;
		payload?: any;
	};
}

const reducerObject = (state: Reducer['state'], payload: Reducer['action']['payload']) => ({
	ERROR: {
		...state,
		error: true,
		confirmed: false,
		loading: !state.loading,
	},
	CHECK: {
		...state,
		loading: true,
	},
	CONFIRM: {
		...state,
		loading: !state.loading,
		error: false,
		confirmed: true,
		value: '',
	},
	WRITE: {
		...state,
		error: false,
		value: payload,
	},
	DELETE: {
		...state,
		deleted: true,
	},
	RESET: {
		...state,
		confirmed: false,
		deleted: false,
	},
	VALIDATE: {
		...state,
		loading: !state.loading,
	},
});

const UseReducer = (state: Reducer['state'], action: Reducer['action']) =>
	reducerObject(state, action.payload)[action.type] || state;
export { initialState, UseReducer };
