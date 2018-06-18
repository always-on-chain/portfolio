import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { generateProjectData, generateExperienceData, generateInterestsData } from '../../website-data.js';
import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Interests from './components/Interests.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      experience: [],
      interests: {}
    }
  }

  componentWillMount() {
    this.setState({
      projects: generateProjectData(),
      experience: generateExperienceData(),
      interests: generateInterestsData()
    });
  }

  render() {
    console.log(this.state.interests)
    return (
      <div>
        <Header />
        <Intro />
        <Projects projects={this.state.projects} />
        <Experience experience={this.state.experience} />
        <Interests />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));