import react from "react";
import styled from "styled-components";
import Button from "../Button";

const BottomCont = styled.div`
  display: flex;
  height: 60px;
  margin-bottom: ${(props) => props.marginbottom};
`;

const OrderCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 35px;
  margin-top: 30px;
`;

const Order = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #3e3d3d;
`;

const UserCont = styled.div`
display:flex;
flex-direction: column;
position:relative;
margin-top: 30px;
margin-left: 50px;

`
const Wrap=styled.div`
display:flex;
align-items:center;


`
const Users = styled.div`
  font-size: 16px;
  color: #3e3d3d;
  font-weight: 600;
`;
const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 20px;
`;
const Assigned_User = ({
  display = "flex",
  order = "Order1",
  src = "/upload_pic.png",
  name = "Maria",
  marginbottom = "0px;",
}) => {
  return (
    <BottomCont marginbottom={marginbottom}>
      <OrderCont>
        <Order className="opensans">Order{order}</Order>
      </OrderCont>

      <UserCont>
        <Wrap>
          <Img src={src} />
          <Users className="opensans">{name}</Users>
        </Wrap>
      </UserCont>
    </BottomCont>
  );
};
export default Assigned_User;
