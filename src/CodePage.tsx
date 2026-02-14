import './CodePage.css'
import NavBar from './components/NavBar.tsx'
import Footer from './components/Footer.tsx'
import Project from './components/code/Project.tsx'

export default function CodePage() {
    return(<>
        <NavBar colorMain={"#F9FEE5"} colorSide={"#D0FFB4"} textColor={"#7ADF3E"} />
        <div className="app-background">
            <div className="site-container" style={{height: "1940px"}}>
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
        <Footer colorMain={"#F9FEE5"} colorSide={"#D0FFB4"} logoHue={40}/>
    </>);
}