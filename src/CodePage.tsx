import './CodePage.css'
import NavBar from './components/NavBar.tsx'
import Footer from './components/Footer.tsx'
import Project from './components/code/Project.tsx'

export default function CodePage() {
    return(<>
        <NavBar colorMain={"#F9FEE5"} colorSide={"#D0FFB4"} textColor={"#7ADF3E"} />
        <div className="app-background">
            <div className="site-container" style={{height: "1620px"}}>
                <Project
                    id="Our Cure"
                    imageUrl="project_our_cure.png"
                    description="Video game\n2D tactical RPG"
                    link="https://celestide-games.github.io/index.html"
                    imgx={-240}
                    imgy={-230}
                />
                <Project
                    id="Pixel Paint"
                    imageUrl="project_pixel_paint.png"
                    description="Unity extension\n2D painting"
                    imgx={-350}
                    imgy={-30}
                    side="left"
                />
                <Project
                    id="Game Engine"
                    imageUrl="project_game_engine.png"
                    description="3D animated meshes\nLighting\nCollision detection"
                    imgx={-600}
                    imgy={-500}
                />
                <Project
                    id="GNN Fish"
                    imageUrl="project_mlg_fish.png"
                    description="Graph neural networks\nFish trajectory prediction"
                    imgx={600}
                    imgy={300}
                    side="left"
                    logoHue={40}
                />
                <Project
                    id="MPA"
                    imageUrl="https://img.itch.zone/aW1hZ2UvMTAzNTI2MC81OTE0OTAzLnBuZw==/original/68MUNc.png"
                    description="3D animated meshes\nLighting\nCollision detection"
                    link="https://lavennie.itch.io/method-process-algorithm"
                    githubLink="https://lavennie.itch.io/method-process-algorithm"
                    imgx={0}
                    imgy={-600}
                    logoHue={40}
                />
            </div>
        </div>
        <Footer colorMain={"#F9FEE5"} colorSide={"#D0FFB4"} logoHue={40}/>
    </>);
}