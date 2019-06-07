const express = require("express");

const app = express();

app.use(express.urlendcoded({extended:false}));
app.use(express.json());


//routes here//



//port

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server started on Port ${port}`));