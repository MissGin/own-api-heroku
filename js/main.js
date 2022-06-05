console.log('bears')

document.querySelector('button').addEventListener('click', apiRequest)

function apiRequest() {
    console.log('bears')
}

// async function apiRequest() {
//     console.log("A bear")
//     const bears = document.querySelector('input').value
//     try {
//         const response = await fetch(`https://own-api-herokuapi/${bears}`)
//         data = await response.json()
    
//         console.log(data)
//         document.querySelector('h2').innerText = data.diet
//     } catch(error) {
//         console.log(error)
//     }
// }