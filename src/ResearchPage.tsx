import styles from './ResearchPage.module.css'
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import {sortMetaEntries} from "./components/dateUtil.ts";
import type {ResearchMeta} from "./content/types.ts";
import ResearchCard from "./components/research/ResearchCard.tsx";

export default function ResearchPage() {
    const modules = import.meta.glob('./content/research/*.meta.ts', { eager: true });

    const allResearch = sortMetaEntries<ResearchMeta>(Object.values(modules)
        .map((m: any) => m.default));

    console.log(allResearch);

    return(<>
        <NavBar colorMain={"#55424B"} colorSide={"#DF7F7B"} textColor={"#FFB6B4"} bannerY={30}
                bannerUrl={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkypfph-fa1a7464-e1a3-44b8-863b-01f4a5c53ded.jpg/v1/fill/w_1192,h_670,q_70,strp/resting_behind_the_table_by_lavennielil_dkypfph-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka3lwZnBoLWZhMWE3NDY0LWUxYTMtNDRiOC04NjNiLTAxZjRhNWM1M2RlZC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7fePJV0KKjaBfwyIxAEcgToXHz8dPG69mEXZ_LJ4NW4"} />

        <div className={`app-background ${styles.appBackground}`}>
            <div className={`site-container ${styles.siteContainer}`} style={{height: `${320 * allResearch.length + 20}px`}}>
                {allResearch.map((project, index) => (
                    <ResearchCard
                        key={project.id}
                        id={project.title}
                        description={project.description}
                        tags={project.tags}
                        imageUrl={`${project.image!}.png`}
                        link={project.link ?? ""}
                        side={index % 2 === 0 ? "right" : "left"}
                    />
                ))}
            </div>
        </div>
        <Footer colorMain={"#55424B"} colorSide={"#DF7F7B"} logoHue={310} textColor={"#0B1E35"}/>
    </>);
}