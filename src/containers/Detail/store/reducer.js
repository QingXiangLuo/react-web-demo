/**
 * immutable 对象的set方法，会结合之前的immutable对象的值，和设置的值，返回一个全新的对象
 * immutable 类似深拷贝，但只会改变子节点及其直属父节点，其余节点做共享
 */
import { fromJS } from 'immutable';
import {
    CHANGE_DETAIL
} from './constants';


const defaultState = fromJS({
    title: '文章标题',
    content: '<img src="" alt=""/><p>著名女作家杨绛曾说：“我们曾如此渴望命运的波澜。到最后才发现，人生最曼妙的风景，竟是内心的淡定和从容”。</p>'
});

export default (state = defaultState, action) => {
    switch (action.type){
        case CHANGE_DETAIL:
            return state.merge({
                title: action.payload.title,
                content: action.payload.content
            })

        default:
            return state;
    }
}