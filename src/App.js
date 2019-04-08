import React, {Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import { Globalstyle } from './style'; // 全局样式控制
import { IconFontStyle } from './statics/font_icon/iconfont';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './components/header/index';
import store from './store/index';
import Home from './containers/Home/RootContainer/index';
import Detail from './containers/Detail/loadable.js';
import Login from './containers/Login/index';
import Writing from './containers/Writing/index';
import ArticalManage from './containers/ArticalManage/index';
import PersonalCenter from './containers/PersonalCenter/index';

class App extends Component {

    render() {
        // <Route path="/detail/:id" exact component={Detail} />
        return (
            <Fragment>
                <Provider store={store}>
                    <BrowserRouter>
                        <Fragment>
                            {/* exact 完全匹配路由 */}
                            <Header />
                            <Route path="/" exact component={Home} />
                            <Route path="/login" exact component={Login} />
                            <Route path="/writing" exact component={Writing} />
                            <Route path="/articalManage" exact component={ArticalManage} />
                            <Route path="/about" exact component={PersonalCenter} />
                            <Route path="/detail/:id" exact component={Detail} />
                        </Fragment>
                    </BrowserRouter>
                </Provider>
                <Globalstyle />
                <IconFontStyle />
            </Fragment>
        );
    }
}

export default App;
