class Friend extends React.Component {
	static defaultProps = {
		name:'Not Given' // for default Value If Value is not given.
	}
	render() {
	  const { name, hobbies } = this.props;
		console.log(name)
	  return (
		<div>
		  <h1>{name}</h1>
		  <ul>
			{hobbies.map(h => <li>{h}</li>)}
		  </ul>
		</div>
	  )
	}
  }