import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({ title, description, img, leftBtnText, rightBtnText }) {
  return (
    <Fade>
      <Wrap image={img}>
        <ItemText>
          <h1 className="item-text_title">{title}</h1>
          <p className="item-text_description">{description}</p>
        </ItemText>
        <Buttons>
          <ButtonGroup>
            <LeftButton className="button-group_btn">{leftBtnText}</LeftButton>
            {rightBtnText && (
              <RightButton className="button-group_btn">
                {rightBtnText}
              </RightButton>
            )}
          </ButtonGroup>
          <DownArrow src="images/down-arrow.svg" alt="down-arrow" />
        </Buttons>
      </Wrap>
    </Fade>
  );
}

export default Section;

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: ${(props) => `url("./images/${props.image}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  font-size: 1.3rem;
  max-width: 90%;
  .item-text_title {
    line-height: 2.5rem;
  }
  .item-text_description {
    padding-top: 20px;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    .item-text_title {
      font-size: 2.2rem;
    }

    .item-text_description {
      font-size: 1.2rem;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
  gap: 5rem;

  .button-group_btn:hover {
    opacity: 1;
    transform: scale(1.02);
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.9;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.7px;
  cursor: pointer;
  transition: 0.3s linear;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: #393c41;
  font-weight: 700;
`;

const DownArrow = styled.img`
  width: 50px;
  animation: animateDown infinite 1.5s;
`;
