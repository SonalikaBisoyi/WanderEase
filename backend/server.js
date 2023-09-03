
const express = require('express');
const cors = require('cors');
const reviewsRoutes = require('./routes/reviews'); // Import your reviews routes
const authRoutes = require('./routes/auth.js');
const stateCityRoutes = require('./routes/stateCityRoutes');
const siteRoutes = require('./routes/siteRoutes');
//const agentRoutes = require('./routes/agentRoutes');
//const siteAgentRoutes = require('./routes/siteAgentRoutes');
const popularSiteRoutes = require('./routes/popularSiteRoutes');
const singleSiteRoutes = require('./routes/singleSiteRoutes');
const adminRoutes = require('./routes/adminRoutes');
const addSite=require('./routes/AddsiteRoutes');
const NewAgent=require('./routes/newAgentRoutes');
const region=require('./routes/regionRoutes');
 // Import your reviews routes
const { sequelize } = require('./db'); // Import sequelize instance
const db=require('./models')
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// Synchronize models with the database
(async () => {
  await sequelize.sync();
  console.log('Models synchronized with the database.');
})();

// Use your reviews routes under the '/api' endpoint
app.use('/api', authRoutes);
app.use('/api', reviewsRoutes);
app.use('/api', stateCityRoutes);
app.use('/api/sites', siteRoutes);
app.use('/api/admin',adminRoutes);
//app.use('/agents', agentRoutes);
//app.use('/site-agents', siteAgentRoutes);
app.use('/api', popularSiteRoutes);
app.use('/api', popularSiteRoutes, singleSiteRoutes);
app.use('/api',addSite);
app.use('/api',NewAgent);
app.use('/api',region);
//const PORT = process.env.PORT || 3001;
db.sequelize.sync().then(()=>{
app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
});





