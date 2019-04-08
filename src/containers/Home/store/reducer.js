/**
 * immutable 对象的set方法，会结合之前的immutable对象的值，和设置的值，返回一个全新的对象
 * immutable 类似深拷贝，但只会改变子节点及其直属父节点，其余节点做共享
 */
import { fromJS } from 'immutable';
import {
    CHANGE_HOME_DATA, ADD_ARTICLE_LIST, TOOGLE_TOP_SHOW
} from './constants';


const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    page: 1,
    showScroll: false,
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    });
};

export default (state = defaultState, action) => {
    switch (action.type){
        case CHANGE_HOME_DATA:
            return changeHomeData(state, action);

        case ADD_ARTICLE_LIST:
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                'page': action.nextPage
            });
        
        case TOOGLE_TOP_SHOW:
            return state.set('showScroll', action.param);

        default:
            return state;
    }
}