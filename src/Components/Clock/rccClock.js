import {Component} from "react";

export class Clock extends Component{
    constructor (props){
      super(props)
      this.state = {date : new Date()}
      this.timer = null
    }
    componentDidMount(){
      this.timer = window.setInterval(this.tick.bind(this),1000)
    }
    componentWillUnmount(){
      window.clearInterval(this.timer)
    }
    tick(){
      this.setState({date:new Date()})
    }
    render(){
      
      return(
        <div className='clock'>
          <h1>ALARM: 6:22 AM</h1>
            <span>{this.state.date.toLocaleTimeString()}</span> <br/>
            <h1>MAY {this.state.date.toLocaleDateString()} MONDAY</h1>
        </div>
      )
    }
}