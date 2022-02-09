import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        img="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        img="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        img="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        img="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />

      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money Back Guarantee"
        img="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
         <Section
        title="Power Upgrades for Your Home"
        description="Solar Rooftops that Cost Less"
        img="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
        <Section
        title="Accessories"
        description=""
        img="accessories.jpg"
        leftBtnText="Shop Now"
        
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  overflow-x: hidden;
`;
