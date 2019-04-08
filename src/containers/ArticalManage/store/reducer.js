/**
 * immutable 对象的set方法，会结合之前的immutable对象的值，和设置的值，返回一个全新的对象
 * immutable 类似深拷贝，但只会改变子节点及其直属父节点，其余节点做共享
 */
import { fromJS } from 'immutable';
import {
    GET_ARTICAL_LIST, HTTP_CHANGE_PAGE,
} from './constants';


const defaultState = fromJS({
    page: 1,
    pageSize: 10,
    articalDataList: null,
});

export default (state = defaultState, action) => {
    switch (action.type){
        case GET_ARTICAL_LIST:
            return state.merge({
                articalDataList: action.payload
            })

        case HTTP_CHANGE_PAGE:
            return state.set('page', action.param.page)

        default:
            return state;
    }
}