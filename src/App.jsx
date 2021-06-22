
import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import Card from './components/Card'
import SearchBox from './components/SearchBox'
import './App.css'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
  width: 70rem;
`
const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
`

const App = () => {

  const [userList, setUserList] = useState([])
  const [userInput, setUserInput] = useState('')
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
    .then(users => setUserList(users))
  }, [])

  const onUserInputHandler = e => {
    setUserInput(e.target.value)
  }

  const renderList = userList.filter((user) => {
    return user.name.toLowerCase().includes(userInput.toLowerCase())
  }).map(({ id, name, username, email }) => {
    return <Card key={id} name={name} username={username} email={email} />
  })

  // const renderList = userList.map(({ id, name, username, email }) => {
  //   return <Card key={id} name={name} username={username} email={email} />
  // })

  return (
    <Main>
      <h1> Monster Relodox </h1> 
      <SearchBox value={userInput} onInputHandler={onUserInputHandler}  />
      <Wrapper>
           {renderList}
      </Wrapper>
      
      
     
    </Main>
  );
};

export default App;
