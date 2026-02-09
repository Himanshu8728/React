import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import { ChatInput } from './components/Chatinput.jsx';
import ChatMessages from './components/ChatMessages.jsx';
import './App.css'



function App(){
        const [chatMessages, setChatMessages] = useState([{
            message: 'hello chatbot',
            sender: 'user',
            id:'id1'
        }, {
            message: 'Hello! How can I help you?',
            sender: 'robot',
            id:'id2'
        }, {
            message: 'can you tell me todays date',
            sender: 'user',
            id:'id3'
        }, {
            message: 'Today is January 11',
            sender: 'robot',
            id:'id4'
        }]);

        return (
        <div className="app-container">
            <ChatMessages 
            chatMessages={chatMessages}
            />
            <ChatInput 
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
            />
        </div>
     )
    }


export default App
