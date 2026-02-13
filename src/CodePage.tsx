import './CodePage.css'
import NavBar from './components/NavBar.tsx'
import Footer from './components/Footer.tsx'

export default function CodePage() {
    return(<>
        <NavBar colorMain={"#E5EBFE"} colorSide={"#C1B4FF"} textColor={"#714FFF"} />
        <Footer colorMain={"#E5EBFE"} colorSide={"#C1B4FF"} logoHue={204}/>
    </>);
}