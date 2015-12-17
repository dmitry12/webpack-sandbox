import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './hello.css';

@CSSModules(styles)
export default class extends React.Component {
    render() {
        return <h1 styleName="hello">Hello</h1>
    }
}
