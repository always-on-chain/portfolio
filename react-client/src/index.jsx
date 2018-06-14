import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/Intro.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <Intro />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));