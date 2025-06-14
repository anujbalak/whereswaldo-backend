export const startGame = (req, res) => {
    res.status(200).json({
        time: 120,
    })
}