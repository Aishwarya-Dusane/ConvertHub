import styled from "styled-components";
import { StyleButton } from "./Calculators_SubComponent/FindAge";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import pages from "../navigation/pages";

const Wrapper = styled.section`
  display: flex;
  font-size: 50px;
  font-weight: bolder;
  color: #ffffff;
  background: linear-gradient(180deg, #00bfff 0%, #2a52be 100%);
  padding: 10px 0 10px 40px;
`;

const StyledButton2 = styled(StyleButton)`
  font-size: 12px;
  height: fit-content;
  align-self: center;
  max-width: max-content;
  padding: 4px;
`;

const StyledTransparentButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 50px;
  font-weight: bolder;
  color: #ffffff;
`;
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper className="HeaderTitle">
        <div style={{ display: "flex", width: "90%" }}>
          <StyledTransparentButton>ConvertHub</StyledTransparentButton>
        </div>
        <div style={{}}>
          <StyledButton2
            onClick={() => {
              navigate(pages.HOME);
            }}
            title="Back to main Menu"
          >
            Menu
          </StyledButton2>
        </div>
      </Wrapper>
    </>
  );
};

export default Header;
