import React, {useState} from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
import { selectCars } from "../features/car/CarSlice";

function Header() {
    let [active, setActive] = useState(false);
    const cars = useSelector(selectCars);
    
    function toggleActive(){
      setActive(prev => prev = !prev)
      console.log(active);
    }

  return (
    <Container>
      <a href="#" className="Navbar-logo">
        <img src="./images/logo.svg" alt="tesla logo" />
      </a>
      <Menu>
      {cars && cars.map((car, index) => {
        return <a key={index} href={car}>{car}</a>
      })}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">My Account</a>
      </RightMenu>
        <CustomMenu onClick={toggleActive} className="custom-menu"/>
      <BurgerNav show={active}>
      <CloseWrapper show={active}>
        <CustomClose onClick={toggleActive} show={active}/>
      </CloseWrapper>
        <li><a href="#">My Account</a></li>
        {cars && cars.map((car, index) => {
        return <li key={index}><a  href={car}>{car}</a></li>
      })}
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.1),
    transparent,
    rgba(255, 255, 255, 0.1)
  );
  min-height: 60px;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  z-index: 10;

  a {
    text-decoration: none;
    padding: 0 1rem;
    font-weight: 600;
    text-transform: uppercase;
    flex-wrap: no-wrap;
    transition: .3s linear;
  }

  a:hover {
      opacity: .7;
  }
`;
const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  a {
    font-size: .8rem;
  }

  @media(max-width: 1150px){
      display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 1150px){
      flex: 1;
      justify-content: flex-end;
  }
  @media(max-width: 650px){
      display: none;
  }

`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
    margin: 0 1rem;
    ${'' /* z-index: 10; */}
`

const BurgerNav = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    ${'' /* justify-content: space-evenly; */}
    width: 300px;
    background: white;
    transition: transform .3s ease-in-out, opacity .5s linear;
    padding: 20px;
    opacity: ${props => props.show ? 1 : 0};
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    

    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        
        a {
            font-weight: 600;
            display: flex;
            height: 100%;
        }
    }

    li:hover {
      background: #393c41;
    }

    li:hover a {
      color: white;
    }

    @media(max-width: 600px) {
        width: 100vw;
    }
`

const CustomClose = styled(Close)`
  margin: 0 20px 20px;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`