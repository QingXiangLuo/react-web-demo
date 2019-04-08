/**
 * immutable 对象的set方法，会结合之前的immutable对象的值，和设置的值，返回一个全新的对象
 * immutable 类似深拷贝，但只会改变子节点及其直属父节点，其余节点做共享
 */
import { fromJS } from 'immutable';
import {
    HTTP_EDITER_CHANGE, HTTP_CHANGE_EDIT, HTTP_CHANGE_ITEM, HTTP_CANCEL_EDIT,
    HTTP_MARKDOWN_CHANGE, HTTP_GET_ARTICAL, HTTP_INPUT_TITLE, 
} from './constants';


const defaultState = fromJS({
    articalTitle: '',
    text: '', // markDown 内容
    editorState: '', // editorState 编辑器内容
    editIndex: 1, // 1表示editer编辑器，2表示markDown编辑器
    articalType: null, // 编辑文章所选择的的文章类型 1-7
});

const changeTabIndex = (state, action) => {
    let tabIndex: number;
    if(action.value === 1){
        tabIndex = 2;
    }else{
        tabIndex = 1;
    }
    return state.set('editIndex', tabIndex);
}

export default (state = defaultState, action) => {
    switch (action.type){
        
        case HTTP_EDITER_CHANGE:
            return state.merge({
                editorState: action.value,
            })
        case HTTP_MARKDOWN_CHANGE:
            return state.set('text', action.value);

        case HTTP_CHANGE_EDIT:
            return changeTabIndex(state, action);

        case HTTP_CHANGE_ITEM:
            return state.set('articalType', action.value);

        case HTTP_CANCEL_EDIT:
            return state.merge({
                editorState: '',
                text: ''
            })
        case HTTP_GET_ARTICAL: 
            return state.merge({
                editorState: '',
                text: ''
            })
        case HTTP_INPUT_TITLE: 
            return state.set('articalTitle', action.value);
            
        default:
            return state;
    }
}