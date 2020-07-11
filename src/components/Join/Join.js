import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Join.css'

export default function Join ({ setName }) {
  const [name1, setName1] = useState('')
  const [room, setRoom] = useState('')

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName1(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name1 || !room) ? e.preventDefault() : null} to={'/chat'}>
          <button onClick={() => setName(name1)}className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  )
}
