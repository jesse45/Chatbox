import styled from 'styled-components';

const User = styled.div`
    background-color : transparent;
    width : 80%;
    height : 11%;
    border : 1px solid red;
    display: inline-flex;
    margin-top : 6px;
    flex-direction: row;
`;

const Img = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`;
const AvatarContainer = styled.div`
    height: 50px;
    width: 50px;
    align-self: center;
    border-radius: 50%;
    text-align:center;
    background-color: lightgrey;
    margin-left: 10px;
    
`;

export { User, Img, AvatarContainer }