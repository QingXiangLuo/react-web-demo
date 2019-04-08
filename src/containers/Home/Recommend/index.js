import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from './style';

const mapDispatch = (dispatch) => {
    return {
       
    }
};

const mapState = (state) => {
    return {
        recommendList: state.getIn(['homeReducer', 'recommendList']),
    }
};

class Recommend extends PureComponent {
	
    render() {
		const { recommendList } = this.props;

        return (
            <RecommendWrapper>
	            {
	            	recommendList.map((item, index) => {
						return (
							<RecommendItem key={item.get('id')} imgUrl={item.get('imgPath')}/>
						)
		            })
		        }
            </RecommendWrapper>
        )
    }
}

export default connect(mapState, mapDispatch)(Recommend);