import React, { Component } from 'react';
import MouseComponent from './MouseComponent.js';
import CatComponent from './CatComponent.js';
import GraceHopperQuoteComponent from './GraceHopperQuoteComponent.js';

class App extends Component {
	render() {
		// your code in the return statement below!
		return (
			<div className="App">
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
			</div>
		);
	}
}

export default App;
