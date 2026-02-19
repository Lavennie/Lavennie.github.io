import styles from './TimelinePage.module.css'
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import type {ProjectMeta, ArtMeta} from "./content/types.ts";

type TimelineEntry = {
    id: string;
    type: "project-start" | "project-end" | "art"
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
            date: parseDate(art.dateEnd),
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
            date: parseDate(project.dateStart),
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
                date: parseDate(project.dateEnd),
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

    timeline.sort((a, b) => b.sortKey + b.priority - a.sortKey - a.priority);

    console.log(timeline);
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


function parseDate(date: string): string {
    if (date.startsWith("-")) return "Before " + date.slice(1);
    const parts = date.split("/");
    if (Number(parts[1]))
        return parts[2] + ". " + parts[1] + ". " + parts[0];
    else if (parts[1] === "?")
        return parts[0];
    else
        return parts[1].charAt(0).toUpperCase() + parts[1].slice(1) + " " + parts[0];
}

function parseSortDate(date: string): number {
    if (date === "now") return Date.now();
    if (date.startsWith("-")) return new Date(date.slice(1) + "/01/01").getTime() * -1;
    const parts = date.split("/").map(p => (p === "?" ? "1" : p));
    if (parts[1] == "winter")
        parts[1] = "12"
    else if (parts[1] == "spring")
        parts[1] = "3"
    else if (parts[1] == "summer")
        parts[1] = "6"
    else if (parts[1] == "autumn")
        parts[1] = "9"
    const normalized = parts.join("/");
    const timestamp = new Date(normalized).getTime();

    return isNaN(timestamp) ? 0 : timestamp;
}