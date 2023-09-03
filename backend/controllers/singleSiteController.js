// const { sequelize } = require('../db');
// const { Site, Agent, SiteAgent } = require('../models/siteAgent')(sequelize);

// exports.getSingleSiteDetails = async (req, res) => {
//   try {
//     console.log("In single site controller ")
//     const siteId = req.params.siteId;
//     const site = await Site.findOne({
//       where: { site_id: siteId },
//       include: [
//         {
//           model: Agent,
//           through: SiteAgent,
//           as: 'Agents',
//           attributes: ['id', 'contact', 'email', 'experience', 'languages'],
//         },
//       ],
//     });
//     if (!site) {
//       return res.status(404).json({ message: 'Site not found' });
//     }
//     console.log(site);
//     res.status(200).json(site);
    
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'An error occurred' });
//   }
// };
// const { sequelize } = require('../db');
// const Site = require('../models/sites')(sequelize);
// const Agent = require('../models/agents')(sequelize); // Import the Agent model

// exports.getSingleSiteDetails = async (req, res) => {
//   try {
//     console.log("In single site controller &&&&&******* ")
//     const siteId = req.params.siteId;
    
//     const site = await Site.findByPk(siteId);
//     if (!site) {
//       return res.status(404).json({ message: 'Site not found' });
//     }
    
//     const agents = await Agent.findAll({ // Fetch associated agents
//       where: { site_id: siteId },
//       attributes: ['id', 'contact', 'email', 'experience', 'languages'],
//     });
    
//     res.status(200).json({
//       siteId: site.id,
//       siteName: site.name,
//       siteImages: {
//         image1: site.image1,
//       },
//       agents: agents,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'An error occurred' });
//   }
// };
const { sequelize } = require('../db');
const Site = require('../models/sites')(sequelize);
const Agent = require('../models/agents')(sequelize); // Import the Agent model

exports.getSingleSiteDetails = async (req, res) => {
  try {
    console.log("In single site controller &&&&&******* ");
    const siteId = req.params.siteId;
    console.log("Site ID:", siteId);

    const site = await Site.findByPk(siteId);
    console.log("Site:", site);
    if (!site) {
      return res.status(404).json({ message: 'Site not found' });
    }

    const agents = await Agent.findAll({ // Fetch associated agents
      where: { site_id: siteId },
      attributes: ['id', 'contact', 'email', 'experience', 'languages'],
    });
    console.log("Agents:", agents);

    res.status(200).json({
      siteId: site.site_id,
      siteName: site.name,
      siteImages: {
        image1: site.image1,
        image2: site.image2,
        image3: site.image3
      },
      bv:site.best_visit,
      desc:site.description,
      reqq:site.requirements,
      food:site.food,
      tt:site.tourism_type,

      agents: agents,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};
