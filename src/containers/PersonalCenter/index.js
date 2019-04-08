import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { 
    PersonalWrapper,  
} from './style';
import { connect } from 'react-redux';
import { actions } from './store/index';

const mapDispatch = (dispatch) => {
    return {
        handleGetdetail: () => {
            dispatch(actions.httpGetdetail());
        }
    }
};

const mapState = (state) => {
    return {
        data: state.getIn(['personalReducer', 'data']),
    }
};

class PersonalCenter extends PureComponent {

    componentDidMount(){
        this.props.handleGetdetail();
    }

    render() {
        return (
            <PersonalWrapper>
				个人中心
            </PersonalWrapper>
        )
    }
}

// 实现 loadable.js 与index的内容交互
export default connect(mapState, mapDispatch)(withRouter(PersonalCenter));