import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.jsx'
import Intro from './components/Intro.jsx';
import Projects from './components/Projects.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  // generateProjectData() {

  // }

  render() {
    return (
      <div>
        <Header />
        <Intro />
        <Projects />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));