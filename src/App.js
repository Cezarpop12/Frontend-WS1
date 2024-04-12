import React, { useState } from 'react';
import axios from 'axios';

function App() {
  // State variables for sign-up form fields
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // State variables for chat form fields
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [receiverName, setReceiverName] = useState('');
 

  // Function to handle sign-up form submission
  const handleSignUp = async (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      username: username,
      password: password,
      email: email
    };

    try {
      const response = await axios.post('http://localhost:8080/signUp', newUser);
      console.log('User signed up successfully:', response.data);
      // Optionally, you can handle success here (e.g., show a success message)
    } catch (error) {
      console.error('Error signing up:', error);
      // Optionally, you can handle errors here (e.g., show an error message)
    }
  };

  // Function to handle chat form submission
  const handleSendChat = async (event) => {
    event.preventDefault();

    const newChat = {
      senderName: senderName,
      receiverName: receiverName,
      message: message
    };

    try {
      const response = await axios.post('http://localhost:8080/chat', newChat);
      console.log('Chat message sent successfully:', response.data);
      // Optionally, you can handle success here (e.g., show a success message)
    } catch (error) {
      console.error('Error sending chat message:', error);
      // Optionally, you can handle errors here (e.g., show an error message)
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Your logo or branding can go here */}
        <p>Sign Up</p>
        <form onSubmit={handleSignUp}>
          {/* Input fields for sign-up form */}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Submit button for sign-up */}
          <button type="submit">Sign Up</button>
        </form>

        {/* Chat section */}
        <h2>Chat</h2>
        <form onSubmit={handleSendChat}>
          {/* Input fields for chat form */}
          <input
            type="text"
            placeholder="Sender"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Receiver"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {/* Submit button for chat */}
          <button type="submit">Send Chat</button>
        </form>
      </header>
    </div>
  );
}

export default App;
