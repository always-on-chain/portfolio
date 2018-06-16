
generateProjectData = () => {
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

generateExperienceData = () => {
  let experience = [];
  let amountOfExperience = 2;
  let job = {};
  let images = ['images/R3lish.png', 'images/WKL.jpg'];
  let dates = ['2013-2016', '2016-2018'];
  let companies = ['R3lish', 'Wyz Kid Labs'];
  let location = ['San Francisco', 'Palo Alto'];
  let title = ['Marketing Manager - Founding Team Member', 'Marketing and Product Manager - Employee #2'];
  let productDescription = [
    'A video as a service (VaaS) tool, automating marketing video creation for businesses',
    'A coding platform for kids and a suite of knowledge products made from the proprietary language of the platform'
  ];
  let results = [
    'Validated product architecture with a working proof-of-concept that generated $30,000 in initial company revenue',
    'Built a team of 5 to conceptualize, research, and develop 60 apps to boost App Store optimization in less than a year',
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

module.exports = {
  generateProjectData,
  generateExperienceData
};