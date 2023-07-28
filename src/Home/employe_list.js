import employe_data from './employe_data'
import male from '../Images/maleProfile.jpg'
import female from '../Images/femaleProfile.jpg'

export default function employeeList({handleEmployeeClick, allSelectedMembersID, curTeam, teamMembers}) {
    let curTeamIDs = teamMembers[`Team${curTeam[5]}`].map(element => {
        return element.id
    })
    let allEmployee = employe_data.map(curr => {
        let dynamicClass = "";
        if(curTeamIDs.includes(curr.id)) dynamicClass = "curTeamCard"
        else if(allSelectedMembersID.includes(curr.id)) dynamicClass = "otherTeamCard"
        return (
            <div className= {`employeeCard ${dynamicClass}`} key = {curr.id} onClick={(e) => handleEmployeeClick(e, curr.id)}>
                <div className="employeeImage">
                    <img src= {curr.gender === "male" ? male: female}/>
                </div>
                <div className="employeeInfo">
                    <p className="fullName"><strong>Full Name: {curr.fullName}</strong></p>
                    <p className="designation"><strong>Designation: </strong> {curr.designation}</p>
                </div>
            </div>
        )
    })
    return (
        <div className='container'>
            <div className="employeeContainer">
                {allEmployee}
            </div>
        </div>
    )
}