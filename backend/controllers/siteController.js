const { sequelize } = require('../db');
const Site = require('../models/sites')(sequelize); 

class SiteController{
  static async getSitesByTourismType(req, res) {
    try {
      const tourismType = req.params.tourismType;
      const sites = await Site.findAll({
        where: { tourism_type: tourismType },
      });

      res.status(200).json(sites);
    } catch (error) {
      console.error('Error fetching sites:', error);
      res.status(500).json({ error: 'An error occurred while fetching sites.' });
    }
  }
      static async getSitesByCityId(req, res) {
        try {
          const cityId = req.params.cityId;
          const sites = await Site.findAll({
            where: { city_id: cityId },
          });
    
          res.status(200).json(sites);
        } catch (error) {
          console.error('Error fetching sites:', error);
          res.status(500).json({ error: 'An error occurred while fetching sites.' });
        }
      }
    }
    
    module.exports = SiteController;






