const {getSshVolumeStats} = require('../ssh/getSizeDatas')


 const getVolumeStatsFromSsh =  async (req, res) => {
    const stats = await getSshVolumeStats(req.body.volume , req.body.username);
    res.send(stats);
};


module.exports = getVolumeStatsFromSsh;
