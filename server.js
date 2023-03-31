const express = require('express')
const dotenv = require('dotenv');
const OrderRouter = require('./routes/orderRoute');
const cors = require('cors');
const bodyparser = require('body-parser');
const sequelize = require('./util/database')

dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 3000;
const app = express()

app.use(bodyparser.json({ extended: false }))
app.use(cors());
app.use('/', OrderRouter);

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Example app listening on port http://localhost:${port}`)
    })
}).catch((err) => {
    console.log(err)
});

