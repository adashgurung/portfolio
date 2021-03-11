import React from "react";
import "./Resume.css";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Languages & Tools</span>
          </h1>
        </div>

        <div className="logos">
          <img
            className="react"
            src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ"
            alt=""
          />
          <img
            className="vs-code"
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--9F8ygOQO--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/i/ikysur95osy0deokuuji.png"
            alt=""
          />
          <img
            className="javascript"
            src="https://lh3.googleusercontent.com/proxy/Aj1Pgctd_NestaXhp1Coq5hbcHdY9r7tB6-SvsL5NUQ15BxTdYc2gWAY3xNnvwV37Rx7AdscvvzOaElrHvyx2CnLuvo0s0eic9O-LbKtN1yPQyuqwqSybqphknPSh_qRAQ0pQoJSBpP_lsL3"
            alt=""
          />
          <img
            className="material-ui"
            src="https://pro.guslyon.fr/static/material-ui-4a66e3fd52c7ec9469f4684b68aca251.png"
            alt=""
          />
          <img
            className="firebase"
            src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-standard.png"
            alt=""
          />
          <img
            className="html"
            src="https://catalin.red/dist/uploads/2011/01/css3-html5-logo-initial.png"
            alt=""
          />
          <img
            className="css"
            src="https://www.logolynx.com/images/logolynx/7e/7eed17a45f24e41077eb7cad1d031492.png"
            alt=""
          />
          <img
            className="github"
            src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png"
            alt=""
          />
          <img
            className="bootstrap"
            src="http://logovectorseek.com/wp-content/uploads/2019/10/bootstrap-logo-vector.png"
            alt=""
          />
          <img
            className="redux"
            src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
            alt=""
          />
        </div>
        {/*       <div className="nine columns main-col">{work}</div> */}
      </div>

      {/*   <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div> */}

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
