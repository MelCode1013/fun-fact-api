alert('working')
const dogButtonValue = document.getElementById('dog')
const catButtonValue = document.getElementById('cat')
const tattooButtonValue = document.getElementById('tattoo')
//const doSomething = () => console.log("something");

//document.querySelector('button').addEventListener('click', apiRequest)

dogButtonValue.addEventListener('click', dogConditional)

function dogConditional() {
    const res = fetch(`https://mb-fun-fact-api.herokuapp.com/api/dogs`)
    console.log(res)
    apiRequest()
}




async function apiRequest(){
    try{
        //const res = await fetch(`https://mb-fun-fact-api.herokuapp.com/api/${subject}`)
        const data = await res.json()

        console.log(data)
        document.querySelector('h2').innerText = data['fun fact 1']
    }catch(error){
        console.log(error)
    }
}