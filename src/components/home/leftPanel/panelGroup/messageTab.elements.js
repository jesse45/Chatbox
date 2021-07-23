import styled, { css } from 'styled-components';

const ListItems = styled.li`
    margin-right : 6%;
    color: #9095A4;

    ${(props) =>
        props.activeTab &&
        css`
      color: #2F80ED;

      ::after {
        content: "";
        position: relative;
        height: 5px;
        margin-top: 0.5rem;
        border-radius: 5px 5px 0 0;
        background-color: #2F80ED;
        display: block;
      }
    `}
    
`;

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

export { List, ListItems, Div };