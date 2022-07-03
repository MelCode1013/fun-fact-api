alert('working')


async function apiRequest(clickID){
    let subject = clickID
    try{
        const res = await fetch(`https://mb-fun-fact-api.herokuapp.com/api/${subject}`)
        const data = await res.json()

        console.log(data)
        console.log(document.querySelector('h2').innerHTML = data[randomFast()])
    }catch(error){
        console.log(error)
    }
}

function randomFact() {
    let funFact = Math.random()

    if (funFact < .5){
        return 'fun fact 1'
    } else {
        return 'fun fact 2'
    }
}