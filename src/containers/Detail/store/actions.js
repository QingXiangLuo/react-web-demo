import axios from 'axios';

import {
    CHANGE_DETAIL
} from './constants';

const changeDetail = (payload) => ({
    type: CHANGE_DETAIL,
    payload
});

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail?id=' + id).then((res) => {
            const result = res.data.data;
            dispatch(changeDetail(result))
        }).catch((e) => {
            console.log('detail error:',e);
        })
    }
}


