import React from 'react';

class StepResult extends React.Component {
	constructor(props) {
		super(props);
		this.state = {numbers: [], time: 0};
	}
	static getDerivedStateFromProps(props, state) {
		return {numbers: props.numbers, time: props.time};
	}
	render() {
		return (
			<div>
				<h2>{this.state.time}. => {this.state.numbers}</h2>
			</div>
		);
	}
}

export default StepResult;