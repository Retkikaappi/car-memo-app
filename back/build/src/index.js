"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const carRoute_1 = __importDefault(require("./routes/carRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/pictures', express_1.default.static('data/pictures'));
app.get('/api/test', (_req, resp) => {
    resp.send('/api/test');
});
app.use('/api/carMemos', carRoute_1.default);
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});
