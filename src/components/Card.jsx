
import styled from 'styled-components'


const CardStyle = styled.div`
    transition: .2s;
    border-radius: 5px;
    width: 15rem; 
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`
const Container = styled.div`
    padding: 2px;
    text-align: center;
`
const Avatar = styled.img`
    border-radius: 5px 5px 0 0;
    width: 100%
`
const Card = ({name, email, id, username}) => {
    return (
        <CardStyle>
        
            <Avatar src={`https://robohash.org/${name}.png?size=200x200`}  alt='avatar' />
            <Container className="container">
                <h4><b> {name} </b></h4>
                <p> {username} <br />
                {email}</p>
            </Container>
        </CardStyle>
    )
}

export default Card 