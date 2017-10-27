import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comp from './Comp.js'

import {
  SocketProvider,
  socketConnect,
} from 'socket.io-react';


var socket = require('socket.io-client')('http://localhost:5000');
socket.on('introduction', function(data){
  console.log(data)
});
socket.on('ticket', function(data){
  console.log(`this is the apps console log of ${data}`)
  });
  


class App extends Component {
  render() {
    return <SocketProvider socket = {socket}>
      <Comp/>
      </SocketProvider>
   
    ;
  }
}

export default App;
