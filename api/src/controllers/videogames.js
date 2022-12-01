const axios = require('axios')
const API_KEY = process.env


const GetInfo = async () =>{
    const infoApi= await axios.get(`https://api.rawg.io/api/games?key=be6c00fb1a634932a2a6c7869a302ae7`, {
        headers:{
            "Accept-Encoding": "null"
        }
    })
    console.log(infoApi.data)
    return infoApi.data.results
}

const GetName = async (game) =>{
    const gameName = await axios.get(`https://api.rawg.io/api/games?key=be6c00fb1a634932a2a6c7869a302ae7&search=${game}`, {
        headers:{
            "Accept-Encoding": "null"
        }
    })
    
    if(gameName.data.count == 0){
        console.log('no existe ese juego')
        return gameName.data.count
    }
    console.log(gameName.data)
    return gameName.data.results
}

const GetId = async (id) =>{
    const gameID = await axios.get(`https://api.rawg.io/api/games/${id}?key=be6c00fb1a634932a2a6c7869a302ae7`, {
        headers:{
            "Accept-Encoding": "null"
        }
    })
    console.log('este es el id', id)
    console.log(gameID.data)
    if(gameID.data.detail == "Not found."){
        console.log('no esta el id')
        return gameID.data.detail
    }

    return gameID.data.id
    
}

module.exports={
    GetInfo,
    GetName,
    GetId
}