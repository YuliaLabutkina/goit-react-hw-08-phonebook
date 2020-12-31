import styled from 'styled-components';

const ListItem = styled.li`
  padding-left: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const Text = styled.p`
  color: #fa8072;
  margin: 0;
`;

const Button = styled.button`
  margin-left: 8px;
  background: #ffefd5;
  color: #fa8072;
`;

export { ListItem, Text, Button };
