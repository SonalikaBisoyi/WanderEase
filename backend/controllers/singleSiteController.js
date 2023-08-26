const { sequelize } = require('../db');
const { Site, Agent, SiteAgent } = require('../models/siteAgent')(sequelize);

exports.getSingleSiteDetails = async (req, res) => {
  try {
    const siteId = req.params.siteId;
    const site = await Site.findOne({
      where: { site_id: siteId },
      include: [
        {
          model: Agent,
          through: SiteAgent,
          as: 'Agents',
          attributes: ['id', 'contact', 'email', 'experience', 'languages'],
        },
      ],
    });
    if (!site) {
      return res.status(404).json({ message: 'Site not found' });
    }
    res.status(200).json(site);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};
