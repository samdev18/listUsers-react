const app = require('./app');
require('dotenv').config({ path: '.env' })

app.set('port', process.env.APP_PORT);
const server = app.listen(app.get('port'), () => {
    console.log(`Server runnning at port ${app.get('port')}`)
})