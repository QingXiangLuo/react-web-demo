import axios from 'axios';
import { fromJS } from 'immutable';
import {
    CHANGE_HOME_DATA, ADD_ARTICLE_LIST, TOOGLE_TOP_SHOW
} from './constants';

const changeHomeData = (result) => ({
	type: CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const addHomeList = (list, nextPage) => ({
    type: ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
})

export const tooglrTopShow = (param) => ({
    type: TOOGLE_TOP_SHOW,
    param
})

export const changeHomepageData = (payload) => {
    console.log('payload:',payload);
    // '/api/home?page='+payload.page+'&pageSize='+payload.pageSize
	return (dispatch) => {
		axios.get('/api/home').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        }).catch((err) => {
            console.log(err);
        })
	}
};

export const getMoreList = (param) => {
    return (dispatch) => {
        axios.get('/api/home/articleList?page=' + param).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, param + 1));
        }).catch((err) => {
            console.log(err);
        })
    }
}

