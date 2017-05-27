import React from 'react';

class Html extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.children.title}</title>
        </head>
        <body>
          <div id="root">{this.props.children.components}</div>
        </body>
      </html>
    );
  }
}

export default Html;
