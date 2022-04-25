import express from 'express';
import axios from 'axios';

const app = express();

//ruta de prueba para ver si fetchea data de api
app.get('/comics',async (req, res) => {
    try{
        const data = await axios('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=92b1929109f0272717c217d062103f24&hash=0a5a4c3c68e3ef9191ccb45e803bcb0b')
    data.data? res.status(200).json(data.data) : res.status(500).json({message: 'Error'})

    }catch(error){
        console.log(error)
    }
})
   
 

app.get('/', (req, res) => {
    res.send('Hellos! Server is ready!');
});

//const port = process.env.PORT || 3001;

app.listen(5000, () => {
    console.log(`Server is listening on port 5000`);
})
