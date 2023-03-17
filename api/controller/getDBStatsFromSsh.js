const {getSshDBStats} = require('../ssh/getSizeDatas')


 const getDBStatsFromSsh =  async (req, res) => {
     try {
         const stats = await getSshDBStats(req.body.name);
         res.status(200).json(stats);
     } catch (error) {
         console.error(error);
         res.status(500).json('Internal server error');
     }
};


module.exports = getDBStatsFromSsh;
