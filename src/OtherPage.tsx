import styles from './OtherPage.module.css'
import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import {Canvas} from '@react-three/fiber';
import Constellations from "./components/constellation/Constellations.tsx";

export default function OtherPage() {
    return(<>
        <NavBar colorMain={"#212125"} colorSide={"#323245"} textColor={"#7AB7FF"}
                bannerUrl={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dl69nr1-0528666b-6243-44c2-bf57-6d6dffb3ff3d.jpg/v1/fill/w_1192,h_670,q_70,strp/man_black_sea_by_lavennielil_dl69nr1-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9kbDY5bnIxLTA1Mjg2NjZiLTYyNDMtNDRjMi1iZjU3LTZkNmRmZmIzZmYzZC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ybbnILZkM8S8oCnBdY0S6RixC9sXe2D1Eh5GrUGX51s"} />

        <div className={`app-background ${styles.appBackground}`}>
            {/* the div below is for the bakcground image, it needs to be the first child of appBackground */}
            <div></div>
            <div className={`site-container ${styles.siteContainer}`}>
                <Constellations/>
            </div>
        </div>
        <Footer colorMain={"#212125"} colorSide={"#323245"} logoHue={190}/>
    </>);
}