"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const users = [{
        userId: 1,
        name: 'Cat'
    }, {
        userId: 2,
        name: 'Dog'
    }, {
        userId: 3,
        name: 'Bird'
    }];
router.get('/', (req, res) => {
    res.send(users);
});
router.get('/:id', (req, res) => {
    const user = users.find(c => c.userId === Number(req.params.id));
    res.send(user);
});
exports.default = router;
//# sourceMappingURL=user.js.map