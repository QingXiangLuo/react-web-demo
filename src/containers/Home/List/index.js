import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { 
	ListItem, ListInfo, LoadMore
} from './style.js';

import { actions } from '../store/index.js';
import { Link } from 'react-router-dom';

const mapDispatch = (dispatch) => {
    return {
        getMoreData: (param) => {
			dispatch(actions.getMoreList(param))
        }
    }
};

const mapState = (state) => {
    return {
        articleList: state.getIn(['homeReducer', 'articleList']),
        page: state.getIn(['homeReducer', 'page']),
    }
};

class List extends PureComponent {
	

    render() {

		const { page } = this.props;

		// to={'/detail/' + item.get('id')}
		// /detail?id=

        return (
        	<Fragment>
	        	{
	        		this.props.articleList.map((item, index) => {
						return (
							<Link key={item.get('id')} to={'/detail/' + item.get('id')} >
								<ListItem>
									<img className="list_pic" alt="" src={item.get('imgPath')} />
									<ListInfo>
										<h3 className="title" >{item.get('title')}</h3>
										<p className="content" >{item.get('desc')}</p>
									</ListInfo>
					            </ListItem>
				            </Link>
						)
	        		})
	        	}
	        	<LoadMore onClick={() => this.props.getMoreData(page)}>加载更多</LoadMore>
        	</Fragment>
        )
    }
}

export default connect(mapState, mapDispatch)(List);