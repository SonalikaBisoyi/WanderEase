const { sequelize } = require('../db');
const  PopularSite  = require('../models/popularSites')(sequelize); // Import the PopularSite model
const Site = require('../models/sites')(sequelize);
console.log('cont',Site)

exports.getAllPopularSites = async (req, res) => {
  try {
    const popularSites = await PopularSite.findAll();

    const detailedPopularSites = await Promise.all(
      popularSites.map(async (popularSite) => {
        const site = await Site.findByPk(popularSite.site_id, {
          attributes: ['name', 'image1'], 
        });
        return {
          popularSiteId: popularSite.id,
          siteName: site ? site.name : null,
          siteImages: {
            image1: site ? site.image1 : null,
          },
        };
      })
    );

    console.log(detailedPopularSites);
    res.status(200).json(detailedPopularSites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};