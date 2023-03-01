import mysql from 'mysql2/promise';

export default async (req, res) => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'house-love',
  });
  
  // ここでデータベースの操作を行う
  const [rows, fields] = await connection.execute('SELECT * FROM uesrs');
  res.status(200).json(rows);

  connection.end();
}
