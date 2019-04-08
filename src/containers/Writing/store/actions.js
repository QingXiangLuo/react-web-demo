import axios from 'axios';

import {
    HTTP_EDITER_CHANGE, HTTP_CHANGE_EDIT, HTTP_CHANGE_ITEM, HTTP_CANCEL_EDIT,
    HTTP_MARKDOWN_CHANGE, HTTP_GET_ARTICAL, HTTP_INPUT_TITLE, 
} from './constants';

export const httpEditerChange = (value) => ({
    type: HTTP_EDITER_CHANGE,
    value
});

export const httpMarkDownChange = (value) => ({
    type: HTTP_MARKDOWN_CHANGE,
    value
});

export const httpChangEdit = (value) => ({
    type: HTTP_CHANGE_EDIT,
    value
});

export const httpChangeItem = (value) => ({
    type: HTTP_CHANGE_ITEM,
    value
});

export const httpCancelEdit = () => ({
    type: HTTP_CANCEL_EDIT
});

export const getArtical = (result) => ({
    type: HTTP_GET_ARTICAL,
    result
});

export const httpInputTitle = (value) => ({
    type: HTTP_INPUT_TITLE,
    value
});

export const httpSaveContent = (param) => {
    return (dispatch) => {
        axios.get('/api/artical/addcontent?account=' + param.account + '&password=' + param.password).then((res) => {
            // const result = res.data.data;
            

        }).catch((e) => {
            console.log('detail error:',e);
        })
    }
};

export const httpGetArtical = (param) => {
    return (dispatch) => {
        axios.get('/api/artical/getetArtical?id=' + param.id).then((res) => {
            const result = res.data.data;
            dispatch(getArtical(result));
        }).catch((e) => {
            console.log('detail error:',e);
        })
    }
};


