import styled from "styled-components";

const CardStyle = styled.div`
  transition: 0.2s;
  border-radius: 5px;
  width: 15rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background: linear-gradient(
    90deg,
    hsla(238, 100%, 71%, 1) 0%,
    hsla(295, 100%, 84%, 1) 100%
  );
`;
const Container = styled.div`
  padding: 2px 16px;
  text-align: center;
  margin-bottom: 1rem;
`;
const Avatar = styled.img`
  border-radius: 5px 5px 0 0;
  width: 100%;
  max-width: 100%;
`;

const Card = ({ name, email, id, username }) => {
  return (
    <CardStyle>
      <Avatar
        src={`https://robohash.org/${name}.png?size=200x200`}
        alt="avatar"
      />
      <Container className="container">
        <h4>
          <b> {name} </b>
        </h4>
        <p style={{ padding: ".4rem 0" }}>
          {username} <br />
          {email}
        </p>
      </Container>
    </CardStyle>
  );
};

export default Card;
