const {getSshDBStats} = require('../ssh/getSizeDatas')


 const getDBStatsFromSsh =  async (req, res) => {
     try {
         const stats = await getSshDBStats(req.body.name);
         const regex = /\b(db|collections|objects|avgObjSize|dataSize|storageSize|numExtents|indexes|indexSize|ok)\b/g;
         const result = stats.replace(regex, '');
         res.status(200).json(result);
     } catch (error) {
         console.error(error);
         res.status(500).json('Internal server error');
     }
};


module.exports = getDBStatsFromSsh;
