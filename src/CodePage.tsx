import styles from './CodePage.module.css'
import NavBar from './components/NavBar.tsx'
import Footer from './components/Footer.tsx'
import Project from './components/code/Project.tsx'
import type { ContentMeta } from "./content/types.ts";

export default function CodePage() {
    const modules = import.meta.glob('./content/projects/*.meta.ts', { eager: true });

    //const allProjects: ContentMeta[] = Object.values(modules)
    //    .map((m: any) => m.default)
    //    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const allProjects = sortProjects(Object.values(modules).map((m: any) => m.default));

    return(<>
        <NavBar colorMain={"#F9FEE5"} colorSide={"#D0FFB4"} textColor={"#69A546"} bannerY={37}
                bannerUrl={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dlbvhqg-c0e27d2b-b431-45f8-862d-b4b2adef77b6.jpg/v1/fill/w_1192,h_670,q_70,strp/kishiar_la_orr_at_a_party_by_lavennielil_dlbvhqg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9kbGJ2aHFnLWMwZTI3ZDJiLWI0MzEtNDVmOC04NjJkLWI0YjJhZGVmNzdiNi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.tyBjAvDM0gKt7ChZyKCNYIhz1gw2D9_61ty2WL7F6K0"}/>
        <div className={`app-background ${styles.appBackground}`}>
            <div className={`site-container ${styles.siteContainer}`} style={{height: `${320 * allProjects.length + 20}px`}}>
                {allProjects.map((project, index) => (
                    <Project
                        key={project.title}
                        id={project.title}
                        imageUrl={`${project.image!}.png`}
                        iconUrl={`${project.image!}_icon.png`}
                        description={project.description}
                        link={project.link ?? ""}
                        githubLink={project.sourceLink ?? ""}
                        imgx={project.imageX ?? 0}
                        imgy={0}
                        side={index % 2 === 0 ? "right" : "left"}
                        logoHue={40}
                    />
                ))}
            </div>
        </div>
        <Footer colorMain={"#F9FEE5"} colorSide={"#D0FFB4"} logoHue={40} textColor={"#69A546"}/>
    </>);
}


const statePriority: Record<string, number> = {
    "in progress": 0,
    "on hold": 1,
    "planning": 2,
    "concluded": 3,
    "abandoned": 4,
};

// Convert the date string to a comparable number
function parseProjectDate(date: string): number {
    if (date === "now") return Date.now();

    // Negative year → far in the past
    if (date.startsWith("-")) return new Date(date.slice(1) + "/01/01").getTime() * -1;

    // Replace missing month/day with 1
    const parts = date.split("/").map(p => (p === "?" ? "1" : p));
    const normalized = parts.join("/");

    const timestamp = new Date(normalized).getTime();
    return isNaN(timestamp) ? 0 : timestamp;
}

function sortProjects(projects: ContentMeta[]): ContentMeta[] {
    return projects.sort((a, b) => {
        // sort by state
        const stateDiff = statePriority[a.state] - statePriority[b.state];
        if (stateDiff !== 0) return stateDiff;

        // sort by date
        const dateA = parseProjectDate(a.dateStart);
        const dateB = parseProjectDate(b.dateStart);
        return dateB - dateA;
    });
}