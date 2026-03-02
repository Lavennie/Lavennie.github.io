import styles from './CodePage.module.css'
import NavBar from './components/NavBar.tsx'
import Footer from './components/Footer.tsx'
import Project from './components/code/Project.tsx'
import type {ProjectMeta} from "./content/types.ts";

export default function CodePage() {
    const modules = import.meta.glob('./content/projects/*.meta.ts', { eager: true });

    const allProjects = sortProjects(Object.values(modules)
        .map((m: any) => m.default));

    return(<>
        <NavBar colorMain={"#F9FEE5"} colorSide={"#D0FFB4"} textColor={"#69A546"} bannerY={42}
                bannerUrl={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dll2vd7-19e630c4-86e3-4c77-92f1-17ebf98a7f42.jpg/v1/fill/w_1192,h_670,q_70,strp/shifting_corridor_by_lavennielil_dll2vd7-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9kbGwydmQ3LTE5ZTYzMGM0LTg2ZTMtNGM3Ny05MmYxLTE3ZWJmOThhN2Y0Mi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.IXBpIS6Pn5tAHEYFNgRFgPTKMN_6uzcdT0laTOi9MU4"}/>
        <div className={`app-background ${styles.appBackground}`}>
            <div className={`site-container ${styles.siteContainer}`} style={{height: `${320 * allProjects.length + 20}px`}}>
                {allProjects.map((project, index) => (
                    <Project
                        key={project.id}
                        id={project.title}
                        description={project.description}
                        tags={project.tags}
                        imageUrl={`${project.image!}.png`}
                        iconUrl={`${project.image!}_icon.png`}
                        link={project.link ?? ""}
                        githubLink={project.githubLink ?? ""}
                        imgx={project.imageX ?? 0}
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
// convert the date string to a comparable number
function parseProjectDate(date: string): number {
    if (date === "now") return Date.now();

    // Negative year -> far in the past
    if (date.startsWith("-")) return new Date(date.slice(1) + "/01/01").getTime() * -1;

    // replace missing month/day with 1
    const parts = date.split("/").map(p => (p === "?" ? "1" : p));
    const normalized = parts.join("/");

    const timestamp = new Date(normalized).getTime();
    return isNaN(timestamp) ? 0 : timestamp;
}

function sortProjects(projects: ProjectMeta[]): ProjectMeta[] {
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