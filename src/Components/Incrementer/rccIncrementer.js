export class MyButton extends Component{
    constructor (props){
      super(props)
      this.state = {n:0}
    }
  
    incrementer () {
      this.setState( (state) => ({n: state.n + 1}) )
    }
    render(){
     
      return(
        <>
        <button  onClick={this.incrementer.bind(this)}>Testing</button>
        <span>Test Nombre de clics {this.state.n}</span>
        </>
      )
    }
  }