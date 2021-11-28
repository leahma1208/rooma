import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
 justify-content: center;
 align-items:center;
 width: 100%;
 height: 100%;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

function LoadingSpinner() {
  return (
    <Container>
      <Image src="/purpleload.gif" alt="" srcset="" />
    </Container>
  );
}

export default LoadingSpinner;
