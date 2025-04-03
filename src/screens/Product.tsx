import Container from '../components/Container.tsx';
import '../App.css';
import { useNavigate } from 'react-router';
const Product = () => {
  const nav = useNavigate();
  return (
    <Container>
      <view>
        <text className="Title">Product from Product.tsx</text>
        <text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          rem harum culpa quasi unde natus illum error voluptatum, quia ipsam?
        </text>
        <text className="Subtitle" bindtap={() => nav('/')}>
          Back to home
        </text>
      </view>
    </Container>
  );
};

export default Product;
