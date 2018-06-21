
const generateProjectData = () => {
  let projects = [];
  let amountOfProjects = 4;
  let names = ['OpenTable Proxy Server', 'Productivity App: Article-Manager', 'SeaBnB - Backend', 'Blockchain Events Aggregator']
  let ids = ['open-table', 'article-manager', 'backend', 'blockchain'];
  let imagesURL = ['images/open-table.png', 'images/article-manager.png', 'images/backend.png', 'images/blockchain.png'];
  let project = {};

  for (let i = 0; i < amountOfProjects; i++) {
    project.name = names[i]
    project.id = ids[i];
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
  }

  let bookTitles = ['The Dream Machine: J.C.R. Licklider and the Revolution That Made Computing Personal', 'Dealers of Lightning: Xerox PARC and the Dawn of the Computer Age', 'Sapiens: A Brief History of Humankind', 'The 4-Hour Workweek', 'The Idea Factory: Bell Labs and the Great Age of American Innovation', 'The Innovators Dilemma', 'Deep Work', 'The Art of Learning', 'Meditations', 'The Lean Startup' ];
  let bookAuthors = ['Mitchell Waldrop', 'Michael Hiltzik' ,'Yuval Noah Harari', 'Tim Ferriss', 'Jon Gertner', 'Clayton Christensen', 'Cal Newport', 'Josh Waitzkin', 'Marcus Aurelius', 'Eric Ries', ];
  let ids = ['722412.The_Dream_Machine', '1101290.Dealers_of_Lightning', '23692271-sapiens', '368593.The_4_Hour_Workweek', '11797471-the-idea-factory', '2615.The_Innovator_s_Dilemma', '25744928-deep-work', '857333.The_Art_of_Learning', '30659.Meditations', '10127019-the-lean-startup'];

  let podcastNames = ['The Tim Ferriss Show', 'The Tim Ferris Show', 'The Tim Ferris Show', 'The James Altucher Show', 'The James Altucher Show', 'The James Altucher Show'];
  let podcastTitles = ['#97 The Evolutionary Angel, Naval Ravikant', 'Episode 2: Josh Waitzkin', '#125: Derek Sivers on Developing Confidence, Finding Happiness, and Saying \"No\" to Millions', '185 - Cal Newport: Become So Good You Can\'t Be Ignored', '329 - Sebastian Maniscalco: How to Create an Authentic Word of Mouth Career', '171 - Ryan Holiday: The Powerful Enemy of Your Success'];
  let podcastLinks = ['https://tim.blog/2015/08/18/the-evolutionary-angel-naval-ravikant/', 'https://soundcloud.com/tim-ferriss/the-tim-ferriss-show-episode-2-josh-waitzkin', 'https://tim.blog/2015/12/14/derek-sivers-on-developing-confidence-finding-happiness-and-saying-no-to-millions/', 'https://jamesaltucher.com/2016/09/cal-newport-become-so-good-you-cant-be-ignored/', 'https://jamesaltucher.com/2018/03/sebastian-maniscalco-how-to-create-an-authentic-word-of-mouth-career/', 'https://jamesaltucher.com/2016/06/ryan-holiday-the-powerful-enemy-of-your-success/'];
  
  let amountOfBooks = bookTitles.length;
  let amountOfPodcasts = podcastNames.length;
  
  for (let i = 0; i < amountOfBooks; i++) {
    interests.books.push({
      title: bookTitles[i],
      author: bookAuthors[i],
      id: ids[i]
    })
  }

  for (let i = 0; i < amountOfPodcasts; i++) {
    interests.podcasts.push({
      name: podcastNames[i],
      title: podcastTitles[i],
      link: podcastLinks[i]
    })
  }

  return interests
}

const generateContactData = () => {
  let contact = [];
  let contactTypes = 4;

  let images = ['images/github.png', 'images/linkedin.png', 'images/angelList.png', 'images/email.png'];
  let urls = ['https://github.com/waynekwest88', 'https://www.linkedin.com/in/wayne-west/', 'https://angel.co/waynekwest88', 'mailto:waynekwest88@gmail.com'];

  for (let i = 0; i < contactTypes; i++) {
    contact.push({
      image: images[i],
      url: urls[i]
    })
  }

  return contact;
}

module.exports = {
  generateProjectData,
  generateExperienceData,
  generateInterestsData,
  generateContactData
};