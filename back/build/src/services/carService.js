"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateNewMemo_1 = __importDefault(require("../../utils/validateNewMemo"));
const uuid_1 = require("uuid");
const carMemos_1 = __importDefault(require("../../data/carMemos"));
const addNew = (memo) => {
    const parsed = validateNewMemo_1.default.parse(memo);
    const newMemo = Object.assign(Object.assign({}, parsed), { id: (0, uuid_1.v1)() });
    carMemos_1.default.push(newMemo);
    return newMemo;
};
exports.default = { addNew };
