import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from './store/index';
import { 
    Form, Row, Col, Input, Button, Table,
} from 'antd';
import { 
    ArticalManageWrapper, PageTitle, 
} from './style';

const FormItem = Form.Item;

const mapDispatch = (dispatch) => {
    return {
        handleGetArticalList: (param) => {
            dispatch(actions.httpGetArticalList(param));
        },
        handleChangePage: (param) => {
            dispatch(actions.httpChangePage(param));
        }
    }
};

const mapState = (state) => {
    return {
        page: state.getIn(['articalManageReducer','page']),
        pageSize: state.getIn(['articalManageReducer','pageSize']),
        articalDataList: state.getIn(['articalManageReducer','articalDataList']),
    }
};

class ArticalManage extends PureComponent {

     componentDidMount() {
        const { page, pageSize } = this.props;
        this.handleQueryData(page, pageSize);
    }

    handleQueryData = (page, pageSize) => {
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                let param = {
                    page: page,
                    pageSize: pageSize,
                    articalTitle: values.articalTitle || ''
                };
                this.props.handleGetArticalList(param);
            }
        });
    };

    resetFormContent = () => {
        this.props.form.resetFields(['articalTitle']);
    };

    onChange = (current) => {
        this.props.handleChangePage({page: current});
    };

    // 发布文章或取消发布
    handleReleaseByIt = (record) => {
        
    };

    // 删除文章
    handleRemoveById = (record) => {

    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { pageSize, page } = this.props;

        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 16},
        };

        const pagination = {
            defaultPageSize: pageSize,
            current: page,
            total: this.checkTotal,
            onChange:this.onChange.bind(this)
        };

        const columns = [
            {
                title: '序号',
                dataIndex: 'id',
            },
            {
                title: '文章标题',
                dataIndex: 'title',
                width: 200,
            },
            {
                title: '创建时间',
                dataIndex: 'createDate',
            },
            {
                title: '最后一次更新',
                dataIndex: 'lastUpdate',
            },
            {
                title: '发布状态',
                dataIndex: 'releaseType',
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                render: (text: any, record: any, index: number) => {
                    return <div>
                        <Link to={"/writing/" + record.id}>
                            编辑文章
                        </Link>
                        <span style={{marginLeft: 20}} onClick={() => this.handleReleaseByIt(record)}>发布文章</span>
                        <span style={{marginLeft: 20}} onClick={() => this.handleRemoveById(record)}>删除文章</span>
                    </div>;
                }
            }
        ];
        
        return (
            <ArticalManageWrapper>
				<PageTitle>文章管理</PageTitle>
                <Form
                    className="ant-advanced-search-form"
                    onSubmit={(event: any) => {
                        event.preventDefault();
                        this.handleQueryData(this.props.page, this.props.pageSize);
                    }}
                >
                    <Row>
                        <Col span={5}>
                            <FormItem
                                {...formItemLayout}
                                label="文章标题"
                            >
                                {getFieldDecorator('articalTitle', {
                                    rules: [
                                        { required: false },
                                    ],
                                })(
                                    <Input placeholder="请输入文章标题" />
                                )}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <Button type="primary" htmlType="submit" >搜索</Button>
                            <Button style={{marginLeft: '20px'}} onClick={this.resetFormContent}>重置</Button>
                        </Col>
                    </Row>

                    <Table pagination={pagination} columns={columns} dataSource={this.data}/>
                </Form>
            </ArticalManageWrapper>
        )
    }
}

// 实现 loadable.js 与index的内容交互
export default connect(mapState, mapDispatch)(withRouter(Form.create()(ArticalManage)));