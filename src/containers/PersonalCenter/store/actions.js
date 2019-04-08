import axios from 'axios';

import {
    HTTP_ABOUT_DETAIL
} from './constants';

const getAboutDetail = (payload) => ({
    type: HTTP_ABOUT_DETAIL,
    payload
});

export const httpGetdetail = () => {
    return (dispatch) => {
        axios.get('/api/about/detail').then((res) => {
            const result = res.data.data;
            dispatch(getAboutDetail(result))
        }).catch((e) => {
            console.log('detail error:',e);
        })
    }
}


