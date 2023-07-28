export default function Header({teamName, memberCount, handleSelection}) {
    return (
        <div className = "header">
            <h2 className = "first-header">Team Member Allocation</h2>
            <h5 className = "second-header">{teamName} has {memberCount} members</h5>
            <select className = "selectTeam" value = {teamName} onChange = {handleSelection}>
                <option value = "Team A">Team A</option>
                <option value = "Team B">Team B</option>
                <option value = "Team C">Team C</option>
                <option value = "Team D">Team D</option>
            </select>
            <hr className="line"/>
        </div>
    )
}