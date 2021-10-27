import react from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display: flex;
flex-direction: column;

`
const Head = styled.div`
font-size: 25px;
font-weight: 600;
color: #1E1E1E;
margin-bottom: 15px;

`
const Text = styled.div`
font-size: 20px;
color: #666666;
font-weight: 400;

`
const Copy = styled.button`
display: flex;
max-width: 200px;
justify-content: center;
align-items: center;
background-color: #F6F6FE;
border: none;
padding: 20px;
border-radius: 6px;
margin-top: 20px;
position: relative;
left: 50px;
`
const Img = styled.img`
margin-right: 10px;
`
const ButtonTxt = styled.div`
font-size: 23px;
color: #7751E8;
font-weight: 600;
;
`
const Invite = ({

}) => {
    return <Cont>
        <Head className="opensans">Invite a member with a link  </Head>
        <Text className="opensans">Invite a member to join your team from another device. </Text>
        <Copy>
        <Img src="/link.svg"></Img>
        <ButtonTxt className="opensans">Copy Link</ButtonTxt>
        </Copy>
    </Cont>
}

export default Invite;