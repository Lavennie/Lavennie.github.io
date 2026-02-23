import styles from './ResearchCard.module.css'
import React from "react";
import type {Tag} from "../../content/types.ts";

type ProjectProps = {
    id: string;
    description: string;
    tags: Tag[]
    imageUrl: string
    link?: string
    side?: string
};

export default function ResearchCard({ id, description, tags, imageUrl, link = "" }: ProjectProps) {
    return (
        <div className={styles.topic} style={{ }}>
            {link ? (<a className={styles.topicName} href={link} target="_blank" rel="noopener noreferrer"><div><div>{id}</div><img src="external_link_research.svg" width="30" height="30"/></div></a>)
                : (<div className={styles.topicName}><div>{id}</div></div>)}
            <div className={styles.tags}>
                {tags.map(tag => (
                    <div className={styles.tag} style={{backgroundColor: tag.color}}>{tag.content}</div>
                ))}
            </div>
            <div className={styles.topicImg} style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className={styles.topicDescription}>
                {description.split("\\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                        {line}
                        <br/>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}