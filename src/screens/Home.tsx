import Container from '../components/Container.tsx';
import '../App.css';
import { useNavigate } from 'react-router';
const Home = () => {
  const nav = useNavigate();
  return (
    <Container>
      <view>
        <text className="Title">Home from Home.tsx</text>
        <text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          rem harum culpa quasi unde natus illum error voluptatum, quia ipsam?
        </text>
        
        <text className='Subtitle' bindtap={() => nav('/product')}>
          Product
        </text>
        <text className='Subtitle' bindtap={() => nav('/')}>
          Back
        </text>
      </view>
    </Container>
  );
};

export default Home;
