
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
  let title = ['Marketing Manager', 'Marketing and Product Manager'];
  let employeeNum = ['Found Team Member', 'Employee #2']
  let productDescription = [
    'R3lish was a video as a service (VaaS), automating marketing video creation for businesses',
    'At Wyz Kid Labs, we built a coding platform for kids and a suite of knowledge products made from its coding platform'
  ];
  let results = [
    [
      '● Validated product architecture with a working proof-of-concept that generated $30,000 in initial company revenue',
      '● Achieved 90% reduction in costs of videos (from $5000 to $500) and 3-10x increased engagement on FB for early adopters using our MVP'
    ],
    [
      '● Built a team of 5 to conceptualize, research, and develop 60 apps to boost App Store optimization in less than a year',
      '● Established a differentiated product position that appeared as foundational company and product messaging in all growth channels (social media, landing pages, search ads, blogs)'
    ]
  ];

  for (let i = 0; i < amountOfExperience; i++) {
    experience.push(
      {
        image: images[i],
        date: dates[i],
        company: companies[i],
        location: location[i],
        title: title[i],
        employeeNum: employeeNum[i],
        productDesctiption: productDescription[i],
        result: results[i]
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