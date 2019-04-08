import styled from 'styled-components';
import logoPic from '../../statics/image/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
    z-index: 2;
`;

//  styled.a.attrs({
//     href: '/'  // a标签跳转路径为根目录
// })
export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 10px;
    display: block;
    height: 56px;
    width: 180px;
    background: url(${logoPic}) no-repeat;
    // background-size: contain;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
`;

export const Nav = styled.div`
    width: 930px;
    height: 100%;
    padding-left: 30px
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    cursor: pointer;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #969696;
        a {
            color: #969696;
            text-decoration: none;
        }
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 4px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        cursor: pointer;
        &.focused {
            background: #777;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 35px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #777;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 230px;
    }
    &.slide-enter {
        transition: all .3s ease-out;
    }
    &.slide-enter-active {
        width: 230px;
    }
    &.slide-exit {
        transition: all .3s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: #fff;
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .3s ease-in;
        transform: rotate(0deg);
        transform-origin: center center; // 旋转中心
    }
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 13px;
    margin-bottom: 13px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    display: inline-block;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 10px;
    line-height: 35px;
    border-radius: 19px;
    font-size: 14px;
    cursor: pointer;
    color: #fff;
    background: rgba(236, 97, 73, .7);
    &:hover {
        background: rgba(236, 97, 73, 1);
        transition: all .3s ease-out;
    }
    &.manage {
        margin-right: 30px;
    }
`;
