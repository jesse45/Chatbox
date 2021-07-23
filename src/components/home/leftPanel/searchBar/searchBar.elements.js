import styled from 'styled-components';

const Input = styled.input`
    color: inherit;
    border : none;
    background: none;
    padding-left: 10px;
    width: 100%;

    &:focus {
        outline : none;
    }

    &::placeholder {
        color: #9095A4;
    }
`;

const Form = styled.form`
    background-color : white;
    border-radius : 7px;
    height: 5%;
    width: 87%;
    align-items: center;
    display: flex;
    transition: all .3s;
    margin-left: 6%;
    position: relative;

    &:focus-within {
        transform: translateY(-2px);
        box-shadow: 0 0.7rem 3rem rgba(101, 90, 86, 0.08);
    }
`;

const Img = styled.img`
    height: 15px;
    width: 15px;
    margin-left: 10px;
    color: #9095A4;
`

export { Input, Form, Img };