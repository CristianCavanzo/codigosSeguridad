import React, { useEffect, useState } from 'react';

const UseState = ({ name }) => {
	const [state, setState] = useState({
		error: false,
		loading: false,
	});
	useEffect(() => {
		if (state.loading) {
			setTimeout(() => {
				setState({
					...state,
					loading: !state.loading,
					error: !state.error,
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
	return (
		<div className="containerContent">
			<h2>Eliminar {name}</h2>
			<p>Por favor, escriba el código de seguridad.</p>

			{state.error && <p>Error: el codigo es incorrecto</p>}
			{state.loading && <p>Cargando...</p>}

			<input type="text" placeholder="Codigo de seguridad" />
			<button onClick={handleValidate}>Comprobar</button>
		</div>
	);
};

export { UseState };
