import React, { useEffect, useState } from 'react';
const SECURITY_CODE = 'paradigma';
const UseState = ({ name }) => {
	const [state, setState] = useState({
		error: false,
		loading: false,
		value: '',
	});

	useEffect(() => {
		if (state.loading) {
			setTimeout(() => {
				let isValid = false;
				if (state.value === SECURITY_CODE) {
					isValid = true;
				}
				setState({
					...state,
					loading: !state.loading,
					error: !isValid,
				});
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
};

export { UseState };
