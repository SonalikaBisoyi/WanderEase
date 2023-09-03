const { sequelize } = require('../db');
const Site = require('../models/sites')(sequelize); // Import your Site model
//const StatesCities = require('../models/states_cities')(sequelize); // Import your StatesCities model

// Get sites by city ID
class SiteController{
  static async getSitesByTourismType(req, res) {
    try {
      const tourismType = req.params.tourismType;

      // Fetch sites for the specified tourism type
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
    
          // Fetch sites for the specified city ID
          const sites = await Site.findAll({
            where: { city_id: cityId },
          });
    
          res.status(200).json(sites);
        } catch (error) {
          console.error('Error fetching sites:', error);
          res.status(500).json({ error: 'An error occurred while fetching sites.' });
        }
      }
      static async updateSiteDetails(req, res) {
        try {
          const siteId = req.params.siteId; // Get the site ID from the request parameters
          const updatedSiteData = req.body; // Get the updated site data from the request body
    
          // Find the site by ID
          const site = await Site.findByPk(siteId);
    
          if (!site) {
            return res.status(404).json({ message: 'Site not found' });
          }
    
          // Update the site's details
          await site.update(updatedSiteData);
    
          res.status(200).json({ message: 'Site details updated successfully' });
        } catch (error) {
          console.error('Error updating site details:', error);
          res.status(500).json({ error: 'An error occurred while updating site details.' });
        }
      }
    }
    
    module.exports = SiteController;






