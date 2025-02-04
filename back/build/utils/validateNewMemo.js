"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const newCarSchema = zod_1.z.object({
    licensePlate: zod_1.z.string().min(1, 'Licenseplate is required'),
    make: zod_1.z.string().min(1, 'Make is required'),
    model: zod_1.z.string().min(1, 'Model is required'),
    description: zod_1.z.string(),
    pictures: zod_1.z.string().array(),
});
exports.default = newCarSchema;
