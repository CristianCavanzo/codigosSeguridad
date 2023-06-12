import React from 'react';

class Loading extends React.Component {
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}
	constructor(props) {
		super(props);
	}

	render(): React.ReactNode {
		return <p>Cargando...</p>;
	}
}

export { Loading };
