import React from 'react';
import Loadable from 'react-loadable';

/**
 * 实现页面异步加载
 **/

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading(){
  	return (
  		<div> loading... </div>
  	)
  }
});

// 无状态组件

export default () => {
	return (
		<LoadableComponent/>
	)
}
