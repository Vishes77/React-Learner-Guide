class App extends React.Component {
  render() {
    return (
      <div>
        <p>Slot Machine</p>
        <Machine s1="🍈" s2="🍈" s3="🍈" />
        <Machine s1="🍈" s2="🍈" s3="🍇" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
