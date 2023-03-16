const {getSshDBStats} = require('../ssh/getSizeDatas')


 const getDBStatsFromSsh =  async (req, res) => {
    const stats = await getSshDBStats(req.body.name);
    res.json({stats});
};


module.exports = getDBStatsFromSsh;
