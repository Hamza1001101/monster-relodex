import styled from "styled-components";
import { device } from "../data";

const Input = styled.input`

       
      
          padding: 1.2rem;
          width: 20rem;
          font-size: 1.1rem;
          cursor: pointer;
          outline: none;
          margin: 2rem 0;
          border-radius: 5px;
          border: none;
        

  @media ${device.mobileL} {
    width: 15rem;
    font-size: 0.9rem;
    padding: 1rem;
    margin: 1.5rem 0;
  }
`;

const SearchBox = ({ onInputHandler }) => {
  return (
    <Input
      onChange={onInputHandler}
      type="text"
      placeholder="Search your fav robot..."
    />
  );
};

export default SearchBox;
