import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { useEffect, useState } from "react"
import MessageBox from './MessageBox';
const axios = require('axios');

function App() {


  

  return (

    <MessageBox/>

    // <div>

    //   <Form onSubmit={sendMessage}>
    //     <Form.Group
    //       style={{
    //         display: "flex",
    //         justifyContent: "space-between"
    //       }} className="mb-3" controlId="formBasicEmail">

    //       <Form.Control
    //         onChange={(e) => { setText(e.target.value) }}
    //         type="text"
    //         placeholder="Enter your message"
    //       />
    //       <Button variant="primary" type="submit">
    //         Submit
    //       </Button>
    //     </Form.Group>
    //   </Form>

    //   <br />
    //   <br />
    //   <br />

    //   <div style={{ display: "flex", flexDirection: "column" }}>

    //     {messages?.map((eachMessage, eachMessageIndex) => (
    //       <div key={`${eachMessageIndex}-message`} style={{
    //         display: "flex",
    //         justifyContent: (eachMessage.sender === "user") ? "flex-end" : "flex-start"
    //       }}>
    //         <div>{eachMessage.text}</div>
    //       </div>
    //     ))}

    //   </div>
    // </div>
  );
}

export default App;