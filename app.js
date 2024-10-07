const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
      },
      {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
      }
]
app.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'Mini Message Board',
        messages: messages
    })
})

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
})