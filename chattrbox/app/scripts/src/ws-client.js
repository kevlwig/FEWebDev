let socket;

function init(url){
  socket = new WebSocket(url);
  console.log('connecting...');
}

function registerOpenHandler(handlerFn){
  socket.onopen = ()=>{
    console.log('open');
    handlerFn();
  };
}

function registerMessageHandler(handlerFn){
  socket.onmessage = (e) => {
    console.log('message', e.data);
    let data = JSON.parse(e.data);
    handlerFn(data);
  };
}

function sendMessage(payload){
  socket.send(JSON.stringify(payload));
}

export default {
  init,
  registerOpenHandler,
  registerMessageHandler,
  sendMessage
}
