import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Card from "./components/Card";
import SearchBox from "./components/SearchBox";
import { device } from "./data";
import "./App.css";


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background: #f9f9ff;
  }
`;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  justify-items: center;
  align-items: center;
  grid-gap: 1em;
`;
const Main = styled.main`
  padding: 1rem;
  text-align: center;

  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
    width: 70rem;
    margin: 0 auto;
  }
`;

const App = () => {
  const [userList, setUserList] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => setUserList(users));
  }, []);

  const onUserInputHandler = (e) => {
    setUserInput(e.target.value);
  };

  const renderList = userList
    .filter((user) => {
      return user.name.toLowerCase().includes(userInput.toLowerCase());
    })
    .map(({ id, name, username, email }) => {
      return <Card key={id} name={name} username={username} email={email} />;
    });

  return (
    <>
        <Main>
      <h1> Monster Relodox </h1>
      <SearchBox value={userInput} onInputHandler={onUserInputHandler} />
      <Wrapper>{renderList}</Wrapper>
      </Main>
      <GlobalStyle />
    </>

  );
};

export default App;
