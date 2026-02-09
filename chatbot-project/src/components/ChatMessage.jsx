import robotProfilePicture from '../assets/robot.png';
import userProfilePicture from '../assets/user.png'; 
import './ChatMessage.css'

export function ChatMessage({ message, sender }){
        
        return (
        <div className={sender === 
            'user' ? 'chat-message-user' : 'chat-message-robot'}> 
            {sender === 'robot' && (
                <img src={robotProfilePicture}
                className="chat-message-profile" 
                />
            )}
            <div className="chat-message-text">
            {message}
            </div>
            {sender==='user' && (
                <img src={userProfilePicture} 
                className="chat-message-profile"
                />
            )}
        </div>
        )
}
