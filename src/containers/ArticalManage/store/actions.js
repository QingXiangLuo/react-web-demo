import axios from 'axios';

import {
    GET_ARTICAL_LIST, HTTP_CHANGE_PAGE,
} from './constants';

const getArticalList = (payload) => ({
    type: GET_ARTICAL_LIST,
    payload
});

export const httpChangePage = (param) => ({
    type: HTTP_CHANGE_PAGE,
    param
});

export const httpGetArticalList = (param) => {
    return (dispatch) => {
        axios.get('/api/manage/getArticalList?page=' + param.page + '&pageSize=' + param.pageSize + '&articalTitle=' + param.articalTitle)
        .then((res) => {
            const result = res.data.data;
            dispatch(getArticalList(result))
        }).catch((e) => {
            console.log('detail error:',e);
        })
    }
}


