
const { sequelize } = require('../db');
const StatesCities = require('../models/states_cities.js')(sequelize);
exports.getStatesByRegions = async (req, res) => {
  try {
    const regions = ['north', 'south', 'east', 'west'];
    const data = [];

    for (const region of regions) {
      const states = await StatesCities.findAll({
        where: { region },
        attributes: ['city_id', 'state', 'city'],
      });

      const statesGroupedByRegion = {};
      const cityIdMapping = {}; 

      states.forEach(state => {
        if (!statesGroupedByRegion[state.state]) {
          statesGroupedByRegion[state.state] = [];
        }
        if (!statesGroupedByRegion[state.state].includes(state.city)) {
          statesGroupedByRegion[state.state].push(state.city);
          cityIdMapping[state.city] = state.city_id; 
        }
      });

      data.push({ region, states: statesGroupedByRegion, cityIdMapping });
    }

    console.log('SC', data);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

