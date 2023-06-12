import React from 'react';
interface Props {
	name: string;
}
interface State {
	error: boolean;
}

class ClassState extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			error: false,
		};
	}
	render(): React.ReactNode {
		const handleValidate = () => {
			this.setState((prevState) => ({
				...this.state,
				error: !prevState.error,
			}));
		};
		return (
			<div className="containerContent">
				<h2>Eliminar {this.props.name}</h2>
				<p>Por favor, escriba el código de seguridad.</p>
				{this.state.error && <p>Error: el codigo es incorrecto</p>}
				<input type="text" placeholder="Codigo de seguridad" />
				<button onClick={handleValidate}>Comprobar</button>
			</div>
		);
	}
}

export { ClassState };
