
const express = require('express');
const cors = require('cors');
const reviewsRoutes = require('./routes/reviews'); 
const authRoutes = require('./routes/auth.js');
const stateCityRoutes = require('./routes/stateCityRoutes');
const siteRoutes = require('./routes/siteRoutes');
const popularSiteRoutes = require('./routes/popularSiteRoutes');
const singleSiteRoutes = require('./routes/singleSiteRoutes');
const { sequelize } = require('./db'); 
const db=require('./models')
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
(async () => {
  await sequelize.sync();
  console.log('Models synchronized with the database.');
})();
app.use('/api', authRoutes);
app.use('/api', reviewsRoutes);
app.use('/api', stateCityRoutes);
app.use('/api/sites', siteRoutes);
//app.use('/agents', agentRoutes);
//app.use('/site-agents', siteAgentRoutes);
app.use('/api', popularSiteRoutes);
//app.use('/api', popularSiteRoutes, singleSiteRoutes);
//const PORT = process.env.PORT || 3001;
db.sequelize.sync().then(()=>{
app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
});





