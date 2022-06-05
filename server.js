const express = require('express')
const cors = require('cors')
const PORT = 8000
const app = express()

app.use(cors())

const wildlife = {
    'bear' : {
        'diet':'omnivore',
        'size': 'huge'
    },
    'beaver' : {
        'diet':'woody material',
        'size':'medium'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:species', (request, response) => {
    const species = request.params.species.toLowerCase()
    if (wildlife[species]) {
        response.json(wildlife[species])
    } else {
        response.json(wildlife['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})