"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express")
const express_1 = __importDefault(require("express"));
// import dotenv = require('dotenv')
const dotenv_1 = __importDefault(require("dotenv"));
// const appRouter = require('./routes/appRouter')
const appRouter_1 = __importDefault(require("./routes/appRouter"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use('/', appRouter_1.default);
try {
    app.listen(PORT, () => console.log('server up and listening on port', PORT));
}
catch (error) {
    console.log("an error occurred while attempting to start the server...");
}
//# sourceMappingURL=index.js.map