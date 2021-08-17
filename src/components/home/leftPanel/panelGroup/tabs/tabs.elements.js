import styled, { css } from 'styled-components';

const List = styled.ul`
    display : flex;
    list-style-type : none;
    float : right;
    flex-direction: row;
    border-bottom: 1px solid #E0E7EA;
    border-width : 20%;
    width: 100%;
    cursor: pointer;
`;

const Div = styled.div`
    display : flex;
    margin-left : 6%;
    width: 87%;
`;

const Dialogs = styled.div`
    display : flex;
    margin-left : 6%;
    width: 87%;
    height: 65%;
`;

export { List, Div, Dialogs }