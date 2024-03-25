import React from "react";
import "./resume.css"; // Import your CSS file for styling

function Resume() {
  return (
    <div className="resume-maindiv">
      <h1>
        <span className="blu"></span> My Resume
      </h1>
      <h2 className="resh">Experience</h2>

      <section className="experience-card">
        <div>
          <h2 className="number">2023-Present</h2>
          <h3>&rarr; Web development</h3>
          <h3>&rarr; CYF</h3>
          <h3>&rarr; Manchester, UK</h3>
        </div>
        <p>
          <a href="cyf-sabella-8-tv.netlify.app/">CYF</a> is a non-profit
          organization dedicated to empowering youth through technology,
          offering training in various web development technologies including
          HTML, CSS, JavaScript, and more. Completed numerous solo and group
          projects, including a TV show project and a hotel project
          <a href="https://react-module-project-nw6-team-2.netlify.app/">
            (https://react-module-project-nw6-team-2.netlify.app/).
          </a>
          <a href="https://codeyourfuture.io/">https://codeyourfuture.io/</a>
        </p>
      </section>

      <section className="experience-card">
        <div>
          <h2 className="number">2023-Present</h2>
          <h3>&rarr; Level 2 Functional Skills English</h3>
          <h3>&rarr; Salford College</h3>
          <h3>&rarr; Manchester, UK</h3>
        </div>
        <p>
          Enhanced my communication abilities by achieving a Level 2 Functional
          Skills English qualification at Salford College.
        </p>
      </section>
      <section className="experience-card">
        <div>
          <h2 className="number">2022-2023</h2>
          <h3>&rarr; GCSE</h3>
          <h3>&rarr; Manchester College</h3>
          <h3>&rarr; Manchester, UK</h3>
        </div>
        <p>
          I Achieved Grade 8 in GCSE Maths, demonstrating proficiency in
          numerical analysis and problem-solving skills.
        </p>
      </section>
      <section className="experience-card">
        <div>
          <h2 className="number">April2023-May2023</h2>
          <h3>&rarr; Introduction To Web Development </h3>
          <h3>&rarr; Madlab</h3>
          <h3>&rarr; Manchester, UK</h3>
        </div>
      </section>
      <section className="experience-card">
        <div>
          <h2 className="number">August 2023- September 2023</h2>
          <h3>&rarr; Level 1 Employability </h3>
          <h3>&rarr; Growth Company</h3>
          <h3>&rarr; Manchester, UK</h3>
        </div>
      </section>
      <section className="experience-card">
        <div>
          <h2 className="number">2011-2021</h2>
          <h3>&rarr; High-school student</h3>
          <h3>&rarr; Bahir Dar</h3>
          <h3>&rarr; Ethiopia</h3>
        </div>
        <p>Successfully completed my highschool education in Ethiopia</p>
      </section>
      <h2 className="resh">Volunteering</h2>

      <section className="experience-card">
        <div>
          <h2 className="number">June 2023 - July 2023</h2>
          <h3>&rarr; Community Project Volunteer</h3>
          <h3>&rarr; Manchester College</h3>
          <h3>&rarr; Manchester, UK</h3>
        </div>
        <p>
          Participated in a litter pick at Buile Hill Park and contributed to
          environmental maintenance efforts. Collaborated with team members to
          ensure the success of the project.
        </p>
      </section>
      <section className="experience-card">
        <div>
          <h2 className="number">April 2023 - May 2023</h2>
          <h3>&rarr; British Heart Foundation</h3>
          <h3>&rarr; Manchester College</h3>
          <h3>&rarr; Manchester, UK</h3>
        </div>
        <p>
          Assisted with shopkeeping duties, supporting fundraising activities
          and providing customer service.
        </p>
      </section>
    </div>
  );
}

export default Resume;
