import express from 'express';
import userRoutes from './routes/user';
const app = express();
const port = 8080; // default port to listen

app.use('/users', userRoutes);
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
})

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
