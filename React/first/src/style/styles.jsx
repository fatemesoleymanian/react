import { motion } from "framer-motion";
import styled from "styled-components";

const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  font-size: 2rem;
}
`;
const Wrapper = styled.div`
margin:4rem 0rem;
`;
const Cart = styled.div`
img{
  border-radius: 2rem;
  width:100%;
}
h4{
    text-align: center;
    padding: 1rem;
}
a{
  text-decoration : none;
}
`;

const Card = styled.div`
min-height:25rem;
position:relative;
border-radius: 2rem;

img{
  border-radius: 2rem;
position: absolute;
  left:0;
  width:100%;
  height:100%;
  object-fit:cover;
}
p{
    position: absolute;
    z-index:10;
    left:50%;
    bottom:10%;
    color:white;
    width:100%;
    transform: translate(-50% , 0%);
    text-align: center;
  font-weight: 600;
  font-size: 1rem;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;


const Gradiant = styled.div`
z-index:3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
border-radius: 2rem;

`;
const List = styled.div`
display:flex;
justify-content:center;
margin:2rem 0rem;

`;

const Grid = styled(motion.div)`
display: grid;
  grid-template-columns: repeat(auto-fit ,minmax(20rem , 1fr));
  grid-gap: 3rem;
`;

const FormStyle = styled.form`
margin :0rem 2rem;
position: relative;
width:100%;

input{
width:100%;
  border:none;
  font-size:1.5rem;
  background: linear-gradient(35deg , #494949, #313131);
  color:white;
  padding:1rem 3rem;
  border:none;
  border-radius:1rem;
  outline:none;
}
svg{
  position:absolute;
  top:50%;
  left:0%;
  transform:translate(100% , -50%);
  color:white;
}
`;
const DetailWrapper = styled.div`
margin-top:10rem;
margin-bottom:5rem;
width:100%;
display:flex;
.active{
  background: linear-gradient(35deg , #494949, #313131);
  color:white;

}
img{
  // width:300px;
  height:300px;
}
h2{
  margin-bottom:2rem;

}
p{
padding:1rem 0rem;
}
li{
  font-size:1.2rem;
  line-height:2.5rem;
}
ul{
  padding:1rem ;
  margin-top:2rem;
}

`;
const Button = styled.button`
padding:1rem ;
color: #313131;
background:white;
cursor: pointer;
border: 2px solid black;
margin-right: 1rem;
font-weight:600;
`;
const Info = styled.div`
margin-left:2rem;
`;

export {Wrapper,Card,Gradiant,List, Grid,Cart ,FormStyle , DetailWrapper , Button , Info ,Nav};