class AppComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {count: 5};
  }

  render(){
    return (
      <h1 className="david">Hello World!</h1>
    );
  }
}

ReactDOM.render(
  <AppComponent/>,
  document.getElementById('application')
);


