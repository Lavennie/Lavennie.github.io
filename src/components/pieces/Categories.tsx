import styles from "./Categories.module.css";
import { Link } from "react-router-dom";

type CategoriesProps = {
    height?: number | undefined;
    selected?: "textile" | "sculptures" | "origami" | "3D models" | undefined;
};


export default function Categories({ height = undefined, selected = undefined } : CategoriesProps) {
    return (<>
        <div className={styles.categoriesContainer} style={height ? { height: `${height}px` } : {}}>
            <Link className={`${styles.category} ${selected === "textile" ? styles.selected : ""}`} to={"/pieces/textile"}>
                <div style={{backgroundImage: "url(\"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkypfph-fa1a7464-e1a3-44b8-863b-01f4a5c53ded.jpg/v1/fill/w_1192,h_670,q_70,strp/resting_behind_the_table_by_lavennielil_dkypfph-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka3lwZnBoLWZhMWE3NDY0LWUxYTMtNDRiOC04NjNiLTAxZjRhNWM1M2RlZC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7fePJV0KKjaBfwyIxAEcgToXHz8dPG69mEXZ_LJ4NW4\""}}></div>
                <span>Textile</span>
            </Link>
            <Link className={`${styles.category} ${selected === "sculptures" ? styles.selected : ""}`} to={"/pieces/sculptures"}>
                <div style={{backgroundImage: "url(\"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkypfph-fa1a7464-e1a3-44b8-863b-01f4a5c53ded.jpg/v1/fill/w_1192,h_670,q_70,strp/resting_behind_the_table_by_lavennielil_dkypfph-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka3lwZnBoLWZhMWE3NDY0LWUxYTMtNDRiOC04NjNiLTAxZjRhNWM1M2RlZC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7fePJV0KKjaBfwyIxAEcgToXHz8dPG69mEXZ_LJ4NW4\""}}></div>
                <span>Sculptures</span>
            </Link>
            <Link className={`${styles.category} ${selected === "origami" ? styles.selected : ""}`} to={"/pieces/origami"}>
                <div style={{backgroundImage: "url(\"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkypfph-fa1a7464-e1a3-44b8-863b-01f4a5c53ded.jpg/v1/fill/w_1192,h_670,q_70,strp/resting_behind_the_table_by_lavennielil_dkypfph-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka3lwZnBoLWZhMWE3NDY0LWUxYTMtNDRiOC04NjNiLTAxZjRhNWM1M2RlZC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7fePJV0KKjaBfwyIxAEcgToXHz8dPG69mEXZ_LJ4NW4\""}}></div>
                <span>Origami</span>
            </Link>
            <Link className={`${styles.category} ${selected === "3D models" ? styles.selected : ""}`} to={"/pieces/3D"}>
                <div style={{backgroundImage: "url(\"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkypfph-fa1a7464-e1a3-44b8-863b-01f4a5c53ded.jpg/v1/fill/w_1192,h_670,q_70,strp/resting_behind_the_table_by_lavennielil_dkypfph-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka3lwZnBoLWZhMWE3NDY0LWUxYTMtNDRiOC04NjNiLTAxZjRhNWM1M2RlZC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7fePJV0KKjaBfwyIxAEcgToXHz8dPG69mEXZ_LJ4NW4\""}}></div>
                <span>3D models</span>
            </Link>
        </div>
    </>);
}