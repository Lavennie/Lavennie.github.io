import styles from './PiecesSubpage.module.css'
import NavBar from "../../components/NavBar.tsx";
import Footer from "../../components/Footer.tsx";
import Categories from "./Categories.tsx";
import PieceCard from "./PieceCard.tsx";

export default function PiecesPage() {
    return (<>
        <NavBar colorMain={"#33232D"} colorSide={"#6C344E"} textColor={"#FF74C2"} bannerY={48}
                bannerUrl={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkvpj9o-c40e0921-800d-4424-9dd2-f4e428ffa54a.jpg/v1/fill/w_1192,h_670,q_70,strp/resting_undeground_with_a_slime_by_lavennielil_dkvpj9o-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka3ZwajlvLWM0MGUwOTIxLTgwMGQtNDQyNC05ZGQyLWY0ZTQyOGZmYTU0YS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._QvhscwWJUpIiP9xTkFpaBaI79VK5E8YS-NR26NDEVY"}/>

        <div className={`app-background ${styles.appBackground}`}>
            <div className={`site-container ${styles.siteContainer}`}>
                <Categories height={150} selected={"sewing"}/>
                <div className={styles.pieceContainer}>
                    <PieceCard y={0} img={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkvpj9o-c40e0921-800d-4424-9dd2-f4e428ffa54a.jpg/v1/fill/w_1192,h_670,q_70,strp/resting_undeground_with_a_slime_by_lavennielil_dkvpj9o-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka3ZwajlvLWM0MGUwOTIxLTgwMGQtNDQyNC05ZGQyLWY0ZTQyOGZmYTU0YS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._QvhscwWJUpIiP9xTkFpaBaI79VK5E8YS-NR26NDEVY"}/>
                    <PieceCard y={20} img={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkvpj9o-c40e0921-800d-4424-9dd2-f4e428ffa54a.jpg/v1/fill/w_1192,h_670,q_70,strp/resting_undeground_with_a_slime_by_lavennielil_dkvpj9o-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka3ZwajlvLWM0MGUwOTIxLTgwMGQtNDQyNC05ZGQyLWY0ZTQyOGZmYTU0YS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._QvhscwWJUpIiP9xTkFpaBaI79VK5E8YS-NR26NDEVY"}/>
                    <PieceCard y={40} img={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkvpj9o-c40e0921-800d-4424-9dd2-f4e428ffa54a.jpg/v1/fill/w_1192,h_670,q_70,strp/resting_undeground_with_a_slime_by_lavennielil_dkvpj9o-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka3ZwajlvLWM0MGUwOTIxLTgwMGQtNDQyNC05ZGQyLWY0ZTQyOGZmYTU0YS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._QvhscwWJUpIiP9xTkFpaBaI79VK5E8YS-NR26NDEVY"}/>
                    <PieceCard y={60} img={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/902fc45c-deef-4f0b-b2ac-8e99318e9ac7/dkvpj9o-c40e0921-800d-4424-9dd2-f4e428ffa54a.jpg/v1/fill/w_1192,h_670,q_70,strp/resting_undeground_with_a_slime_by_lavennielil_dkvpj9o-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mLzkwMmZjNDVjLWRlZWYtNGYwYi1iMmFjLThlOTkzMThlOWFjNy9ka3ZwajlvLWM0MGUwOTIxLTgwMGQtNDQyNC05ZGQyLWY0ZTQyOGZmYTU0YS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._QvhscwWJUpIiP9xTkFpaBaI79VK5E8YS-NR26NDEVY"}/>
                </div>

                <div style={{height: "60px"}}/>
            </div>
        </div>
        <Footer colorMain={"#33232D"} colorSide={"#6C344E"} logoHue={294} textColor={"#FF74C2"}/>
    </>);
}