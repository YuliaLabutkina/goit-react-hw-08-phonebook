import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  margin-top: 30px;
  margin-bottom: 30px;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const LabelForm = styled.label`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: #fa8072;
`;

const InputForm = styled.input`
  display: block;
  margin: 20px auto;
  padding-left: 16px;
  font-size: 18px;

  &::placeholder {
    padding-left: 10px;
    font-size: 16px;
  }
`;

const Button = styled.button`
  position: relative;
  display: inline-block;
  width: 180px;
  margin: 0 auto;
  color: #777674;
  font-weight: bold;
  text-decoration: none;
  text-shadow: rgba(255, 255, 255, 0.5) 1px 1px,
    rgba(100, 100, 100, 0.3) 3px 7px 3px;
  user-select: none;
  padding: 1em 2em;
  outline: none;
  border-radius: 3px / 100%;
  background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    ),
    linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0) 90%,
      rgba(255, 255, 255, 0.3)
    ),
    linear-gradient(
      to right,
      rgba(125, 125, 125, 1),
      rgba(255, 255, 255, 0.9) 45%,
      rgba(125, 125, 125, 0.5)
    ),
    linear-gradient(
      to right,
      rgba(125, 125, 125, 1),
      rgba(255, 255, 255, 0.9) 45%,
      rgba(125, 125, 125, 0.5)
    ),
    linear-gradient(
      to right,
      rgba(223, 190, 170, 1),
      rgba(255, 255, 255, 0.9) 45%,
      rgba(223, 190, 170, 0.5)
    ),
    linear-gradient(
      to right,
      rgba(223, 190, 170, 1),
      rgba(255, 255, 255, 0.9) 45%,
      rgba(223, 190, 170, 0.5)
    );
  background-repeat: no-repeat;
  background-size: 200% 100%, auto, 100% 2px, 100% 2px, 100% 1px, 100% 1px;
  background-position: 200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);
  box-shadow: rgba(0, 0, 0, 0.5) 3px 10px 10px -10px;

  &:hover {
    transition: 0.5s linear;
    background-position: -200% 0, 0 0, 0 0, 0 100%, 0 4px, 0 calc(100% - 4px);
  }

  &:active {
    top: 1px;
  }
`;

const Error = styled.div`
  color: #dc143c;
  font-weight: bold;
  line-height: 30px;
  padding: 20px 16px 0;
  font-size: 22px;
  text-align: center;
  margin-bottom: 16px;
`;

export { Container, Form, LabelForm, InputForm, Button, Error };
