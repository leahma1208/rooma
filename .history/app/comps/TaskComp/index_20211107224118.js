import react from 'react';
import styled from 'styled-components';
import Button from '../../comps/Button';


const Cont = styled.div`
display:flex;
flex-direction:column;

min-width: 700px;
min-height: 650px;
box-shadow: 0px 4.0061163902282715px 47.07186508178711px 0px #0000001C;
border-radius: 20px;
`
const InputCont = styled.div`
display:flex;
margin: 20px;
justify-content: space-evenly;

`
const Input1 = styled.input`
padding: 20px 10px 10px 20px;
border: #C8C8C8 1px solid;
width: 200px;
font-size: 19px;
font-weight: 400;
border-radius: 10px;
margin-bottom: ${props=>props.marginbottom};
margin-top: 10px;
border:none;
background-color:#F6F6F6;
`
const Input2 = styled.input`
padding: 20px 10px 10px 20px;
border: #C8C8C8 1px solid;
width:400px;
font-size: 19px;
font-weight: 400;
border-radius: 10px;
margin-bottom: ${props=>props.marginbottom};
margin-top: 10px;
border:none;
background-color:#F6F6F6;

`
const Day = styled.div`
display:flex;
flex-direction: column;
margin: 20px 20px 10px 20px;

`
const Head = styled.div`
font-size: 25px;
font-weight: 700;
margin: 0px 0px 10px 25px;
color: #181135;
`
const ButtonCont =styled.div`
display:flex;
width: 85%;
margin: 10px 0px 10px 15px;
justify-content: space-evenly;

`
const DayButton = styled.button`
width: 65px;
height:50px;
font-size: 16px;
color: #181135;
font-weight: 600;
background: white;
border-radius: 13px;
border: 1px solid #DBDBDB;
`

const PtsButton = styled.button`
width: 65px;
height:50px;
font-size: 16px;
color: #181135;
font-weight: 700;
background: white;
border-radius: 13px;
border: 1px solid #DBDBDB;
`
const Span = styled.div`
font-size: 10px;
font-weight: 400;
color: #181135;
`
const MemWrap =styled.div`
display:flex;
width: 85%;
margin: 10px 0px 10px 15px;


`
const MemCont = styled.div`
display: flex;
flex-direction: column;
margin: 0px 30px 0px 15px;

`
const Avatar = styled.img`
width: 60px;
height: 60px;
`

const Name = styled.div`
font-weight: 600;
color: #3E3D3D;
margin-top: 10px;
`
const ButCont=styled.div`
display:flex;
width: 100%;
justify-content: flex-end;
`
const TabCont = styled.div`
display:flex;
flex-direction:row;
max-width: 700px;
align-items:center;
margin-bottom: 20px;s

`
const AddBtn = styled.div`
width:35px;
height:35px;
background-color:#7751E8;
border-radius:20px;
display:flex;
justify-content:center;
align-items:center;

`
const PlusIcon = styled.img`
width:20px;
height:20px;

`
const TaskComp = ({

})=>{
  return<Cont>
 <TabCont>
    <Button
    title="Garbage"
    width="120px"
    height="40px"
    borderRadius="18px"
    border="solid 1.8px"
    bgcolor="#ffffff"
    fontcolor="#7751E8"
    fontSize="16px"
    fontWeight="400"
    />
   <Button
    title="Garbage"
    width="120px"
    height="40px"
    borderRadius="18px"
    border="solid 1.8px"
    bgcolor="#ffffff"
    fontcolor="#7751E8"
    fontSize="16px"
    fontWeight="400"
    />
    <Button
    title="Garbage"
    width="120px"
    height="40px"
    borderRadius="18px"
    border="solid 1.8px"
    bgcolor="#ffffff"
    fontcolor="#7751E8"
    fontSize="16px"
    fontWeight="400"
    />
    <Button
    title="Garbage"
    width="120px"
    height="40px"
    borderRadius="18px"
    border="solid 1.8px"
    bgcolor="#ffffff"
    fontcolor="#7751E8"
    fontSize="16px"
    fontWeight="400"
    />
    <AddBtn>
    <PlusIcon src="/plus.svg"/>
    </AddBtn>
  </TabCont>
 <InputCont>
 <Input1 type="text" placeholder="Add New Task"/> <Input2 type="text" placeholder="Description"/>
 </InputCont>


 <Day>
     <Head className="opensans">Day</Head>
     <ButtonCont>
     <DayButton className="opensans">Mon</DayButton>
     <DayButton className="opensans">Tues</DayButton>
     <DayButton className="opensans">Wed</DayButton>
     <DayButton className="opensans">Thurs</DayButton>
     <DayButton className="opensans">Fri</DayButton>
     <DayButton className="opensans">Sat</DayButton>
     <DayButton className="opensans">Sun</DayButton>
     </ButtonCont>
 </Day>

 <Day>
     <Head className="opensans">Points</Head>
     <ButtonCont>
     <PtsButton className="opensans">10 <Span>Points</Span></PtsButton>
     <PtsButton className="opensans">20 <Span>Points</Span></PtsButton>
     <PtsButton className="opensans">30 <Span>Points</Span></PtsButton>
     <PtsButton className="opensans">40 <Span>Points</Span></PtsButton>
     <PtsButton className="opensans">50 <Span>Points</Span></PtsButton>
     <PtsButton className="opensans">60 <Span>Points</Span></PtsButton>
     <PtsButton className="opensans">70 <Span>Points</Span></PtsButton>
    
    
     </ButtonCont>
 </Day>

 <Day>
     <Head className="opensans">Members</Head>
     <MemWrap>
    <MemCont>
    <Avatar src="/Avatar2.png"/>
    <Name className="opensans">Victoria</Name>
    </MemCont>
    <MemCont>
    <Avatar src="/Avatar3.png"/>
    <Name className="opensans">Victoria</Name>
    </MemCont>
    <MemCont>
    <Avatar src="/Avatar2.png"/>
    <Name className="opensans">Victoria</Name>
    </MemCont>
     </MemWrap>
 </Day>

<ButCont>
<Button title="Add" width="122px" margin="0px 40px 40px 0px"/>
</ButCont>
  </Cont>
}
export default TaskComp