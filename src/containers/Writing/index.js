import React, { PureComponent } from 'react';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import ReactMarkdown from 'react-markdown';
import Milk from 'react-milkdown';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { 
    Menu, Tabs, message,
 } from 'antd';
import { 
	WritingWrapper, WritingLeft, WritingContent, ContentTitle, WritingRight, 
    Button, MarkdownHref, WritingLeftTop, 
} from './style';
import { actions } from './store';

const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

const mapDispatch = (dispatch) => {
    return {
        handleInputTitle: (value) => {
            dispatch(actions.httpInputTitle(value));
        },
        handleEditerChange: (value) => {
            dispatch(actions.httpEditerChange(value));
        },
        handleMarkDownChange: (value) => {
            dispatch(actions.httpMarkDownChange(value));
        },
        handleChangEdit: (value) => {
            dispatch(actions.httpChangEdit(value));
        },
        handleChangeItem: (value) => {
            dispatch(actions.httpChangeItem(value));
        },
        handleCancelEdit: () => {
            dispatch(actions.httpCancelEdit());
        },
        handleSaveContent: (param) => {
            dispatch(actions.httpSaveContent(param));
        },
        handleGetArtical: (param) => {
            dispatch(actions.httpGetArtical(param));
        }
    }
};

const mapState = (state) => {
    return {
        login: state.getIn(['loginReducer', 'login']),
        editIndex: state.getIn(['writingReducer', 'editIndex']),
        articalTitle: state.getIn(['writingReducer', 'articalTitle']),
        text: state.getIn(['writingReducer', 'text']),
        editorState: state.getIn(['writingReducer', 'editorState']),
        articalType: state.getIn(['writingReducer', 'articalType']),
    }
};

class Writing extends PureComponent {

    componentDidMount() {
        // 编辑文章，获取内容
        if(this.props.match.params.id) {
            this.props.handleGetArtical({id: this.props.match.params.id});
        }
    }

    // 输入文章标题
    handleTitleChange = (e) => {
        if(e.target.value.length > 100){
            e.target.value = e.target.value.substring(0, 100);
            message.warning('标题最多输入100中文字符长度！');
        }

        this.props.handleInputTitle(e.target.value);
    };

    handleArticalChange = (value) => {
        this.props.handleEditerChange(value);
    };

    // markDown 内容输入
    onMilkChange = (value) => {
        this.props.handleMarkDownChange(value);
        return value;
    };
    
    // 保存，提交发布
    submitContent = (index) => {
        const { editorState, articalTitle, text, editIndex, articalType } = this.props;

        let htmlContent = editIndex === 1 ? editorState.toHTML() : text;
        let param = {
            editType: editIndex,
            content: htmlContent,
            isRelease: index, // 0 未发布, 1 发布
            articalType: articalType, // 文章类型
            articalTitle: articalTitle,
        };

        this.props.handleSaveContent(param);
    };

    handleChangEdit = () => {
        this.props.handleChangEdit(this.props.editIndex);
    };

    switchAritcalType = (type) => {
        switch(type) {
            case '1':
                return 'React';
            case '2':
                return 'Angualr';
            case '3':
                return 'Vue';
            case '4':
                return 'Node.js';
            case '5':
                return 'Spring Boot';
            case '6':
                return 'Spring Cloud';
            case '7':
                return '散文随笔';
            default:
                return '';
        }
    };

    menuItemClick = (item) => {
        this.props.handleChangeItem(item.key);
    };

    handleCancelEdit = () => {
        this.props.handleCancelEdit();
    };

    render() {
    	const { login, text, editorState, editIndex, articalType } = this.props;

		if(login){
        	return (
				<WritingWrapper>
                    <WritingLeft>
                        <WritingLeftTop>
                            { 
                                articalType ? '已选： ' + this.switchAritcalType(articalType) : '请选择要发布的文章类型：'
                            }
                        </WritingLeftTop>
                        <Menu
                            mode="inline"
                            style={{ width: 250 }}
                            onClick = {this.menuItemClick}
                        >
                            <SubMenu key="sub1" title={<span><span>WEB开发</span></span>}>
                                <Menu.Item key="1">React</Menu.Item>
                                <Menu.Item key="2">Angualr</Menu.Item>
                                <Menu.Item key="3">Vue</Menu.Item>
                                <Menu.Item key="4">Node.js</Menu.Item>
                            </SubMenu>

                            <SubMenu key="sub2" title={<span><span>JAVA开发</span></span>}>
                              <Menu.Item key="5">Spring Boot</Menu.Item>
                              <Menu.Item key="6">Spring Cloud</Menu.Item>
                            </SubMenu>
                            
                            <SubMenu key="sub3" title={<span><span>散文随笔</span></span>}>
                              <Menu.Item key="7">散文随笔</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </WritingLeft>
                    <WritingContent>
                        <ContentTitle placeholder="请输入文章标题" onChange={this.handleTitleChange}>
                        </ContentTitle>
                        {
                            editIndex === 1 ? 
                            <BraftEditor 
                                value = {editorState}
                                onChange = {this.handleArticalChange} 
                                onSave = {this.submitContent}
                                style = {{height: '480px'}}
                            /> :
                            <div>
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="编辑" key="1">
                                        <Milk
                                            value = {text}
                                            onChange = {this.onMilkChange}
                                            style = {{width: '724px'}}
                                        />
                                    </TabPane>
                                    <TabPane tab="预览" key="2">
                                        <ReactMarkdown
                                            source={text}
                                            escapeHtml={false}
                                            style = {{width: '620px'}}
                                        />
                                    </TabPane>
                                </Tabs>
                            </div>
                        }
                    </WritingContent>
                    <WritingRight>
                        <MarkdownHref onClick={this.handleChangEdit}>
                            {editIndex === 1? '切换到MarkDown编辑模式' : '切换到富文本编辑模式'}
                        </MarkdownHref>
                        <Button onClick={() => this.submitContent(0)}>
                            保&nbsp;存
                        </Button>
                        <Button onClick={() => this.submitContent(1)}>
                            保存并发布
                        </Button>
                        <Button onClick={this.handleCancelEdit}>
                            取消编辑
                        </Button>
                    </WritingRight>
                </WritingWrapper>
            )
        }else{
			return (
                <Redirect to='/login'/>
            )
        }
    }
}

export default connect(mapState, mapDispatch)(withRouter(Writing));