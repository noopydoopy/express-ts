import express from 'express';
const router = express.Router();

const users = [{
    userId: 1,
    name: 'Cat'
}, {
    userId: 2,
    name: 'Dog'
}, {
    userId: 3,
    name: 'Bird'
}]

router.get('/', (req, res) => {
    res.send(users);
})

router.get('/:id', (req, res) => {

    const user = users.find(c => c.userId === Number(req.params.id));
    res.send(user);
})

export default router;