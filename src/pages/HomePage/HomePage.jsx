import Goo from '../../components/Goo';
import Title from './HomePage.style';

const HomePage = () => {
  return (
    <>
      <Title>Welcome! This is Home page!!!</Title>
      {window.innerWidth > 960 && <Goo />}
    </>
  );
};

export default HomePage;
