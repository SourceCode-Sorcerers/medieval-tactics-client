import React, { useState, useEffect } from 'react'
// import queryString from 'query-string'
import io from 'socket.io-client'

import TextContainer from '../TextContainer/TextContainer'
import Messages from '../Messages/Messages'
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'

import './Chat.css'

let socket

const Chat = (props) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [users, setUsers] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const ENDPOINT = 'http://localhost:5000/'

  useEffect(() => {
    socket = io(ENDPOINT)
  }, [ENDPOINT])

  const join = (name, room) => {
    // setRoom(room)
    // setName(name)
    console.log('The room is: ' + room)
    console.log('The name is: ' + name)
    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error)
      }
    })
  }
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ])
    })

    socket.on('roomData', ({ users }) => {
      setUsers(users)
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  return (
    <div className="outerContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <button onClick={() => join(name, room)}className={'button mt-20'} type="submit">Sign In</button>
      </div>
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
  )
}

export default Chat
