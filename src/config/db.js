import pkg, { defaults } from 'pg';

const {Pool} = pkh;

const pool = new pool ({
    user : postgres,
    host :'localhost',
    database : 'JardimSecreto',
    passaword :'1234',
    port : 5432,

});

export default pool ;