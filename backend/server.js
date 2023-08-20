const express = require('express');
const cors = require('cors');
const reviewsRoutes = require('./routes/reviews'); 
const authRoutes = require('./routes/auth.js'); 
const { sequelize } = require('./db'); 

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
(async () => {
  await sequelize.sync();
  console.log('Models synchronized with the database.');
})();
app.use('/api', reviewsRoutes);
app.use('/api', authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





