import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import Projects from './components/Projects.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  generateProjectData() {
    let amountOfProjects = 4;
    let names = ['open-table', 'article-manager', 'backend', 'blockchain'];
    let imagesURL = ['images/open-table.png', 'images/article-manager.png', 'images/backend.png', 'images/blockchain.png'];
    let project = {};

    for (let i = 1; i <= amountOfProjects; i++) {
      project.name = names[i - 1];
      project.image = imagesURL[i - 1];
      this.state.projects.push(project);
      project = {};
    }

    return this.state.projects;
  }

  componentWillMount() {
    this.generateProjectData();
  }

  render() {
    return (
      <div>
        <Header />
        <Intro />
        <Projects projects={this.state.projects} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));