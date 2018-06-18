
const generateProjectData = () => {
  let projects = [];
  let amountOfProjects = 4;
  let names = ['OpenTable Proxy Server', 'Productivity App: Article-Manager', 'SeaBnB - Backend', 'Blockchain Events Aggregator']
  let ids = ['open-table', 'article-manager', 'backend', 'blockchain'];
  let imagesURL = ['images/open-table.png', 'images/article-manager.png', 'images/backend.png', 'images/blockchain.png'];
  let project = {};

  for (let i = 0; i < amountOfProjects; i++) {
    project.name = names[i]
    project.ids = ids[i];
    project.image = imagesURL[i];
    projects.push(project);
    project = {};
  }

  return projects;
}

const generateExperienceData = () => {
  let experience = [];
  let amountOfExperience = 2;
  let job = {};
  let images = ['images/WKL.jpg', 'images/R3lish.png'];
  let dates = ['2016-2018', '2013-2016'];
  let companies = [ 'Wyz Kid Labs', 'R3lish'];
  let location = ['Palo Alto', 'San Francisco'];
  let title = ['Marketing and Product Manager - Employee #2', 'Marketing Manager - Founding Team Member'];
  let productDescription = [
    'A coding platform for kids and a suite of knowledge products made from the proprietary language of the platform',
    'A video as a service (VaaS) tool, automating marketing video creation for businesses',
  ];
  let results = [
    'Built a team of 5 to conceptualize, research, and develop 60 apps to boost App Store optimization in less than a year',
    'Validated product architecture with a working proof-of-concept that generated $30,000 in initial company revenue',
  ];

  for (let i = 0; i < amountOfExperience; i++) {
    experience.push(
      {
        image: images[i],
        date: dates[i],
        company: companies[i],
        location: location[i],
        title: title[i],
        productDescription: productDescription[i],
        results: results[i]
      }
    )
    job = {};
  }

  return experience;
}

const generateInterestsData = () => {
  let interests = {
    books: [],
    podcasts: [],
    articles: [],
    basketball: []
  }

  let bookTitles = ['The Dream Machine: J.C.R. Licklider and the Revolution That Made Computing Personal', 'Dealers of Lightning: Xerox PARC and the Dawn of the Computer Age', 'Sapiens: A Brief History of Humankind', 'The Idea Factory: Bell Labs and the Great Age of American Innovation', 'The Innovators Dilemma', 'Deep Work', 'The Art of Learning', 'Meditations' ]
  let bookAuthors = ['Mitchell Waldrop', 'Michael Hiltzik' ,'Yuval Noah Harari', 'Jon Gertner', 'Clayton Christensen', 'Cal Newport', 'Josh Waitzkin', 'Marcus Aurelius', ]

  for (let i = 0; i < 10; i++) {
    interests.books.push({
      title: bookTitles[i],
      author: bookAuthors[i]
    })
  }

  return interests
}

module.exports = {
  generateProjectData,
  generateExperienceData,
  generateInterestsData,
};