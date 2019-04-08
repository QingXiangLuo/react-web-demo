import styled from 'styled-components';

export const WritingWrapper = styled.div`
	overflow: hidden;
    width: 1300px;
    margin: 0 auto;
    z-index: 0;
    .milk-dropzone {
		z-index: 3 !important;
    }
`;


export const WritingLeft = styled.div`
	float: left;
    width: 250px;
    background: rgba(64, 64, 64, .1);
`;

export const WritingLeftTop = styled.div`
	height: 45px;
	line-height: 45px;
	font-size: 14px;
	text-align: center;
`;

export const WritingContent = styled.div`
	display: inline-block;
    width: 725px;
    margin-left: 39px;
`;

export const ContentTitle = styled.input`
	height: 50px;
	width: 100%;
	line-height: 50px;
	padding: 0 15px;
	border: none;
	border-bottom: 1px solid #969696;
	outline: none;
	font-size: 16px;
`;

export const WritingRight = styled.div`
	float: right;
    width: 250px;
    min-height: 500px;
    background: rgba(64, 64, 64, .1);
    text-align: center;
`;

export const Button = styled.div`
	width: 200px;
	height: 35px;
	line-height: 35px;
	border-radius: 15px;
	background: rgba(236, 97, 73, .7);
	font-size: 16px;
	margin: 20px auto;
	color: #fff;
	cursor: pointer;
	&:hover {
		background: rgba(236, 97, 73, 1);
		transition: all .3s ease-out;
	}
`;

export const MarkdownHref = styled.div`
	width: 200px;
	height: 35px;
	line-height: 35px;
	border-radius: 15px;
	font-size: 14px;
	margin: 20px auto;
	color: #999;
	cursor: pointer;
	&:hover {
		color: #0066cc;
	}
`;
