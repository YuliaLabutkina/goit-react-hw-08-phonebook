import styled from 'styled-components';

const FilterLabel = styled.label`
  display: block;
  text-align: center;
  margin: 0 auto;
  color: #fa8072;
  font-size: 22px;
  font-weight: bold;
`;

const FilterInput = styled.input`
  width: 200px;
  font-size: 18px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 16px;
  padding-right: 16px;

  &::placeholder {
    padding-left: 10px;
    font-size: 16px;
  }
`;

export { FilterLabel, FilterInput };
