import React, {FC} from 'react';
import './Hello.pcss';
import DOMPurify from 'dompurify';

type Props = {};

const HTML = `
<p>Project <span style="color: rgb(224, 62, 45); font-size: 36px"><strong>#1</strong></span></p>
<p>milestone 1</p>
<p>&nbsp;</p>
<p>with&nbsp;</p>
<p>&nbsp;</p>
<p>very long</p>
<p>&nbsp;</p>
<p><span style="font-size: 24px">linessssss</span></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
`
export const Hello: FC<Props> = ({}) => {
    return <div className={'Hello'}>
        <h1>Hello React</h1>
        <div><h2>Raw</h2>
            <pre>{HTML}</pre>
        </div>
        <div><h2>DOMPurify</h2>
            <pre>{DOMPurify.sanitize(HTML, {
                ALLOWED_TAGS: ['p'],
                ALLOWED_ATTR: [],
            })}</pre>
        </div>
    </div>;
}
