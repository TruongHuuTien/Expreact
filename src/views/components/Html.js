import React from 'react';
import ReactDOM from 'react-dom';
import bootstrap from 'react-bootstrap';

class Html extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
          <title>{this.props.children.title}</title>
        </head>
        <body>
          <div id="root">
              {this.props.children.components}
          </div>
          <script src="app.js"></script>
        </body>
      </html>
    );
  }
}

export default Html;
