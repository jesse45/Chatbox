import styled from 'styled-components';
import plusButton from '../../../../assets/img/plus_button.svg'

const Button = styled.button`

    display:block;
    width:40px;
    height:40px;
    /* line-height:80px; */
    border: none;
    border-radius: 50%;
    color:#f5f5f5;
    text-align:center;
    text-decoration:none;
    background: #0072FF;
    box-shadow: 0 0 3px gray;
    font-size:20px;
    font-weight:bold;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    align-self: flex-end;
    left: -15%;
    top: -0.8em;
    /* transform: translateX(-180%) translateY(-20%); */

    &:hover {
        outline: none;
        transform: scale(1.05);
    }
    
    /* &::focus-within {
        transform: translateY(-2px);
        box-shadow: 0 0.7rem 3rem rgba(101, 90, 86, 0.08);
    } */
`;

const StyledMathPlus = styled.i`
  &,
  &::after {
    display: block;
    box-sizing: border-box;
    background: currentColor;
    border-radius: 10px;
  }
  & {
    margin-top: -2px;
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 2px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 16px;
    top: -7px;
    left: 7px;
  }
`


export { Button, StyledMathPlus };
