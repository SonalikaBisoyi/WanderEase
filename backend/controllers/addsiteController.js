const { sequelize } = require('../db');
const SiteRequests = require('../models/siteRequests')(sequelize);

class AddSiteController {
  static async addSite(req, res) {
    console.log(':::',req.body);
    const { siteName, stateName, cityName, imageUrl } = req.body;
    console.log(siteName);
    console.log(stateName);

    try {
      // Create the new site
      const newSite = await SiteRequests.create({
        siteName: siteName,
        cityName: cityName,
        stateName: stateName,
        imageUrl: imageUrl,
        // Add other site properties here
      });

      res.status(201).json(newSite);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  }
  static async removeApprovedSite(req, res) {
    const requestId = req.params.requestId;

    try {
      // Find the request by ID and remove it
      const removedRequest = await SiteRequests.destroy({
        where: {
          siteRequestId: requestId,
        },
      });

      if (removedRequest) {
        res.status(200).json({ message: 'Request removed successfully' });
      } else {
        res.status(404).json({ message: 'Request not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  }
  static async getAllSites(req, res) {
    try {
      // Retrieve all site details from the SiteRequests table
      const allSites = await SiteRequests.findAll();

      if (allSites.length > 0) {
        //console.log(allSites);
        res.status(200).json(allSites);
      } else {
        res.status(404).json({ message: 'No site details found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  }
}

module.exports = AddSiteController;
