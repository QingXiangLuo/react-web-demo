/**
 * PureComponent 实现了shouldComponentUpdate  与 immuable.js 连用 很好的提高性能
 */

import React, { PureComponent } from 'react';
import Topic from '../Topic/index.js';
import List from '../List/index.js';
// import Writer from '../Writer/index.js';
import Recommend from '../Recommend/index.js';
import { connect } from 'react-redux';

import { 
    HomeWrapper, HomeContent, HomeRight, BackTop
} from './style.js';

import { actions } from '../store/index.js';


const mapDispatch = (dispatch) => {
    return {
        handleChangeHomeData: (param) =>{
            dispatch(actions.changeHomepageData(param));
        },
        changeScroolTop: () => {
            if(document.documentElement.scrollTop > 400){
                dispatch(actions.tooglrTopShow(true))
            }else {
                dispatch(actions.tooglrTopShow(false))
            }
            console.log(document.documentElement.scrollTop);
        }
    }
};

const mapState = (state) => {
    return {
        showScroll: state.getIn(['homeReducer','showScroll'])
    }
};


class Home extends PureComponent {

    componentDidMount() {
        let param = {
            page: 1,
            pageSize: 10
        };
        this.props.handleChangeHomeData(param);
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScroolTop());
    }

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    // 页面销毁，去掉event事件
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScroolTop());
    }

    render() {
        return (
            <HomeWrapper>
                <HomeContent>
                    <img alt="" className='banner_image' src="//upload.jianshu.io/admin_banners/web_images/4581/8cfb95afa4ac98683ce1b9ab0f835f425e6a7df5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeContent>
                <HomeRight>
                    <Recommend />
                    {/*<Writer />*/}
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
                }
                
            </HomeWrapper>
        )
    }
}

export default connect(mapState, mapDispatch)(Home);