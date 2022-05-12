"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appRouter = express_1.default.Router();
try {
    appRouter.get('/', (req, res) => {
        res.status(200).send("welcome to the desert of the real");
    });
}
catch (error) {
    console.log("an error occurred in the app router...");
}
exports.default = appRouter;
//# sourceMappingURL=appRouter.js.map