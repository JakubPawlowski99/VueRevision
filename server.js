const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Import path module

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'shop_db'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('MySQL connected...');
});

app.get('/products', (req, res) => {
  const sql = 'SELECT * FROM products';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      res.status(500).send({ error: 'Error fetching products' });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});