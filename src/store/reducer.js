// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';  // 将 state 变为 immutable 对象类型
import { reducer as headerReducer } from '../components/header/store';
import { reducer as homeReducer } from '../containers/Home/store';
import { reducer as detailReducer } from '../containers/Detail/store';
import { reducer as loginReducer } from '../containers/Login/store';
import { reducer as writingReducer } from '../containers/Writing/store';
import { reducer as articalManageReducer } from '../containers/ArticalManage/store';
import { reducer as personalReducer } from '../containers/PersonalCenter/store';

const reducer = combineReducers({
    headerReducer: headerReducer,
    homeReducer: homeReducer,
    detailReducer: detailReducer,
    loginReducer: loginReducer,
    writingReducer: writingReducer,
    articalManageReducer: articalManageReducer,
    personalReducer: personalReducer,
});

export default reducer;
