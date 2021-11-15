class App extends React.Component {
	render() {
		return (
			<div>
				<Friend
					name="ABC"
					hobbies= {["A","B","C"]}
				/>
				<Friend
					hobbies= {["E","F","G"]}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));