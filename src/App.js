import { Component } from 'react';
import './App.css';
import { Clock } from './Components/Clock/rfcClock';
import CountdownTimer from './Components/CountDown/CountdownTimer';
let sec = 0; let min = 0; let hour = 0; 
 
class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      sec : 0,
      min : 0,
      hour: 0,
      scale: 'c'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeM = this.handleChangeM.bind(this)
    this.handleChangeH = this.handleChangeH.bind(this)
  }

  handleChange(e) {
    this.setState({sec: e.target.value})
  }
  handleChangeM(e) {
    this.setState({min: e.target.value})
  }
  handleChangeH(e) {
    this.setState({hour: e.target.value})
  }
  start(){
    this.setState({
      sec: this.state.sec,
      min: this.state.min,
      hour: this.state.hour
    })
     sec = this.state.sec
     min = this.state.min
     hour = this.state.hour
  }
  restart(){
    this.setState({sec: this.state.sec})
  }
  toggle(){
    if (this.state.scale === 'c') {
      this.setState({scale : 'd'})
      return this.state.scale ;
    }
    else if (this.state.scale === 'd') {
      this.setState({scale: 'c'})
      return this.state.scale ;
    }   
  }
  label(){
    return this.state.scale === 'c' ? 'CountdownTimer' : 'Clock' ;  
  }
  render(){
    //const {sec} = this.state// équivalent à this.state.sec // Enlever le commentaire si on veut lancer le timer automatiquement 
    const inputVal = (   ((parseFloat(hour))*3600) + ((parseFloat(min))*60) + (parseFloat(sec))  + 2) *1000;
    const timeNow = new Date().getTime();
    const difference = timeNow + inputVal;
  
    return <div className='All'>

    <div className='container'>
      <div id='texte'>Insert Hours , Minutes and Seconds Here - - - -{'>'}</div>
      <div className='inputs'>
      <input type="text" value={this.state.hour} onChange={this.handleChangeH}/>  
      <input type="text" value={this.state.min} onChange={this.handleChangeM}/>  
      <input type="text" value={this.state.sec} onChange={this.handleChange}/>
      </div>
    </div>
       
    <div>
        {this.state.scale === 'c' ? <Clock/> : <CountdownTimer targetDate={difference} />}
    </div>

    <div className='boutons'>
        <button onClick={this.start.bind(this)}>Start</button>
        <button onClick={this.restart.bind(this)}>Restart</button>
        <button onClick={this.toggle.bind(this)}>{this.label()}</button>
    </div>
  </div>
  }
}
export default App;

