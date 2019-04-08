/**
 * immutable 对象的set方法，会结合之前的immutable对象的值，和设置的值，返回一个全新的对象
 * immutable 类似深拷贝，但只会改变子节点及其直属父节点，其余节点做共享
 */
import { fromJS } from 'immutable';
import {
    SEARCH_FOCUS, SEARCH_BLUR, GETSEARCHLIST, MOUSEENTER, MOUSELEAVE, HEADER_PAGE_CHANGE,
} from './constants';


const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    searchList: [],
    page: 1,
    totalPage: 1,
});

export default (state = defaultState, action) => {
    switch (action.type){
        case SEARCH_FOCUS:
            return state.set('focused', true);

        case SEARCH_BLUR:
            return state.set('focused', false);

        case GETSEARCHLIST:
            return state.merge({
                searchList: action.data,
                totalPage: action.totalPage
            });
            // return state.set('searchList', action.data).set('totalPage',action.totalPage);

        case MOUSEENTER:
            return state.set('mouseIn', true);

        case MOUSELEAVE:
            return state.set('mouseIn', false);

        case HEADER_PAGE_CHANGE:
            let page = 1;
            if(action.payload.page < action.payload.totalPage){
                page = action.payload.page + 1;
            }
            return state.set('page', page);

        default:
            return state;
    }
}