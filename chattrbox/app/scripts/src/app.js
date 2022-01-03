import socket from './ws-client.js';
class ChatApp{
  constructor(){
    socket.init('ws://localhost:3031');
    socket.registerOpenHandler(()=>{
      let msg = new ChatMessage({message: "pow"})
      socket.sendMessage(msg.serialize());
    });
    socket.registerMessageHandler((data)=>{
      console.log(data);
    });
  }
}

class ChatMessage{
  constructor({
    message: m,
    user: u='anonymous',
    timestamp: t = (new Date()).getTime()}){

      this.message = m;
      this.user = u;
      this.timestamp = t;
  }

  serialize(){
    return {
      user : this.user,
      message: this.message,
      timestamp: this.timestamp
    };
  }
}
export default ChatApp;
