import { allEasyCharactersNames, matchDetails } from "../db/queries.js"

export const getAllEasyCharacters = async (req, res) => {
    const characters = await allEasyCharactersNames()

    res.status(200).json(characters)
}

export const postEasyGame = async (req, res) => {
    try {
        const {name, x, y} = req.body;
        const result = await matchDetails(name, x, y);
        if (!result) {
            return res.json({
                message: 'Wrong choice',
                success: false,
            })
        }

        res.json({
            message: 'Good Choice',
            success: true,
            character: {
                name: result.name,
                x: result.location.x,
                y: result.location.y,
            },
        })
    } catch (error) {
        console.error(error);
    }
}