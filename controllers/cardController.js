const { Card } = require("../models/listtodo");

const cardController = {
    addCard: async (req, res) => {
        try {
            //đẩy dữ liệu client của body vào db
            const newCard = new Card(req.body);
            //chép vào db
            const savedCard = await newCard.save();
            //trả ra 200 nếu đã chép trong db
            res.status(200).json(savedCard)
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAllCard: async (req, res) => {
        try {
            const cards = await Card.find();
            res.status(200).json(cards)
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateCard: async (req, res) => {
        try {
            await Card.findByIdAndUpdate({ _id: req.params.id }, req.body);
            const allCard = await Card.find();
            res.status(200).json(allCard);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteCard: async (req, res) => {
        try {
            await Card.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
module.exports = cardController;
