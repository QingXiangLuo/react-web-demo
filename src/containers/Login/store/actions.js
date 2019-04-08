import axios from 'axios';

import {
    HTTP_LOGIN, HTTP_LOGOUT
} from './constants';

const httpLogin = () => ({
    type: HTTP_LOGIN,
    value: true
});

export const httpLogOut = () => ({
    type: HTTP_LOGOUT,
    value: false
});

export const loginFun = (param) => {
    return (dispatch) => {
        axios.get('/api/login?account=' + param.account + '&password=' + param.password).then((res) => {
            const result = res.data.data;
            if(result){
                dispatch(httpLogin())
            }else{
                console.log('登录失败');
            }
        }).catch((e) => {
            console.log('detail error:',e);
        })
    }
}


