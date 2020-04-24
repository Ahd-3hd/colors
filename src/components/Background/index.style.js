import styled from "styled-components";

const Wrapper = styled.div`
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
  background-position: right;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  @media (min-width: 760px) {
    background-size: contain;
  }
`;

export { Wrapper };
