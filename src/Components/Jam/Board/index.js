import React, { Component } from 'react';
import Message from "./Message/";

//import './index.css';

class Board extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      message: [
          {date: 1, messageText: "Message 1", messageId:'a', userId:'user1'},
          {date: 2, messageText: "Message 2", messageId:'b', userId:'user2'}
      ],

    }

    this.sendMessage = this.sendMessage.bind(this);

    console.log("constructor");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    console.log(this.props, nextProps);
    console.log(this.state, nextState);

    if(this.props.message.date !== nextProps.message.date){
        return true;
    }
    return false;
  }

  
  sendMessage(messageText){
    let message = Object.assign(this.state.message);
    message.push({
      messageText: messageText,
      read: false
    });
    this.setState({
        message,
        recentlyAddedMessage: true
    });

    setTimeout(()=>{
        this.setState({recentlyAddedMessage: false});
    },5000);
  }

  render() {
    console.log("render");
    return (
      <div className="MessageList">

        <p>Messages List</p>
        <ul>
            {this.state.message.map((e) => {
                return (
                  <Message 
                    key   = {e.messageId}
                    date  = {e.messageDate}
                    text = {e.messageText}
                  />
                )
            })}
        </ul>

      <input type="textarea" 
        placeholder="Message"
        value={this.state.messageText}
        onChange={this.onChangeMessage}
      />

      <button onClick={this.newMessage}>New Message</button>
      </div>
      );
  }
}




export default Board;




