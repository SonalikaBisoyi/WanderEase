// const { sequelize } = require('../db');
// const Sites = require('../models/sites')(sequelize); // Import your Sites model
// const Agents = require('../models/agents')(sequelize); // Import your Agents model
// const StatesCities = require('../models/statesCities')(sequelize); // Import your StatesCities model

// // Controller to get sites and agents by region and city_id
// exports.getSitesAndAgentsByRegion = async (req, res) => {
//   const { region, cityId } = req.params;

//   try {
//     // Fetch sites based on the city_id and region
//     const sites = await Sites.findAll({
//       where: { city_id: cityId },
//     });

//     // Fetch agents based on the city_id and region
//     const agents = await Agents.findAll({
//       where: { site_id: cityId }, // Assuming site_id represents the city_id here
//     });

//     res.status(200).json({ sites, agents });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'An error occurred' });
//   }
// };
const { sequelize } = require('../db');
const Sites = require('../models/sites')(sequelize);
const Agents = require('../models/agents')(sequelize);
const StatesCities = require('../models/states_cities')(sequelize);

class RegionController {
    static async getSitesAndAgentsByRegion(req, res) {
        const { region, city } = req.params; // Change cityId to city
      
        try {
          // Find the city_id based on the selected city name
          const cityData = await StatesCities.findOne({
            where: { region, city },
          });
      
          if (!cityData) {
            return res.status(404).json({ message: 'City not found' });
          }
      
          // Now that we have the city_id, we can fetch sites and agents
          const cityId = cityData.city_id;
      
          const sites = await Sites.findAll({
            where: { city_id: cityId },
          });
      
          const agents = await Agents.findAll({
            where: { site_id: cityId },
          });
      
          res.status(200).json({ sites, agents });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'An error occurred' });
        }
      }
  static async getCitiesByRegion(req, res) {
    const { region } = req.params;

    try {
      const cities = await StatesCities.findAll({
        where: { region },
        attributes: [[sequelize.fn('DISTINCT', sequelize.col('city')), 'city']],
      });

      res.status(200).json(cities);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    }
  }
}

module.exports = RegionController;

