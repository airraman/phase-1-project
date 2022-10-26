teams = []

fetch("http://localhost:3000/teams")
    .then((res) => res.json())
    .then(data => {
        teams = data;
    })
    .then(() => populateTeams())

function populateTeams() {
    let select = document.getElementById("dropdowncontent");
    for (index in teams) {
        select.options[select.options.length] = new Option(teams[index].Conference + ", " + teams[index].Team, index);
    }

    populatePlayers(teams[0])
}

function changeTeam(index) {
    let newTeam = teams[index]
    populatePlayers(newTeam)
} 

function populatePlayers(newTeam) {
    document.getElementById("PG").innerText = newTeam.PG
    document.getElementById("SG").innerText = newTeam.SG
    document.getElementById("SF").innerText = newTeam.SF
    document.getElementById("PF").innerText = newTeam.PF
    document.getElementById("C").innerText = newTeam.C
}