import styles from "./Categories.module.css";
import { Link } from "react-router-dom";

type CategoriesProps = {
    height?: number | undefined;
    selected?: "textile" | "sculptures" | "origami" | "3D models" | undefined;
};


export default function Categories({ height = undefined, selected = undefined } : CategoriesProps) {
    return (<>
        <div className={styles.categoriesContainer} style={height ? { height: `${height}px` } : {}}>
            <Link className={`${styles.category} ${selected === "textile" ? styles.selected : ""}`} to={"/creations/textile"}>
                <div style={{backgroundImage: "url(\"pieces/plushie_penguin_tall.jpg\""}}></div>
                <span>Textile</span>
            </Link>
            <Link className={`${styles.category} ${selected === "sculptures" ? styles.selected : ""}`} to={"/creations/sculptures"}>
                <div style={{backgroundImage: "url(\"pieces/model_ship.jpg\""}}></div>
                <span>Sculptures</span>
            </Link>
            <Link className={`${styles.category} ${selected === "origami" ? styles.selected : ""}`} to={"/creations/origami"}>
                <div style={{backgroundImage: "url(\"pieces/origami_flower_boquete1.jpg\""}}></div>
                <span>Origami</span>
            </Link>
            <Link className={`${styles.category} ${selected === "3D models" ? styles.selected : ""}`} to={"/creations/3D"}>
                <div style={{backgroundImage: "url(\"pieces/3D_pillbug.jpg\""}}></div>
                <span>3D models</span>
            </Link>
        </div>
    </>);
}