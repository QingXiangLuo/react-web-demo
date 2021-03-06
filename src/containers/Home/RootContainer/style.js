import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;

export const HomeContent = styled.div`
	float: left;
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    .banner_image {
    	width: 625px;
    	height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
`;