import React from "react";
import "../Styles/about.scss";

const Mainn = () => {
  return (
    <main data-testid="test-about-page" className="about">
      <section data-testid="test-about-bio">
        <h2>Bio</h2>
        <p>
          My name is Asokere Success Boluwatife, a 400-level student of
          Electronics and Computer Engineering. I’m  passionate about frontend 
          development. I also enjoy turning ideas into user-friendly digital experiences.
        </p>
      </section>
      <section data-testid="test-about-goals">
        <h2>Goals in this program</h2>
        <ul>
          <li>Build production-ready frontend applications involving payment.</li>
          <li>Improve my problem-solving and collaboration skills.</li>
          <li>Develop consistency in coding and project delivery.</li>
          <li>Understand testing and accessibility best practices.</li>
        </ul>
      </section>

      <section data-testid="test-about-confidence">
        <h2>Areas of low confidence</h2>
        <p>
          I’m still building confidence in advanced state management and logic. I also want to get better at handling complex
          layouts and managing project deadlines efficiently.
        </p>
      </section>

      <section data-testid="test-about-future-note">
        <h2>Note to future self</h2>
        <p>
          Keep showing up. Every small progress counts. You’ve come far from
          where you started. Keep learning, keep building, and don’t let fear
          hold you back.
        </p>
      </section>

      <section data-testid="test-about-extra">
        <h2>Extra thoughts</h2>
        <p>
          This program has helped me understand the importance of structure, and good design. I’ve learned to think through my solutions before coding.
        </p>
      </section>
    </main>
  );
};

export default Mainn;
