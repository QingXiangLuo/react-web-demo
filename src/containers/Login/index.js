import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { 
	LoginWrapper, LoginBox, Input, Button,
 } from './style';
 import { actions } from './store';

const mapDispatch = (dispatch) => {
    return {
        handleLogin: (param) => {
			dispatch(actions.loginFun(param));
        }
    }
};

const mapState = (state) => {
    return {
        login: state.getIn(['loginReducer', 'login']),
    }
};

class Login extends PureComponent {

	handleLoginFun = (account, password) => {
		if(account.value && password.value){
			this.props.handleLogin({account: account.value, password: password.value});
		}
		
	};

    render() {
    	const { login } = this.props;

		if(!login){
        	return (
        		<LoginWrapper>
					<LoginBox>
						<Input placeholder='账号' ref={(input) => {this.account = input}} />
						<Input placeholder='密码' type='password' ref={(input) => {this.password = input}} />
						<Button onClick={() => this.handleLoginFun(this.account, this.password)}>登录</Button>
					</LoginBox>
            	</LoginWrapper>
            )
        }else{
			return (
                <Redirect to='/'/>
            )
        }
    }
}

export default connect(mapState, mapDispatch)(Login);