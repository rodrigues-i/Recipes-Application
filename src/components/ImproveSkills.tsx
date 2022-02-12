import React from 'react'

const ImproveSkills = () => {
    const list = [
		'Learn new recepies',
		'Experiment with food',
		'Write your own recepies',
		'Know nutrition facts',
		'Get cooking tips',
		'Get ranked'
	]

  return (
    <div className='section improve-skills'>
        <div className='col img'>
            <img src='src/img/gallery/img_10.jpg' alt='' />
        </div>
        <div className='col typography'>
            <h1 className="title">Improve Your Culinary Skills</h1>
            {list.map((item, index) => (
                <p key={index} className="skill-item">{item}</p>
            ))}
            <button className="btn">sign up</button>
        </div>
    </div>
  )
}

export default ImproveSkills