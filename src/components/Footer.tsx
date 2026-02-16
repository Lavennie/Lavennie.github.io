import './Footer.css'
import youtubeLogo from '.././assets/logo-youtube.svg'
import deviantartLogo from '.././assets/logo-deviantart.svg'
import githubLogo from '.././assets/logo-github.svg'

type FooterProps = {
    colorMain: string;
    colorSide : string;
    logoHue : number;
    textColor : string;
};

export default function Footer({colorMain, colorSide, logoHue, textColor} : FooterProps) {
    const gradientStyle: React.CSSProperties = {
        background: `linear-gradient(
            to right,
            ${colorSide},
            ${colorMain} 10%,
            ${colorMain} 90%,
            ${colorSide})`,
        borderTop: `1px solid ${textColor}44`,
    };
    const logoStyle: React.CSSProperties = {
        filter: `brightness(0.6) sepia(1) hue-rotate(${logoHue}deg) saturate(5)`,
    };

    return (
        <>
            <div className="footer" style={gradientStyle}>
                <a href={"https://www.youtube.com/@lavennie108"}>
                    <img src={youtubeLogo} style={logoStyle} />
                </a>
                <a href={"https://github.com/Lavennie"}>
                    <img src={githubLogo} style={logoStyle} />
                </a>
                <a href={"https://www.deviantart.com/lavennielil"}>
                    <img src={deviantartLogo} style={logoStyle} />
                </a>
            </div>
        </>
    );
}