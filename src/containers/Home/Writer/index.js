/**
 * 相关内容推荐
 */
import React, { PureComponent } from 'react';
import { 
    WriterWrapper, WriterItem
} from './style.js';

class Writer extends PureComponent {

    render() {
        return (
            <WriterWrapper>
				<WriterItem />
            </WriterWrapper>
        )
    }
}

export default Writer;