import express from 'express';
import axios from 'axios';

const app = express();

app.get('/comics',async (req, res) => {
    const data = await axios('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=92b1929109f0272717c217d062103f24&hash=0a5a4c3c68e3ef9191ccb45e803bcb0b')
    data.data? res.status(200).json(data.data) : res.status(500).json({message: 'Error'})
})

app.get('/', (req, res) => {
    res.send('Hellos! Server is ready!');
});

app.listen(3001, () => {
    console.log('Server is listening on port 3001');
})