import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile_image.jpg';

class App extends Component {
    state = {displayBio: false};

    //constructor() {
     //   super();
     //   this.state = { displayBio: false };

     //   console.log('Component this', this);

     //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    //     }

    toggleDisplayBio = () => {
       this.setState({ displayBio: !this.state.displayBio})
    }
 
    render() {
        return (
            <div>
                <img src={profile} alt='profile' className='profile' />
                <h1>Hello!</h1>
                <p>My name is Colin Ilgen.</p>
                <Title />
                <p>I always look foward to working on meaningful projects.</p>
                {
                        this.state.displayBio ? (
                            <div>
                            <p>I live in Los Angeles, CA and code all the time.</p>
                            <p>My favorite language is JavaScript, and my favorite framework is React.js</p>
                            <p>Besides coding, I also love sushi.</p>
                            <button onClick={this.toggleDisplayBio}>show less</button>
                            </div>
                        ) : (
                            <div>
                                <button onClick={this.toggleDisplayBio}>read more</button>
                            </div>
                        )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
    }


export default App;