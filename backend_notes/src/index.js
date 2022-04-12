const { app } = require('./app');
const { db_connection } = require('./database');

async function main(){
    await db_connection();
    await app.listen(4002);
}

main();