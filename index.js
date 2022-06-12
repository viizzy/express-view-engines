const express = require('express');

const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

// view engine

app.use(expressLayouts);
app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.send(`<h1> hello world </h1>`)
// });

// app.get('/employees', (req, res) => {
//     res.send(`<h1> employees </h1>`)
// });

// navigation requests

app.get('', (req, res) => {
    const characters = [
        {
            name: 'Snapfire',
            attackRange: '400',
            abilityUpgrades: 'Gobble Up, Spit Out, Scatterblast',
            randomInfo: 'Lorem ipsum dolor sit amet consectetaur'
        },
        {
            name: 'Terrorblade', 
            attackRange: '150',
            abilityUpgrades: 'Terror Wave, Demon Zeal',
            randomInfo: 'Lorem ipsum dolor sit amet consectetaur'
        },
        {
            name: 'Riki', 
            attackRange: '150',
            abilityUpgrades: 'Tricks of the Trade, Sleeping Dart',
            randomInfo: 'Lorem ipsum dolor sit amet consectetaur'
        },
    ];
    res.render('index', { title: 'Home', characters});
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

app.get('/character/create', (req,res) => {
    res.render('create', { title: 'Create a new character'});
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: 'Err'})
});

// listen on port
app.listen(3000, () => {
    console.log(`app started on port ${port}`);
});