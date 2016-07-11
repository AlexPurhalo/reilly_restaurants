import React from 'react';

import CommentSection from './components/comment_section';

window.renderReact = function(id, component, props) {
    React.render(React.createElement(component, props), document.getElementById(id));
};