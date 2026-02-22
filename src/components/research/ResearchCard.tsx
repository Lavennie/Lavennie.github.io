import styles from './ResearchCard.module.css'
import React from "react";
import projectMask from '../.././assets/research-mask.svg'
import type {Tag} from "../../content/types.ts";

type ProjectProps = {
    id: string;
    description: string;
    tags: Tag[]
    imageUrl: string
    link?: string
    side?: string
};

export default function ResearchCard({ id, description, tags, imageUrl, link = "",
                                         side = "" }: ProjectProps) {
    return (
        <div className={styles.project} style={{
            backgroundImage: `url(${imageUrl})`,
        }}>
            <img src={projectMask} className={`${styles[side]} ${styles.bg}`}/>
            <div className={`${styles.projectInfo} ${styles[side]}`}>
                {/* first div needs to be empty, it is then populated with the project icon - background image */}

                {link ? (<a className={styles.projectName} href={link} target="_blank" rel="noopener noreferrer"><div>{id}</div><img src="external_link_research.svg" width="30" height="30"/></a>)
                    : (<div className={styles.projectName}>{id}</div>)}
                <div className={styles.tags}>
                    {tags.map(tag => (
                        <div className={styles.tag} style={{backgroundColor: tag.color}}>{tag.content}</div>
                    ))}
                </div>
                <div className={styles.projectDescription}>
                    {description.split("\\n").map((line, idx) => (
                        <React.Fragment key={idx}>
                            {line}
                            <br/>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}