import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
	TopicWrapper, TopicItem 
} from './style.js';

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
};

const mapStateToProps = (state) => {
    return {
        topicList: state.get('homeReducer').get('topicList'),
    }
};

class Topic extends PureComponent {

    render() {
        return (
            <TopicWrapper>
	            {
	            	this.props.topicList.map((item, index) => {
						return (
							<TopicItem key={item.get('id')}>
			            		{item.get('imgPath') && <img className="topic_pic" alt="" src={item.get('imgPath')}/>}
			            		{item.get('title')}
			            	</TopicItem>
						)
	            	})
	            }
            	
            </TopicWrapper>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);