import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './UserInputStep.css';

class UserInputStep extends Component {
	constructor(props) {
		super(props);
		this.state = { number: '' };
		this.numsInput = React.createRef();
	}	
	doVerifyUserInput = (event) => {
		if(this.state.number !== '') {
			//alert('Start Verify...\n' + this.state.number);
			let nums = (this.state.number).split(",");
			//console.log(nums.length);
			let isNum = nums.find((item)=>{
				return isNaN(item)
			});
			//console.log(isNum);
			if (isNum === undefined){
				let Nums = nums.filter((item)=>{
					return item !== ''
				});
				//console.log(Nums);
				ReactDOM.render(<App nums={JSON.stringify(Nums)} />, document.getElementById('app'));
			} else {
				alert("Your numbers is not currect!. Please edit againt");
			}
		} else {
			alert("Please fill your numbers for bubble sort.");
		}
	}
	doInputChangeHandler = (event) => {
		this.setState({number: event.target.value});
	}
	componentDidMount(){
		this.numsInput.current.focus();
	}
	render() {
		return (
			<div className='UserInputStep'>
				<div className='Step-header'>
					<h2>Welcome to Bubble Sort App</h2>
				</div>
				<div className='App-Intro'>
					<p>Please fill your set of number(s) for bubble sort methode. Use comma (,) sign for seperate each numbers. Example 11, 15, 25, ... .Then click <b>OK</b> button.</p>
				</div>
				<div className='NumberInput'>
					<input type='text' placeholder='11, 15, 25, ...' ref={this.numsInput} onChange={this.doInputChangeHandler}/>
				</div>
				<div className='NextCommand'>
					<button onClick={this.doVerifyUserInput}>OK</button>
				</div>
			</div>
		);
	}
}

export default UserInputStep;
