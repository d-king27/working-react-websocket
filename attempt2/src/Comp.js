import React, { Component } from 'react';
import logo from './logo.svg';
import App from './App.js';
import {
    SocketProvider,
    socketConnect,
  } from 'socket.io-react';



  
class Comp extends Component {
    constructor(props){
        super(props)
        this.state = {HW:[]}
        this.sayHelloWorld = this.sayHelloWorld.bind(this)
        
    }
    
    componentDidMount(){
        this.props.socket.on('ticket', (data)=>{
            console.log('*********',data)
            let newstate = this.state.HW.concat(data)
            this.setState({
                HW:newstate
            })
        })
    }

sayHelloWorld() {
    this.state.HW.map(function(item){
        return <p>{item}</p>
    })
}
  
  render() {
      console.log(this.props)
    return (
      <div className="App">
          <p>********hello world's ------></p>
          {this.sayHelloWorld()}
      </div>
    );
  }
}

export default socketConnect(Comp);
