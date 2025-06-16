import { addPlayerInDB, getAllPlayers } from "../db/queries.js"

export const allPlayers = async (req, res) => {
    const players = await getAllPlayers()
    res.json({
        players
    })
}

export const addPlayer = async (req, res) => {
    let {name, time} = req.body;
    if (name.length < 1) {
        name = 'The anonymous giant'
    }
    await addPlayerInDB(name, time)
    res.json({
        message: 'Score submitted'
    })
} 