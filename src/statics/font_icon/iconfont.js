import { createGlobalStyle } from 'styled-components';

export const IconFontStyle = createGlobalStyle`
    @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1542360016045'); /* IE9*/
    src: url('./iconfont.eot?t=1542360016045#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
            url('./iconfont.ttf?t=1542360016045') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
            url('./iconfont.svg?t=1542360016045#iconfont') format('svg'); /* iOS 4.1- */
    }
    
    .iconfont {
        font-family:"iconfont" !important;
        font-size:16px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

