fetch("http://localhost:3000/teams")
    .then((res) => res.json())
    .then(data => {
        teams = data;
    })
    .then((data) => populateTeams(data))



function populateTeams(data){
    data.forEach(teams => {
        let teamDrop = document.createElement("a")
        teamDrop.innerText = teams.Team
        document.getElementById("dropdowncontent").append(teamDrop)
        teamDrop.addEventListener("click", () => {
            console.log("hey")
            document.getElementById("image").src = teams.Team_Logo
            document.getElementById("PG").innerText = "Starting Point Guard " + teams.PG
            document.getElementById("SG").innerText = "Starting Shooting Guard " + teams.SG
            document.getElementById("SF").innerText = "Starting Small Forward " + teams.SF
            document.getElementById("PF").innerText = "Starting Power Forward " + teams.PF
            document.getElementById("C").innerText = "Starting Center " + teams.C
            let salary = `${parseFloat(teams.C_Salary) + parseFloat(teams.PF_Salary) + parseFloat(teams.SF_Salary) + parseFloat(teams.SG_Salary) +  parseFloat(teams.PG_Salary) }`
            document.getElementById("SalaryCap").innerText = "Starters Salary Cap = $" + salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            
        })
    })
    .then(() => populateTeams())
}

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
    document.getElementById("image").src = newTeam.Team_Logo
    document.getElementById("PG").innerHTML =  "<b> Starting Point Guard: </b> " +  newTeam.PG
    document.getElementById("SG").innerHTML = "<b> Starting Shooting Guard: </b> " + newTeam.SG
    document.getElementById("SF").innerHTML = "<b> Starting Small Forward: </b> " + newTeam.SF
    document.getElementById("PF").innerHTML = "<b>Starting Power Forward: </b>" + newTeam.PF
    document.getElementById("C").innerHTML = "<b>Starting Center: </b>" + newTeam.C
    
    let salary = `${parseFloat(newTeam.C_Salary) + parseFloat(newTeam.PF_Salary) + parseFloat(newTeam.SF_Salary) + parseFloat(newTeam.SG_Salary) +  parseFloat(newTeam.PG_Salary) }`
    console.log(salary)
    document.getElementById("SalaryCap").innerText = "Starters Salary Cap = $" + salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'M';
    
    let PGimg = document.getElementById("PG_headshot")
    PGimg.src = newTeam.PG_Headshot;

    let SGimg = document.getElementById("SG_headshot")
    SGimg.src = newTeam.SG_Headshot;

    let SFimg = document.getElementById("SF_headshot")
    SFimg.src = newTeam.SF_Headshot;

    let PFimg = document.getElementById("PF_headshot")
    PFimg.src = newTeam.PF_Headshot;

    let Cimg = document.getElementById("C_headshot")
    Cimg.src = newTeam.C_Headshot;  

    document.getElementById("image").addEventListener("mouseover", (e) => {
        console.log(e)
        document.getElementById("teamnamefill").innerText = newTeam.Team
    })

    document.getElementById("PG_headshot").addEventListener("click", (e) => {
        console.log(e)
        document.getElementById("singleplayer").innerHTML= `${newTeam.PG} earns $` + `<b>${newTeam.PG_Salary}</b>  ` + `annually and averages`+ `<b> ${newTeam.PG_PPG} points</b> ` + `per game`


    })
    document.getElementById("SG_headshot").addEventListener("click", (e) => {
        console.log(e)
        document.getElementById("singleplayer").innerHTML = `${newTeam.SG} earns $` + `<b>${newTeam.SG_Salary}</b> ` + `annually and averages `+ `<b>${newTeam.SG_PPG} points</b> ` + `per game`

        console.log(e)
    })
    document.getElementById("SF_headshot").addEventListener("click", (e) => {
        console.log(e)
        document.getElementById("singleplayer").innerHTML = `${newTeam.SF} earns $` + `<b>${newTeam.SF_Salary} </b>` + `annually and averages `+ `<b>${newTeam.SF_PPG} points</b> ` + `per game`
    })
    document.getElementById("PF_headshot").addEventListener("click", (e) => {
        console.log(e)
        document.getElementById("singleplayer").innerHTML = `${newTeam.PF} earns $` + `<b>${newTeam.PF_Salary}</b> ` + `annually and averages `+ `<b> ${newTeam.PF_PPG} points</b>  ` + `per game`
    })
    document.getElementById("C_headshot").addEventListener("click", (e) => {
        console.log(e)
        document.getElementById("singleplayer").innerHTML = `${newTeam.C} earns $` + `<b>${newTeam.C_Salary}</b> ` + `annually and averages `+ `</> ${newTeam.C_PPG} points</b> ` + `per game`
    })

 
}



