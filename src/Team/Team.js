import { useEffect, useState} from "react";
import Header from "./header"
export default function Team({ TeamInfo }) {
    const [isVisible, setIsVisible] = useState({
        TeamA: false,
        TeamB: false,
        TeamC: false,
        TeamD: false
    })
    function handleClick(event) {
        let x = event.currentTarget;
        x.classList.toggle("clicked")
        setIsVisible((prev) => {
            return{
                ...prev,
                [x.classList[1]]: (x.classList.length === 3)
            }
        })
    }
    let teamContainer = []
    for (let char = 'A'; char <= 'D'; char = String.fromCharCode(char.charCodeAt(0) + 1)) {
        let curTeam = `Team${char}`
        let curTeamContainer = []
        TeamInfo[curTeam].forEach(cur => {
            curTeamContainer.push(
                <div key = {cur.id}>
                    <p><strong>Full Name: </strong> {cur.fullName}</p>
                    <p><strong>Designation: </strong> {cur.designation}</p>
                </div>

            )
        })
        if(curTeamContainer.length === 0){
            curTeamContainer.push(
                <p>There is no member in this team</p>
            )
        }
        teamContainer.push(
            <div className="teamContainer" key={curTeam} >
                <h5 className={`teamName ${curTeam}`} onClick={(e) => handleClick(e)}>
                    Team Name: Team {char}
                </h5>
                <div className = {`members ${isVisible[curTeam] ? "visible": ""}`} >
                    {curTeamContainer}
                </div>
            </div>
        )
    }
    return (
        <>
            <Header curMemberCount/>
            <div className="allTeamsContainer">
                {teamContainer}
            </div>
        </>
    )
}