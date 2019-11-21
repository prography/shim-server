const service = require('../services/users');

const getMusic = async (req, res) => {
  const { id } = req.params;
  const music = await service.getMusic(id);
  res.json(music.toJSON());
};

const getMusics = async (_, res) => {
  const musics = await service.getMusics();
  res.json(musics.toJSON());
};

module.exports = {
  getMusic,
  getMusics,
};
