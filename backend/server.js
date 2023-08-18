// const express = require('express');
// const mysql = require('mysql')
// const cors = require('cors')

// const app = express()
// app.use(cors())

// app.get('/',(re,res)=>{
//     return res.json("From backend side");
// })

// app.listen(3000,()=>{
//     console.log("listening");
// })
// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();
// app.use(cors());

// // Create a MySQL connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'sonalika',
//   password: 'cheeky24',
//   database: 'Travel',
// });

// // Connect to the database
// db.connect((err) => {
//   if (err) {
//     console.error('Database connection failed:', err);
//   } else {
//     console.log('Connected to the database');
//   }
// });

// Define a route to fetch data from the database
// app.get('/tourist-sites', (req, res) => {
//   const query = 'SELECT * FROM tourist_sites';
//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Database query failed:', err);
//       res.status(500).json({ error: 'Internal server error' });
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.listen(3000, () => {
//   console.log('Server is listening on port 3000');
// });
// app.get('/',(req,res)=>{
//         return res.json("From backend side");
//     })
    
//     app.listen(3000,()=>{
//         console.log("listening");
//     })

// const express = require('express')
// const app = express()

// app.listen(3001,()=>{
//     console.log("Server is running");
// });

// import express from "express"
// const app = express()

// app.use(express.json())

// app.listen(3001,()=>{
//     console.log("Connected!")
// })

// const express = require('express');
// const cors = require('cors');
// //const reviewsRoute = require('./routes/reviews'); // Import your API route
// const db = require('../db'); // Import your database connection

// const app = express();
// app.use(cors());
// app.use(express.json()); // Parse JSON request bodies

// const reviewsRoutes = require('./routes/reviews');
// app.use('/api/reviews', reviewsRoutes);
//  // Mount the reviews route on /api/reviews

// app.listen(3001, () => {
//   console.log('Server is listening on port 3001');
// });
const express = require('express');
const cors = require('cors');
const reviewsRoutes = require('./routes/reviews'); // Import your reviews routes
const { sequelize } = require('./db'); // Import sequelize instance

const app = express();
app.use(cors());
app.use(express.json());

// Synchronize models with the database
(async () => {
  await sequelize.sync();
  console.log('Models synchronized with the database.');
})();

// Use your reviews routes under the '/api' endpoint
app.use('/api', reviewsRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





