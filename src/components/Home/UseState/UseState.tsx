import { stat } from 'fs';
import React, { useEffect, useState } from 'react';
const SECURITY_CODE = 'paradigma';
const UseState = ({ name }) => {
	const [state, setState] = useState({
		error: false,
		loading: false,
		value: '',
		deleted: false,
		confirmed: false,
	});

	const handleConfirm = () => {
		setState({
			...state,
			loading: !state.loading,
			error: false,
			confirmed: true,
			value: '',
		});
	};
	const handleError = () => {
		setState({
			...state,
			error: true,
			confirmed: false,
			loading: !state.loading,
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

	const handleValidate = () => {
		setState({
			...state,
			loading: !state.loading,
		});
	};

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState({
			...state,
			error: false,
			value: event.target.value,
		});
	};

	const handleDelete = () => {
		setState({
			...state,
			deleted: true,
		});
	};
	const handleDontDelete = () => {
		setState({
			...state,
			confirmed: false,
			deleted: false,
		});
	};

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
