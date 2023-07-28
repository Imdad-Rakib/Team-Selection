import Header from './header';
import EmployeeList from "./employe_list";
import { useState, useEffect} from 'react';
import employe_data from './employe_data'


export default function Home({passData}) {
    const [curTeam, setCurTeam] = useState(JSON.parse(localStorage?.getItem('curTeam')) || "Team A")
    const [allSelectedMembersID, setAllSelectedMembersID] = useState(JSON.parse(localStorage?.getItem('allSelectedMembersID')) || [])
    const [teamMembers, setTeamMembers] = useState(JSON.parse(localStorage.getItem('teamMembers')) || {
        TeamA: [],
        TeamB: [],
        TeamC: [],
        TeamD: []
    })
    useEffect(() => {
        localStorage.setItem('allSelectedMembersID', JSON.stringify(allSelectedMembersID))
    }, [allSelectedMembersID])
    
    useEffect(() => {
        localStorage.setItem('teamMembers', JSON.stringify(teamMembers))
        passData(teamMembers)
        setAllSelectedMembersID(() =>{
            let x = []
            for(let char = 'A'; char <= 'D'; char = String.fromCharCode(char.charCodeAt(0) + 1)){
               
                let team = `Team${char}`
                teamMembers[team].forEach(cur => {
                    x.push(cur.id)
                })
            }
            return x;
        })
    }, [teamMembers])
    useEffect(() => {
        localStorage.setItem('curTeam', JSON.stringify(curTeam))
    }, [curTeam])
    function handleEmployeeClick(event, curId) {
        if(event.currentTarget.classList.contains("otherTeamCard")){
            alert("This employee is not available right now")
            return;
        }
        setTeamMembers((prevTeamMembers) => {
            let now = teamMembers[`Team${curTeam[5]}`]
            let pos = -1;
            now.forEach((member, index) => {
                if (member.id === curId) pos = index
            });
            if (pos === -1) {
                now.push(employe_data[curId - 1])
            }
            else now.splice(pos, 1)
            return {
                ...prevTeamMembers,
                [`Team${curTeam[5]}`]: now
            }
        })
    }
    function handleSelection(event) {
        setCurTeam(() => {
            return event.target.value
            
        })
    }
    return (
        <>
            <Header
                teamName={curTeam}
                memberCount={teamMembers[`Team${curTeam[5]}`].length}
                handleSelection={handleSelection}
            />
            <EmployeeList
                handleEmployeeClick={handleEmployeeClick}
                allSelectedMembersID = {allSelectedMembersID}
                curTeam = {curTeam}
                teamMembers = {teamMembers}
            />
        </>
    );
}

