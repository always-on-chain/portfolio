import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { generateProjectData, generateExperienceData } from '../../website-data.js';
import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      experience: []
    }
  }

  componentWillMount() {
    this.setState({
      projects: generateProjectData(),
      experience: generateExperienceData()
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Intro />
        <Projects projects={this.state.projects} />
        <Experience experience={this.state.experience} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));