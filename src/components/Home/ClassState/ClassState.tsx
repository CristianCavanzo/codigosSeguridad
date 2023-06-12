import React from 'react';
import { Loading } from './Loading';
interface Props {
	name: string;
}
interface State {
	error: boolean;
	loading: boolean;
}

class ClassState extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			error: false,
			loading: false,
		};
	}
	UNSAFE_componentWillMount() {
		console.log('componentWillMount');
	}

	componentDidMount() {
		console.log('componentDidMount');
	}
	componentDidUpdate(): void {
		if (this.state.loading) {
			setTimeout(() => {
				this.setState((prevState) => ({
					...prevState,
					loading: false,
					error: true,
				}));
			}, 300);
		}
	}
	render(): React.ReactNode {
		const handleValidate = () => {
			this.setState({
				...this.state,
				loading: true,
			});
		};

		return (
			<div className="containerContent">
				<h2>Eliminar {this.props.name}</h2>
				<p>Por favor, escriba el código de seguridad.</p>
				{this.state.error && <p>Error: el codigo es incorrecto</p>}
				{this.state.loading && <Loading />}
				<input type="text" placeholder="Codigo de seguridad" />
				<button onClick={handleValidate}>Comprobar</button>
			</div>
		);
	}
}

export { ClassState };
