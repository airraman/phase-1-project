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
            document.getElementById("PG").innerText = teams.PG
            document.getElementById("SG").innerText = teams.SG
            document.getElementById("SF").innerText = teams.SF
            document.getElementById("PF").innerText = teams.PF
            document.getElementById("C").innerText = teams.C
        })
    })

}