import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 10px;
  background-color: #ffe4c4;
  box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.15),
    0 10px 10px rgba(0, 0, 0, 0.12);
  @media screen and (min-width: 768px) {
    width: 380px;
    padding: 30px 30px;
  }
`;

const MainTitle = styled.h1`
  text-align: center;
  color: #fa8072;
`;

const ContactTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  color: #fa8072;
`;

export { Container, MainTitle, ContactTitle };
