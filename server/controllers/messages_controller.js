const messages = [];
let lastId=0;
module.exports = {
    create: (req, res) => {
        const {text, time} = req.body;
        const id = lastId++;
        messages.push({id, time, text })
        res.status(200);
        res.send(messages);
    },
    update: (req, res) => {
        const {text} = req.body;
        const id = req.params.id;
        console.log({id, text})
        const message = messages.find(e=>e.id == id)
        message.text = text;
        res.status(200);
        res.send(messages);
    },
    read: (req, res) => {
        res.status(200);
        res.send(messages);
    },
    delete: (req, res) => {
        const id = req.params.id;
        const index = messages.findIndex(e=>e.id == id)
        messages.splice(index,1)
        res.status(200);
        res.send(messages);
    }
}