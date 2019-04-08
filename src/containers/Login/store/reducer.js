/**
 * immutable 对象的set方法，会结合之前的immutable对象的值，和设置的值，返回一个全新的对象
 * immutable 类似深拷贝，但只会改变子节点及其直属父节点，其余节点做共享
 */
import { fromJS } from 'immutable';
import {
    HTTP_LOGIN, HTTP_LOGOUT
} from './constants';


const defaultState = fromJS({
    login: true,
});

export default (state = defaultState, action) => {
    switch (action.type){
        case HTTP_LOGIN:
            console.log('登录成功：', action.value);
            return state.merge({
                login: action.value,
            })

        case HTTP_LOGOUT: 
            return state.merge({
                login: action.value,
            })

        default:
            return state;
    }
}