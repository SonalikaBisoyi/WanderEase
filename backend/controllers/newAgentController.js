const { sequelize } = require('../db');
const  NewAgent  = require('../models/newAgent')(sequelize); // Import your NewAgent model

class NewAgentController {
    // Controller to add a new agent
    static async addAgent(req, res) {
      const { name, siteName, contact, email, experience, languages } = req.body;
  
      try {
        // Create the new agent
        const newAgent = await NewAgent.create({
          name,
          siteName,
          contact,
          email,
          experience,
          languages,
        });
  
        res.status(201).json(newAgent);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
      }
    }
  
    // Other controller functions for CRUD operations can be added here
  }
  
  module.exports = NewAgentController;