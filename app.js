const express = require('express');
const app = express();
const PORT = 3000;

//Middleware to parse URL-encoded data
app.use(express.urlencoded({extended: true}));

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

app.get('/form', (req, res) => {
    res.render('pages/newForm', {
        title:'New Message'
    })
})

app.post('/form', (req, res) => {
    const {userName, messageText} = req.body;
    messages.push({text: messageText, user:userName, added: new Date()});
    res.redirect('/');
})



app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
})