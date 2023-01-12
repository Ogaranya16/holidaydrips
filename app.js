const express = require('express');
const PORT = 4000;

const app = express();

app.listen(PORT, () =>{
    console.log(`Server is listening on: http://localhost:${PORT}`)
})