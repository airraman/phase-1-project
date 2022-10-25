fetch("http://localhost:3000/teams")
    .then((res) => res.json())
    .then((data) => populateTeams(data))



function populateTeams(data){
    data.forEach(teams => {
        let teamDrop = document.createElement("a")
        teamDrop.innerText = teams.Team
        document.getElementById("dropdowncontent").append(teamDrop)
        teamDrop.addEventListener("click", () => {
            console.log("hey")
            document.getElementById("PG").innerText = "Starting Point Guard " + teams.PG
            document.getElementById("SG").innerText = "Starting Shooting Guard " + teams.SG
            document.getElementById("SF").innerText = "Starting Small Forward " + teams.SF
            document.getElementById("PF").innerText = "Starting Power Forward " + teams.PF
            document.getElementById("C").innerText = "Starting Center " + teams.C
            let salary = `${parseFloat(teams.C_Salary) + parseFloat(teams.PF_Salary) + parseFloat(teams.SF_Salary) + parseFloat(teams.SG_Salary) +  parseFloat(teams.PG_Salary) }`
            document.getElementById("SalaryCap").innerText = "Starters Salary Cap = $" + salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            
        })
    })

}