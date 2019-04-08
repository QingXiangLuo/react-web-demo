import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 56px;
    background: #eee;
    z-index: 0;
`;

export const LoginBox = styled.div`
    width: 400px;
    height: 220px;
    margin: 80px auto;
    padding-top: 30px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1)
`;

export const Input = styled.input`
    display: block;
    width: 200px;
    height: 30px;
    line-height: 30px
    padding: 0 10px;
    margin: 20px auto;
    color: #777;
`;

export const Button = styled.div`
    width: 180px;
    padding: 9px 18px;
    margin: 30px auto;
    color: #fff;
    font-size: 18px;
    background: #3194d0;
    border-radius: 25px;
    text-align: center;
    outline: none;
    cursor: pointer;
`;
