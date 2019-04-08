import { fromJS } from 'immutable';
import axios from 'axios'
import {
    SEARCH_FOCUS, SEARCH_BLUR, GETSEARCHLIST, MOUSEENTER, MOUSELEAVE, HEADER_PAGE_CHANGE,
} from './constants';

const changeHeaderList = (data) => ({
    type: GETSEARCHLIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
    type: SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: SEARCH_BLUR
});

export const moustEnter = () => ({
    type: MOUSEENTER
});

export const mouseLeave = () => ({
    type: MOUSELEAVE
});

export const headerPageChange = (payload) => ({
    type: HEADER_PAGE_CHANGE,
    payload
});

// 悬浮框推荐数据  redux-thunk
export const getSearchList = () => {
    return (dispatch) => {
        axios.get('/api/headerSearchList.json').then((res) => {
            const data = res.data;
            dispatch(changeHeaderList(data.rows));
        }).catch((e) => {
            console.log('error');
        })
    }
};