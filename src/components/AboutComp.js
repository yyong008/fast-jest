import React from 'react'


const About = ({ name }) => {
	if (name) {
		return <div> About: {name}</div>
	}
	return <div>About: Component</div>
}

export default About;
