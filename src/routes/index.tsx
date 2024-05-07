import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../components/Menu";
import styled from "styled-components";
import RGB from "../pages/RGB";
import HSLA from "../pages/HSLA";
import CMYK from "../pages/CMYK";

export default function Rotas() {
  return (
    <PageSld>
      <BrowserRouter>
        <Menu />
        <BodySld>
          <Routes>
            <Route path="/RGB" element={<RGB/>}/>
            <Route path="/CMYK" element={<CMYK/>}/>
            <Route path="/HSLA" element={<HSLA/>}/>
          </Routes>
        </BodySld>
      </BrowserRouter>
    </PageSld>
  );
}

const PageSld = styled.div`
  display: flex;
`;

const BodySld = styled.div`
  position: absolute;
  top: calc(
    50% + 60px
  );
  transform: translate(
    -50%,
    -50%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
