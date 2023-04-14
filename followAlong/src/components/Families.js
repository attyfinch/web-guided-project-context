import React, { useContext } from "react";
import { FamilyContext } from "../App";
import "../styles.scss";


const Families = () => {

    const { activeFamily, setActiveFamily, families } = useContext(FamilyContext);

    return (
        <div>
            <section className="header">
                <h1>Family Trees</h1>
                {families.map(family => (
                    <button
                    className={`family-button ${family.familyName ===
                        activeFamily.familyName && "active"}`}
                    key={family.familyName}
                    onClick={() => setActiveFamily(family)}
                    >
                    {family.familyName}
                    </button>
                ))}
            </section>
        </div>
    )
}


export default Families;