document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const subject = document.querySelector('button').value
    try{
        const res = await fetch(`https://mb-fun-fact-api.herokuapp.com/api/${subject}`)
        const data = await res.json()

        console.log(data)
        document.querySelector('h2').innerText = data['fun fact 1']
    }catch(error){
        console.log(error)
    }
}