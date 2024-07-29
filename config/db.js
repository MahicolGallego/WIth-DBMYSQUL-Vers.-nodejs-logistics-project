import mysql from 'mysql2/promise';

// try {
//     const pool = mysql.createPool({
//         host: 'b2nco4qslcwkg1ph4ooz-mysql.services.clever-cloud.com',
//         user: 'uflasq8c6w8fytdk',
//         database: 'b2nco4qslcwkg1ph4ooz',
//         port: 3306,
//         password: 'K12t6CfNbzLcfyzwigKT',
//     });
//     const connection = await pool.getConnection();
//     console.log("connection to DB successful")
//
//     Liberar la conexión para que pueda ser reutilizada
//     connection.release();
// } catch (err) {
//     console.log(err);
// }

//Of Preferences ---------------------------------------

//Exportamos el pool por si necesitamos realizar alguna operacion especifica

export const pool = mysql.createPool({
    host: 'b2nco4qslcwkg1ph4ooz-mysql.services.clever-cloud.com',
    user: 'uflasq8c6w8fytdk',
    database: 'b2nco4qslcwkg1ph4ooz',
    port: 3306,
    password: 'K12t6CfNbzLcfyzwigKT',
});

async function getConnection() {
    try {
        const connection = await pool.getConnection();
        console.log("DB connection successful")
        //connection.release();
        return connection;
    } catch (err) {
        console.error("DB connection failed: ",err);
    }
}




