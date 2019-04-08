import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from "react-router-redux";
import { CSSTransition } from 'react-transition-group';
import { actions } from './store/index.js';
import { withRouter, Link } from 'react-router-dom';
import { actions as loginActions } from '../../containers/Login/store/index';

import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper,SearchInfo,
    SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList,
} from './style';

const mapDispatchToProps = (dispatch) => {
    return {
        handleSearchFocus: (param) => {
            param.size === 0 && dispatch(actions.getSearchList());
            dispatch(actions.searchFocus());
        },
        handleSearchBlur: () => {
            dispatch(actions.searchBlur());
        },
        handleMouseEnter: () => {
            dispatch(actions.moustEnter());
        },
        handleMouseLeave: () => {
            dispatch(actions.mouseLeave());
        },
        handlePageChange: (param) => {
            dispatch(actions.headerPageChange(param));
        },
        httpLogOut: () => {
            dispatch(push('/login'));
            dispatch(loginActions.httpLogOut());
        }
    }
};

const mapStateToProps = (state) => {
    return {
        // 等价于 focused: state.getIn(['headerReducer','focused'])
        focused: state.get('headerReducer').get('focused'),
        searchDataList: state.get('headerReducer').get('searchList'),
        page: state.get('headerReducer').get('page'),
        totalPage: state.get('headerReducer').get('totalPage'),
        mouseIn: state.get('headerReducer').get('mouseIn'),
        login: state.get('loginReducer').get('login'),
    }
};


class Header extends PureComponent{

    handlePageChange = (page, totalPage, ref) => {
        let originAngle = ref.style.transform.replace(/[^0-9]/ig, ''); // 不是0-9替换成‘’
        if(originAngle){
            originAngle = parseInt(originAngle, 10);
        }else {
            originAngle = 0;
        }
        ref.style.transform = 'rotate('+ (originAngle + 360) +'deg)';

        this.props.handlePageChange({page: page, totalPage: totalPage});
    };

    handleMouseIn = () => {
      this.props.handleMouseEnter();
    };

    handleMouseLeave = () => {
      this.props.handleMouseLeave();
    };

    getListShadow = () => {
        const { focused, searchDataList, page, totalPage, mouseIn } = this.props;
        let pageList = [];
        let jsList = searchDataList.toJS();

        if(jsList.length){
            for(let i =((page-1) * 10); i<page * 10; i++){
                jsList[i] && pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]} </SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn){
            return (
                <SearchInfo onMouseEnter={this.handleMouseIn} onMouseLeave={this.handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => this.handlePageChange(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null;
        }
    };

    render() {
        const { focused, handleSearchFocus, handleSearchBlur, searchDataList, login } = this.props;

        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                
                <Nav>
                    <NavItem className="left active">
                        <Link to='/'>首页 </Link>
                    </NavItem>
                    <NavItem className="left active">
                        <Link to='/about'>关于 </Link>
                    </NavItem>
                    {
                        login ? 
                        <NavItem onClick={this.props.httpLogOut} className="right">退出</NavItem> : 
                        <Link to={'/login'}><NavItem className="right">登录</NavItem></Link>
                    }
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={300}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleSearchFocus(searchDataList)}
                                onBlur={handleSearchBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
                        {this.getListShadow()}
                    </SearchWrapper>
                </Nav>
                {
                    login ? 
                    <Addition>
                        <Link to='/writing'>
                            <Button><i className="iconfont">&#xe602;</i>写文章</Button>
                        </Link>

                        <Link to='/articalManage'>
                            <Button className="manage">文章管理</Button>
                        </Link>
                    </Addition>
                    : null
                }
                
            </HeaderWrapper>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));