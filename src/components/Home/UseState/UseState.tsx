import React, { useEffect, useReducer, useState } from 'react';
import { UseReducer, initialState } from 'src/hook/useReducer';
const SECURITY_CODE = 'paradigma';
const UseState = ({ name }) => {
	const [state, dispatch] = useReducer(UseReducer, initialState);

	const handleConfirm = () => {
		dispatch({
			type: 'CONFIRM',
		});
	};
	const handleError = () => {
		dispatch({
			type: 'ERROR',
		});
	};

	const handleValidate = () => {
		dispatch({
			type: 'VALIDATE',
		});
	};

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({
			type: 'WRITE',
			payload: event.target.value,
		});
	};

	const handleDelete = () => {
		dispatch({
			type: 'DELETE',
		});
	};
	const handleDontDelete = () => {
		dispatch({
			type: 'RESET',
		});
	};
	useEffect(() => {
		if (state.loading) {
			setTimeout(() => {
				if (state.value === SECURITY_CODE) {
					return handleConfirm();
				}
				handleError();
			}, 500);
		}
	}, [state]);

	if (!state.deleted && !state.confirmed) {
		return (
			<div className="containerContent">
				<h2>Eliminar {name}</h2>
				<p>Por favor, escriba el código de seguridad.</p>

				{state.error && !state.loading && <p>Error: el codigo es incorrecto</p>}
				{state.loading && <p>Cargando...</p>}
				{state.value}
				<input
					value={state.value}
					type="text"
					placeholder="Codigo de seguridad"
					onInput={handleInput}
				/>
				<button onClick={handleValidate}>Comprobar</button>
			</div>
		);
	} else if (state.confirmed && !state.deleted) {
		return (
			<div className="containerContent">
				<h2>Pedimos confirmacion. Seguro, segurin?</h2>
				<button onClick={handleDelete}>Si, eliminar</button>
				<button onClick={handleDontDelete}>No, eliminar</button>
			</div>
		);
	} else {
		return (
			<div className="containerContent">
				<h2>Eliminado con exito</h2>
				<button onClick={handleDontDelete}>Reset</button>
			</div>
		);
	}
};

export { UseState };
