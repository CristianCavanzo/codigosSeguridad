import { ClassState } from '@components/Home/ClassState/ClassState';
import { UseState } from '@components/Home/UseState/UseState';
import React from 'react';
const Home = () => {
	return (
		<div>
			<UseState name="use State" />
			<hr />
			<ClassState name="ClassState" />
		</div>
	);
};

export default Home;
