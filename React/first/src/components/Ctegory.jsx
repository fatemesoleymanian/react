import {FaPizzaSlice , FaHamburger} from 'react-icons/fa';
import {GiChopsticks , GiNoodles} from 'react-icons/gi';
import {List} from '../style/styles';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Category(){
    return(
        <List>
            <SLinks to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLinks>
            <SLinks to={'/cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </SLinks>
            <SLinks to={'/cuisine/Japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </SLinks>
            <SLinks to={'/cuisine/Thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLinks>
        </List>
    );
}

const SLinks = styled(NavLink)`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right:2rem;
  text-decoration:none; 
  background: linear-gradient(35deg , #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  h4{
    color: white;
    font-size:0.8rem;
  }
  svg{
    color:white;
    font-size:1.5rem;
  }
  &.active{
    background: linear-gradient(to right, #f27121, #e94057);
    svg{
        color: white;
    }
    h4{
        color: white;
    }

  }
`;

export default Category;