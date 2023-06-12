import React from 'react';
import { Loading } from './Loading';
const SECURITY_CODE = 'paradigma';
interface Props {
	name: string;
}
interface State {
	error: boolean;
	loading: boolean;
	value: string;
}

class ClassState extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			error: false,
			loading: false,
			value: '',
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
				let isValid = false;
				if (this.state.value === SECURITY_CODE) {
					isValid = true;
				}
				this.setState((prevState) => ({
					...prevState,
					loading: false,
					error: !isValid,
				}));
			}, 300);
		}
	}
	render(): React.ReactNode {
		const { error, loading, value } = this.state;
		const handleValidate = () => {
			this.setState({
				...this.state,
				loading: true,
			});
		};
		const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
			this.setState((state) => ({
				...state,
				error: false,
				value: event.target.value,
			}));
		};

		return (
			<div className="containerContent">
				<h2>Eliminar {this.props.name}</h2>
				<p>Por favor, escriba el código de seguridad.</p>
				<p>{value}</p>
				{error && !loading && <p>Error: el codigo es incorrecto</p>}
				{loading && <Loading />}
				<input value={value} onInput={handleValue} type="text" placeholder="Codigo de seguridad" />
				<button onClick={handleValidate}>Comprobar</button>
			</div>
		);
	}
}

export { ClassState };
