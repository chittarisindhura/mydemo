import React from 'react';
class Bank extends React.Component{
	render(){
		return(<div>
			<h1> This is class</h1>
			<h1>this is  class component</h1>
			</div>
			)
		}
	}
	function Bank2(){
		return(<div>
		<h1>function component on class component</h1>
		<Bank/>
		</div>)
	}





	export default Bank2;