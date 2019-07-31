import React from 'react';
import StepResult from './StepResult';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {numbers: [], results: [], count: 0};
	}	
	static getDerivedStateFromProps(props, state) {
		return {numbers: props.nums};
	}
	doBubbleSortStep = (time) =>{
		var nums;
		if(time === 1){
			nums = JSON.parse(this.state.numbers);
		} else {
			nums = this.state.results.pop();
		}
		var length = nums.length;
		if(time < length) {
			for (let i = 0; i < (length - 1); i++) { 
				if(Number(nums[i]) > Number(nums[i+1])) {
					var tmp = nums[i]; 
					nums[i] = nums[i+1];
					nums[i+1] = tmp; 
				}
			}
			return nums;
		} else {
			alert('Your Bubble Sort Process is success!');
			return ['Success'];
		}
	}
	doStartBubbleSort = (event) => {
		var count = this.state.count + 1;
		var steplogs = [];
		var length = this.state.results.length;
		for (let i = 0; i < (length); i++) {
			let log = JSON.stringify(this.state.results[i]);
			steplogs.push(JSON.parse(log));
		}	
		var temp = this.doBubbleSortStep(count);
		steplogs.push(temp);
		this.setState({results: steplogs, count: count});
	}
	doRefreshPage(){
		location.reload(); 
	}
	render() {
		let nums = JSON.parse(this.state.numbers);
		console.log('length=>' + nums.length);
		console.log('count=>' + this.state.count);

		let button;
		if (nums.length === this.state.count) {
			button = <button onClick={this.doRefreshPage}>Refresh</button>;
		}
		return (
			<div className="App">
				<div><p>Your Origin Numbers => </p><h2 className="OriginNumbers">{this.state.numbers}</h2></div>
				<p>Please Click on <b>Next</b> button for bubble sort Step by Step.</p>
				<button onClick={this.doStartBubbleSort}>Next</button>
				<br/>
				<p>The result of each step show as below.</p>
				{ this.state.results.map((item, key) =>
					<StepResult key={key+1} numbers={JSON.stringify(item)} time={key+1}/> 
				)}
				{button}
			</div>
		);
	}
}

export default App;