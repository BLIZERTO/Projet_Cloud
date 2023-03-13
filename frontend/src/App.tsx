import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<head>
				<link href="/dist/output.css" rel="stylesheet"></link>
			</head>
			<header className="App-header">
				<img src={logo} className="App-logo h-6" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				{/* <a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a> */}
				<div className="flex h-6 text-3xl font-bold underline">
					<p>HELLO</p>
					<p>REGISTER</p>
				</div>
			</header>
		</div>
	);
}

export default App;
