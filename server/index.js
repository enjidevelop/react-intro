const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/api/ping-pong', (req, res) => {
    res.json({
        status: 'success',
        data: req.body.data
    });
});

app.listen(3001);