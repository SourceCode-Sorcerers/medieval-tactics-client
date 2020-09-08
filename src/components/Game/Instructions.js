import React, { Fragment } from 'react'

const Instructions = () => {
  return (
    <Fragment>
      <h2 style={{ marginTop: '50px', color: '#32a6a8' }}>Instructions</h2>
      <ul style={{ fontSize: '1.5em' }}>
        <li>To Create a game just write a game Id of your choice</li>
        <li>Tell you friend to Sign in and Join the game with the same Game Id</li>
        <li>After your friend joins you are ready to Play</li>
        <li>Click on your Character to Move and attack</li>
        <li>We will be adding more features over time, and we appreciate your feedback, feel free to create an issue <a href='https://github.com/SourceCode-Sorcerers/medieval-tactics-client/issues'>here</a></li>
      </ul>
    </Fragment>
  )
}

export default Instructions
