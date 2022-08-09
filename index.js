
class Counter extends React.Component {
  constructor(){
    super();
  this.state = {
    count: 0,
    classSpan: 'span'
  }
}
render(){
 const AddOne = () => {
    this.setState({count: this.state.count + 1});
    if(this.state.count >=0){
      this.setState({
        classSpan: 'green'
      });
    }
  }
  const SubtractOne = () => {
    this.setState({count: this.state.count - 1});
    if(this.state.count <=0){
      this.setState({
        classSpan: 'red'
      });
  }
}
  const Reset = () => {
    this.setState({count: 0});
      this.setState({
        classSpan: 'span'
      });
  }
return(
<div className="container ">
  <h1 className="h1">Counter</h1>
  <span className={this.state.classSpan}> {this.state.count} </span>
  <div className="row">
  <button className="btn-sub"  onClick={SubtractOne}>-</button>
  <button className="btn-reset"  onClick={Reset}>Reset</button>
  <button className="btn-add" onClick={AddOne}>+</button>
  </div>
</div>
)}
}
ReactDOM.render(<Counter />, document.getElementById("root"));