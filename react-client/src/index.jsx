import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { generateProjectData, generateExperienceData, generateInterestsData, generateContactData} from '../../website-data.js';
import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Interests from './components/Interests.jsx';
import Contact from './components/Contact.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      experience: [],
      interests: {},
      contact: []
    }
  }

  componentWillMount() {
    this.setState({
      projects: generateProjectData(),
      experience: generateExperienceData(),
      interests: generateInterestsData(),
      contact: generateContactData()
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
        <Interests interests={this.state.interests} />
        <Contact contact={this.state.contact} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));