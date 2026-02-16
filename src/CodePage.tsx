import styles from './CodePage.module.css'
import NavBar from './components/NavBar.tsx'
import Footer from './components/Footer.tsx'
import Project from './components/code/Project.tsx'

export default function CodePage() {
    return(<>
        <NavBar colorMain={"#F9FEE5"} colorSide={"#D0FFB4"} textColor={"#69A546"} bannerY={37}
                bannerUrl={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dlbvhqg-c0e27d2b-b431-45f8-862d-b4b2adef77b6.jpg/v1/fill/w_1192,h_670,q_70,strp/kishiar_la_orr_at_a_party_by_lavennielil_dlbvhqg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9kbGJ2aHFnLWMwZTI3ZDJiLWI0MzEtNDVmOC04NjJkLWI0YjJhZGVmNzdiNi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.tyBjAvDM0gKt7ChZyKCNYIhz1gw2D9_61ty2WL7F6K0"}/>
        <div className={`app-background ${styles.appBackground}`}>
            <div className={`site-container ${styles.siteContainer}`} style={{height: "1940px"}}>
                <Project
                    id="Our Cure"
                    imageUrl="project_our_cure.png"
                    description="Video game\n2D tactical RPG"
                    link="https://celestide-games.github.io/index.html"
                    imgx={0}
                    imgy={0}
                />
                <Project
                    id="GNN Fish"
                    imageUrl="project_mlg_fish.png"
                    description="Graph neural networks\nFish trajectory prediction"
                    imgx={0}
                    imgy={0}
                    side="left"
                    logoHue={40}
                />
                <Project
                    id="Pixel Paint"
                    imageUrl="project_pixel_paint.png"
                    description="Unity extension\n2D painting"
                    imgx={-300}
                    imgy={0}
                />
                <Project
                    id="MPA"
                    imageUrl="project_mpa.png"
                    description="3D animated meshes\nLighting\nCollision detection"
                    link="https://lavennie.itch.io/method-process-algorithm"
                    githubLink="https://lavennie.itch.io/method-process-algorithm"
                    imgx={200}
                    imgy={0}
                    side="left"
                    logoHue={40}
                />
                <Project
                    id="Game Engine"
                    imageUrl="project_game_engine.png"
                    description="3D animated meshes\nLighting\nCollision detection"
                    imgx={100}
                    imgy={0}
                />
                <Project
                    id="Physics Character"
                    imageUrl="project_physics_character.png"
                    description="Physics Controlled"
                    imgx={100}
                    imgy={0}
                    side="left"
                />
            </div>
        </div>
        <Footer colorMain={"#F9FEE5"} colorSide={"#D0FFB4"} logoHue={40} textColor={"#69A546"}/>
    </>);
}