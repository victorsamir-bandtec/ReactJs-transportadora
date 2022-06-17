import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    transform: translateX(250px);
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  display: grid;

  width: 100%;
  height: 70px;

  padding: 0 20px;

  align-items: center;
  grid-template-columns: 1fr 1fr;

  background: #fff;

  img {
    width: 40px;
    cursor: pointer;
  }

  .icon-menu {
    width: 24px;
    justify-self: flex-end;
  }
`;

export const Mobile = styled.div`
  position: absolute;
  width: 250px;
  height: 100vh;

  padding: 20px;
  animation: ${animation} 250ms ease-in-out;

  top: 0;
  right: 0;

  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.3);

  background: white;

  ul {
    margin-top: 25px;
    list-style: none;

    font-size: 28px;

    li {
      margin-top: 10px;
      padding: 8px;

      cursor: pointer;
    }
  }
`;
