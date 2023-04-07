import styled from 'styled-components';

export const BackdropLoader = styled('div')`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  /* background-color: rgb(0, 0, 0, 0.3);
  backdrop-filter: blur(10px); */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;
