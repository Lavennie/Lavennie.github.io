import styles from './TimelinePage.module.css'
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import type {ProjectMeta, ArtMeta, CreationMeta} from "./content/types.ts";
import {parseSortDate, parseVisualDate} from "./components/dateUtil.ts";

type TimelineEntry = {
    id: string;
    type: "project-start" | "project-end" | "art" | "crafts"
    date: string;
    sortKey: number;
    title: string;
    linkMain?: string;
    linkMainText?: string;
    linkSub?: string;
    linkSubText?: string;
    typeIcon: string;
    workImg: string;
    priority: number;
};

export default function TimelinePage() {
    const timeline: TimelineEntry[] = [];
    const active: TimelineEntry[] = [];
    const allArt: ArtMeta[] = Object.values(import.meta.glob('./content/art/*.meta.ts', { eager: true })).map((m: any) => m.default);
    allArt.forEach(art => {
        timeline.push({
            id: art.id,
            type: "art",
            date: parseVisualDate(art.dateEnd),
            sortKey: parseSortDate(art.dateEnd),
            title: art.title,
            linkMain: art.link,
            linkMainText: "time-lapse",
            linkSub: art.image,
            linkSubText: "image",
            typeIcon: "icon_art.png",
            workImg: art.image,
            priority: 0,
        });
    });

    const allProjects: ProjectMeta[] = Object.values(import.meta.glob('./content/projects/*.meta.ts', { eager: true })).map((m: any) => m.default);
    allProjects.forEach(project => {
        // start
        timeline.push({
            id: project.id + "-start",
            type: "project-start",
            date: parseVisualDate(project.dateStart),
            sortKey: parseSortDate(project.dateStart),
            title: project.title,
            linkMain: project.link,
            linkMainText: "site",
            linkSub: project.githubLink,
            linkSubText: "github",
            typeIcon: "icon_project_start.png",
            workImg: `${project.image}.png`,
            priority: 0,
        });
        // end
        if (project.dateEnd !== "now") {
            timeline.push({
                id: project.id + "-end",
                type: "project-end",
                date: parseVisualDate(project.dateEnd),
                sortKey: parseSortDate(project.dateEnd),
                title: project.title,
                linkMain: project.link,
                linkMainText: "site",
                linkSub: project.githubLink,
                linkSubText: "github",
                typeIcon: "icon_project_end.png",
                workImg: `${project.image}.png`,
                priority: 1,
            });
        }
        else {
            active.push({
                id: project.id + "-end",
                type: "project-end",
                date: "active",
                sortKey: parseSortDate(project.dateEnd),
                title: project.title,
                linkMain: project.link,
                linkMainText: "site",
                linkSub: project.githubLink,
                linkSubText: "github",
                typeIcon: "icon_project_end.png",
                workImg: `${project.image}.png`,
                priority: 1,
            });
        }
    });

    const allPieces: CreationMeta[] = Object.values(import.meta.glob('./content/pieces/*.meta.ts', { eager: true })).map((m: any) => m.default);
    allPieces.forEach(piece => {
        timeline.push({
            id: piece.id,
            type: "crafts",
            date: parseVisualDate(piece.dateEnd),
            sortKey: parseSortDate(piece.dateEnd),
            title: piece.title,
            linkMain: piece.image,
            linkMainText: "image",
            typeIcon: "icon_crafts.png",
            workImg: piece.image,
            priority: 0,
        });
    });

    timeline.sort((a, b) => b.sortKey + b.priority - a.sortKey - a.priority);

    return (<>
        <NavBar colorMain={"#4E392F"} colorSide={"#83302B"} textColor={"#FF7C81"} bannerY={65}
                bannerUrl={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dlfxyji-6cafbf68-9ae7-4270-9e56-c9fc504aa00f.jpg/v1/fill/w_1192,h_670,q_70,strp/fire_and_knights_by_lavennielil_dlfxyji-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9kbGZ4eWppLTZjYWZiZjY4LTlhZTctNDI3MC05ZTU2LWM5ZmM1MDRhYTAwZi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.vpSB9iqNTIuKgQF8rsgJhAKuv1AmJfeHTXWCk5rd_KY"}/>
        <div className={`app-background ${styles.appBackground}`}>
            <div className={`site-container ${styles.siteContainer}`}>
                <div className={styles.list}>
                    {
                        active.map(entry => (
                            <div key={entry.id} className={styles.row}>
                                <div/> {/* empty column space on left */}
                                <div>[{entry.date}]</div>
                                <img src={entry.typeIcon}/>
                                <div> {entry.title}</div>
                                <img src={entry.workImg}/>
                                <div>
                                    {entry.linkMain ? <a href={entry.linkMain}>{entry.linkMainText}</a> : ""}
                                    {entry.linkMain && entry.linkSub ? " • " : ""}
                                    {entry.linkSub ? <a href={entry.linkSub}>{entry.linkSubText}</a> : ""}</div>
                                <div/> {/* empty column space on right */}
                            </div>
                        ))
                    }
                </div>
                <div className={styles.list}>
                    {
                        timeline.map(entry => (
                            <div key={entry.id} className={styles.row}>
                                <div/> {/* empty column space on left */}
                                <div>[{entry.date}]</div>
                                <img src={entry.typeIcon}/>
                                <div> {entry.title}</div>
                                <img src={entry.workImg}/>
                                <div>
                                    {entry.linkMain ? <a href={entry.linkMain}>{entry.linkMainText}</a> : ""}
                                    {entry.linkMain && entry.linkSub ? " • " : ""}
                                    {entry.linkSub ? <a href={entry.linkSub}>{entry.linkSubText}</a> : ""}</div>
                                <div/> {/* empty column space on right */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <Footer colorMain={"#4E392F"} colorSide={"#83302B"} logoHue={310} textColor={"#FF7C81"}/>
    </>);
}