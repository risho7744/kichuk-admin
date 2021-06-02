import React, { useEffect, useState } from 'react'
import './App.css';
import Chat from './Components/Chat';
import SideBar from './Components/SideBar';
import Pusher from 'pusher-js';
import axios from './Components/axios';

function App() {

  const[messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
     setMessages(response.data);

    })
  }, []);

  useEffect(() => {
    const pusher = new Pusher('f6b9479e02ba9c3b2641', {
      cluster: 'mt1'
    });

    const channel = pusher.subscribe('messages');
      channel.bind('inserted', (newMessage) => {
        setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

  console.log(messages);
      

  return (
    <div className="app">
      <div className="app__body">
          
        <SideBar/>
        
        <Chat messages = {messages}/>

      </div>

    </div>
  );
}

export default App;
