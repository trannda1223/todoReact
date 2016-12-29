class AppComponent extends React.Component {
  constructor(props){
    super(props);

    this.nextTodoId = 1;
    this.state = {
      filter: { showCompleted: true },
      todos: [
        {id: this._nextTodoId++, text: "David", isCompleted: false},
        {id: this._nextTodoId++, text: "tran", isCompleted: true},
        {id: this._nextTodoId++, text: "aaa", isCompleted: true},
        {id: this._nextTodoId++, text: "bbb", isCompleted: false}
      ]
    };

    this._onShowCompletedChanged = this._onShowCompletedChanged.bind(this);
  }

  render(){
    const {filter} = this.state;

    return (
      <div>
        <h2>Todo List</h2>
        <label>
          Show Completed
          <input type="checkbox" checked={filter.showCompleted} onChange={this._onShowCompletedChanged}/>
        </label>
      </div>
    );
  }//render


  _onShowCompletedChanged(e) {
    this.setState({
      filter: {showCompleted: e.target.checked}//e.target is like 'this'
    })
  }

}//class


ReactDOM.render(
  <AppComponent/>,
  document.getElementById('application')
);


