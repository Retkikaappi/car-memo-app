"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const storeImage_1 = __importDefault(require("../../utils/storeImage"));
const carMemos_1 = __importDefault(require("../../data/carMemos"));
const carService_1 = __importDefault(require("../services/carService"));
const router = express_1.default.Router();
router.get('/', (_req, resp) => {
    resp.send(carMemos_1.default);
});
router.post('/', storeImage_1.default.single('pictures'), (req, resp) => {
    if (!req.file) {
        resp.status(400).json({ error: 'no attached image' });
        return;
    }
    if (!req.body) {
        resp.status(400).json({ error: 'body missing' });
        return;
    }
    const newCar = carService_1.default.addNew(Object.assign(Object.assign({}, req.body), { pictures: [`http://localhost:3001/api/pictures/${req.file.filename}`] }));
    resp.json(newCar);
});
exports.default = router;
