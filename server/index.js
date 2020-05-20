const express = require('express');
const mc = require('./controllers/messages_controller');


const port = 3001;
const messagesBaseUrl = "/api/messages";

const app = express();
app.use(express.json());
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);
app.use(express.static(__dirname + '/../public/build'));


app.listen(port, ()=>{
    console.log("Server listening on port: "+port);
})