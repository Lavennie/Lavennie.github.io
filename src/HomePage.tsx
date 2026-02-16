import NavBar from "./components/NavBar.tsx";
import Footer from "./components/Footer.tsx";
import styles from "./HomePage.module.css";
import {timelapseListHeight} from "./assets/TimelapseLibrary.tsx";
import Slideshow from "./components/home/Slideshow.tsx";

export default function HomePage() {
    return (
        <>
            <NavBar colorMain={"#E9E1E2"} colorSide={"#FEF7D0"} textColor={"#3E3C3A"} bannerY={19}
                  bannerUrl={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dku195m-95df0e0d-8d3e-4f52-843b-3e50e53bac4f.jpg/v1/fill/w_1192,h_670,q_70,strp/angel_under_the_dazzling_sun_by_lavennielil_dku195m-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka3UxOTVtLTk1ZGYwZTBkLThkM2UtNGY1Mi04NDNiLTNlNTBlNTNiYWM0Zi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5nBaxF0nCf5UUxT2UtImybiGquC-g36xmtCc_c__4IA"}/>
            <div className={`app-background ${styles.appBackground}`}>
                <div className={`site-container ${styles.siteContainer}`} style={{height: "90vh"}}>
                    <Slideshow/>
                </div>
            </div>
            <Footer colorMain={"#E9E1E2"} colorSide={"#FEF7D0"} logoHue={22} textColor={"#3E3C3A"}/>
        </>
    );
}