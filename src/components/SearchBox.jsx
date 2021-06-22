
import styled from 'styled-components'


const Input = styled.input`
    padding: 1.2rem;
    width: 20rem;
    font-size: 1.1rem;
    cursor: pointer;
    outline:none;
    margin-bottom: 2rem;
    border-radius: 5px;
    border: none
`


const SearchBox = ({onInputHandler}) => {
    return (
        <Input onChange={onInputHandler} type='text' placeholder='Search your fav robot...' />
    )
}

export default SearchBox