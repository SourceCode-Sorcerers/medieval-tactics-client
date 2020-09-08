import React from 'react'
import styled from 'styled-components'

// Custom Styled Components
const Container = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const H1 = styled.h1`
  margin-top: 20px;
  color: #32a6a8;
`

const Home = () => {
  return (
    <Container>
      <h1 style={{ fontSize: '3em' }}>Welcome to Medieval Tactics!</h1>
      <h2>Be aware that this game is still in development</h2>
      <h2>And we appreciate all your feedback, you can create an issue <a href='https://github.com/SourceCode-Sorcerers/medieval-tactics-client/issues'>here</a> </h2>

      <H1>Instructions</H1>
      <div style={{ fontSize: '2em' }}>
        <ul>
          <li>First Sign in or Sign up to Join the Game</li>
          <li>Then Choose a name and Click on Join Game</li>
          <li>Tell you friend to Sign in and Join the same game</li>
          <li>After your friend joins you are ready to Play</li>
        </ul>
      </div>
    </Container>
  )
}

export default Home
