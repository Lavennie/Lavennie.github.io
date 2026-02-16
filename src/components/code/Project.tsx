import styles from './Project.module.css'
import React from "react";
import projectMask from '../.././assets/project-mask.svg'
import githubLogo from "../../assets/logo-github.svg";

type ProjectProps = {
    id: string;
    description: string;
    imageUrl: string
    iconUrl?: string
    link?: string
    githubLink?: string
    imgx: number
    imgy: number
    side?: string
    logoHue?: number
};

export default function Project({
                                    id,
                                    description,
                                    imageUrl,
                                    iconUrl = "",
                                    link = "",
                                    githubLink = "",
                                    imgx,
                                    imgy,
                                    side = "",
                                    logoHue = 0
                                }: ProjectProps) {
    return (
        <div className={styles.project} style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPositionX: `${imgx}px`,
            backgroundPositionY: `${imgy}px`
        }}>
            <img src={projectMask} className={styles[side]}/>
            <div className={`${styles.projectInfo} ${styles[side]}`}>
                {/* first div needs to be empty, it is then populated with the project icon - background image */}
                <div style={{backgroundImage: `url(${iconUrl})`}}></div>
                {link ? (<a className={styles.projectName} href={link} target="_blank" rel="noopener noreferrer"><div>{id}</div><img src="external_link_project.svg" width="30" height="30"/></a>)
                    : (<div className={styles.projectName}>{id}</div>)}
                <div className={styles.projectDescription}>
                    {description.split("\\n").map((line, idx) => (
                        <React.Fragment key={idx}>
                            {line}
                            <br/>
                        </React.Fragment>
                    ))}
                </div>
                {githubLink ? (
                    <a href={githubLink} className={`${styles.projectGithub} ${styles[side]}`}>
                        <img src={githubLogo}
                             style={{filter: `brightness(0.6) sepia(1) hue-rotate(${logoHue}deg) saturate(5)`}}/>
                    </a>) : <></>
                }
            </div>
        </div>
    );
}