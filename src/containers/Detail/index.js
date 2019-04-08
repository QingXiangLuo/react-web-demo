import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { 
    DetailWrapper, Header, Content 
} from './style';
import { connect } from 'react-redux';
import { actions } from './store/index';

const mapDispatch = (dispatch) => {
    return {
        getDetail: (id) => {
        	dispatch(actions.getDetail(id));
        }
    }
};

const mapState = (state) => {
    return {
        title: state.getIn(['detailReducer','title']),
        content: state.getIn(['detailReducer','content']),
    }
};

class Detail extends PureComponent {

    articleId: number;

    componentWillMount() {
        this.articleId = this.props.match.params.id; // url/id
        // this.articleId = this.props.location.search
    }

	componentDidMount() {
		this.props.getDetail(this.articleId);
	}

    render() {

        console.log('文章id:',this.articleId);

        return (
            <DetailWrapper>
				<Header>
                    {this.props.title}
                </Header>
				<Content 
					dangerouslySetInnerHTML={{__html: this.props.content}}
				/> 
            </DetailWrapper>
        )
    }
}

// 实现 loadable.js 与index的内容交互
export default connect(mapState, mapDispatch)(withRouter(Detail));