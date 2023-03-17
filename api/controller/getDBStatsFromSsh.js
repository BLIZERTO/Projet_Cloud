const {getSshDBStats} = require('../ssh/getSizeDatas')


 const getDBStatsFromSsh =  async (req, res) => {
     try {
         const stats = await getSshDBStats(req.body.name);
         res.status(200).send(stats);
     } catch (error) {
         console.error(error);
         res.status(500).send('Internal server error');
     }
};


module.exports = getDBStatsFromSsh;
