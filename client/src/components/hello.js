import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './hello.css';

class Hello extends React.Component {
    render() {
        return <h1 styleName="hello">Hello</h1>
    }
}

export default CSSModules(Hello, styles);
