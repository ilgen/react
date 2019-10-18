import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3  from '../assets/project3.png';

const PROJECTS = [
    {
        id: 1,
        title: 'Example React Application',
        description: 'A React App that I built inlvolving JS and core web dev concepts',
        link: 'https://github.com/newtownradio/reactjs',
        image: project1
    },
    {
        id: 2,
        title: 'Messaging API in Java', 
        description: 'A REST API that I built from scratch with GET and POST requests', 
        link: 'https://github.com/newtownradio/javaee',
        image: project2
    },
    {
        id: 3,
        title: 'Rails E-Commerce Site',
        description: 'My unique project for a Rails web dev course using Angular JS, AJAX and more',
        link: 'https://newtown-radio.herokuapp.com',
        image: project3
    }
];  

export default PROJECTS;