//Define Variables
const head = document.getElementById("header")

async function fetchStuff(){

await fetch("https://www.balldontlie.io/api/v1/teams")
    .then((res) => res.json())
    .then((data) => renderTeams(data)) 
await fetch("https://www.balldontlie.io/api/v1/players?per_page=100")
    .then((res) => res.json())
    .then((data) => displayPlayers(data))
await fetch("https://www.balldontlie.io/api/v1/players?per_page=100&page=2")
    .then((res) => res.json())
    .then((data) => displayPlayers(data))
await fetch("https://www.balldontlie.io/api/v1/players?per_page=100&page=3")
    .then((res) => res.json())
    .then((data) => displayPlayers(data))
await fetch("https://www.balldontlie.io/api/v1/players?per_page=100&page=4")
    .then((res) => res.json())
    .then((data) => displayPlayers(data))

}


fetchStuff()



//First Fetch
function renderTeams(data){
    console.log(data)
    data.data.forEach(data => {
        let teamHeader = document.createElement("h1")
        let dropDown = document.createElement("select")
        let teamContainer = document.createElement("div")
        teamContainer.className = data.name
        dropDown.id = data.name
        teamHeader.innerText = data.name
        teamContainer.append(teamHeader)
        head.append(teamContainer, dropDown)    
    })

}


//Second Fetch 
function displayPlayers(data){
    console.log(data)
    data.data.forEach( data => {
        let playerName = document.createElement("option")
        playerName.innerHTML  =  `${data.first_name}` +  " " + `${data.last_name}`
        document.getElementById(data.team.name).append(playerName)
    })
}


function displayYear(data){
    console.log(data)
}