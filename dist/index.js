"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const app = express_1.default();
const port = 8080; // default port to listen
app.use('/users', user_1.default);
// define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello world!');
});
app.get('/today', (req, res) => {
    res.send(new Date());
});
app.get('/future/:day', (req, res) => {
    let date = new Date();
    date.setDate(date.getDate() + Number(req.params.day));
    res.send(date);
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map