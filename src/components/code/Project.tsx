import React from "react";
import projectMask from '../.././assets/project-mask.svg'
import githubLogo from "../../assets/logo-github.svg";

type ProjectProps = {
    id: string;
    description: string;
    imageUrl : string
    link? : string
    githubLink? : string
    imgx: number
    imgy: number
    side : string
    logoHue : number
};

export default function Project({ id, description, imageUrl, link="", githubLink="", imgx, imgy, side, logoHue } : ProjectProps){
    return (
      <div className="project" style={{backgroundImage: `url(${imageUrl})`, backgroundPositionX: `${imgx}px`, backgroundPositionY: `${imgy}px`}}>
          <img src={projectMask} className={side}/>
          <div className={`project-info ${side}`}>
              {link ? (<a className="project-name" href={link} target="_blank" rel="noopener noreferrer">{id}</a>)
                    : (<div className="project-name">{id}</div>)}
              <div className="project-description">
                  {description.split("\\n").map((line, idx) => (
                      <React.Fragment key={idx}>
                          {line}
                          <br/>
                      </React.Fragment>
                  ))}
              </div>
              {githubLink ? (
                  <a href={githubLink} className={`project-github ${side}`}>
                      <img src={githubLogo} style={{filter: `brightness(0.6) sepia(1) hue-rotate(${logoHue}deg) saturate(5)`}}/>
                  </a>) : <></>
              }
          </div>
      </div>
    );
}