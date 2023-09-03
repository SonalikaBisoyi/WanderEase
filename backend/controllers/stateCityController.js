// const { sequelize } = require('../db');
// const  StatesCities  = require('../models/states_cities.js')(sequelize);
// console.log('state',StatesCities);
// // Get state names based on region
// exports.getStatesByRegions = async (req, res) => {
//   try {
//     const regions = ['north', 'south', 'east', 'west']; // Define your regions
//     const data = [];

//     for (const region of regions) {
//       const states = await StatesCities.findAll({
//         where: { region },
//         attributes: ['id', 'state'],
//       });

//       const uniqueStates = states.filter(
//         (state, index, self) =>
//           index === self.findIndex((s) => s.state === state.state)
//       );

//       data.push({ region, states: uniqueStates ,city});
//     }


//     res.status(200).json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'An error occurred' });
//   }
// };
const { sequelize } = require('../db');
const StatesCities = require('../models/states_cities.js')(sequelize);

// exports.getStatesByRegions = async (req, res) => {
//   try {
//     const regions = ['north', 'south', 'east', 'west'];
//     const data = [];

//     for (const region of regions) {
//       const states = await StatesCities.findAll({
//         where: { region },
//         attributes: ['city_id', 'state', 'city'],
//       });

//       const statesGroupedByRegion = {};
//       states.forEach(state => {
//         if (!statesGroupedByRegion[state.state]) {
//           statesGroupedByRegion[state.state] = [];
//         }
//         statesGroupedByRegion[state.state].push(state.city);
//       });
//       console.log(data);
//       data.push({ region, states: statesGroupedByRegion });
//     }

//     res.status(200).json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'An error occurred' });
//   }
// };
// exports.getStatesByRegions = async (req, res) => {
//   try {
//     const regions = ['north', 'south', 'east', 'west'];
//     const data = [];

//     for (const region of regions) {
//       const states = await StatesCities.findAll({
//         where: { region },
//         attributes: ['city_id', 'state', 'city'],
//       });

//       const statesGroupedByRegion = {};
//       states.forEach(state => {
//         if (!statesGroupedByRegion[state.state]) {
//           statesGroupedByRegion[state.state] = [];
//         }
//         // Check if the city is not already in the array for the region
//         if (!statesGroupedByRegion[state.state].includes(state.city)) {
//           statesGroupedByRegion[state.state].push(state.city);
//           statesGroupedByRegion[state.state].push(state.city_id);
//         }
//       });
//       data.push({ region, states: statesGroupedByRegion });
//     }
//     console.log('SC',data);
//     res.status(200).json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'An error occurred' });
//   }
// };
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
      const cityIdMapping = {}; // Object to store city_id mapping

      states.forEach(state => {
        if (!statesGroupedByRegion[state.state]) {
          statesGroupedByRegion[state.state] = [];
        }

        // Check if the city is not already in the array for the region
        if (!statesGroupedByRegion[state.state].includes(state.city)) {
          statesGroupedByRegion[state.state].push(state.city);
          cityIdMapping[state.city] = state.city_id; // Store city_id mapping
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

