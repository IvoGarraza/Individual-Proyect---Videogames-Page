const {Router} = require('express')
const { GetInfo, GetName, GetId } = require('../controllers/videogames')


const router = Router()

router.get('/', async (req, res) =>{
    const {name} = req.query
    if(name){
        try {
            console.log('nombre:', name)
            res.status(200).send(await GetName(name))
        } catch (error) {
            console.log('error del catch de la busqueda del nombre')
            res.status(404).send('el juego no existe :)')
            
        }
    }
    try {
        console.log('router del get /videogames')
        res.status(200).send(await GetInfo())
        
    } catch (error) {
        console.log(error)
        return error
    }
})

router.get('/:id', async (req,res) =>{
    const ID = req.params.id
    console.log(ID)

    try {
        res.status(200).send('este es el id:'+await GetId(ID))
                

    } catch (error) {
        res.status(404).send('eroor del  try-catch del router.get/:id')
        console.log(error)
        return error
    }
})

module.exports = router