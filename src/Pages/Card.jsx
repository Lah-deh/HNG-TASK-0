import React, { useState, useEffect } from 'react'
import '../Styles/card.scss'
import card from '../assets/IIMAGES/Snapchat-1144099443.jpg'
import Footer from '../Components//Footer.jsx'

const Card = () => {
  const [time, setTime] = useState(Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now())
    }, 1000) 
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <article data-testid='test-profile-card' className='card'>
        <div className='contain'>
          <figure data-testid='test-user-avatar' className='avatar'>
            <img src={card} alt='user-photo'/>
          </figure>
          <div className="content">
            <header data-testid="test-user-name" className="name">
              <h2>Asokere Success Boluwatife</h2>
            </header>
            <p data-testid="test-user-bio">
              I help startups create simple and functional websites that look great on any device.
            </p>
          </div>
        </div>

        <main data-testid="test-user-time">
          <h3>Current time (ms)</h3>
          <span className="time">{time}</span>
        </main>

        <nav data-testid="test-user-social-links">
          <ul>
            <li className="link">
              <a href="https://x.com/Tifecodes?t=LdE-7_Oh-7otGK_TqZJ8BA&s=09" target="_blank" rel="noopener noreferrer" data-testid="test-user-social-twitter">Twitter</a>
              <a href="https://github.com/Lah-deh" target="_blank" rel="noopener noreferrer" data-testid="test-user-social-github">Github</a>
              <a href="https://www.linkedin.com/in/boluwatife-asokere-11a84a332" target="_blank" rel="noopener noreferrer" data-testid="test-user-social-linkedin">LinkedIn</a>
            </li>
          </ul>
        </nav>

        <section data-testid="test-user-hobbies">
          <h3>Hobbies</h3>
          <ul className="hobby">
            <li>Building UI components</li>
            <li>Reading docs</li>
            <li>Design challenges</li>
          </ul>
        </section>

        <section data-testid="test-user-dislikes">
          <h3>Dislikes</h3>
          <ul className="hobby">
            <li>Slow websites</li>
            <li>Unclear documentation</li>
            <li>Broken layout</li>
          </ul>
        </section>
      
      </article>
      <Footer/>
    </div>
    
  )
}

export default Card
