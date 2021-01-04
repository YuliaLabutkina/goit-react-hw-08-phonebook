import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 1em;
  background-color: #ffe4c4;
  box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.15),
    0 10px 10px rgba(0, 0, 0, 0.12);
  font-size: 16px;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`;

export default Header;
