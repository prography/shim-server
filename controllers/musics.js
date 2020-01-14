const BadRequestError = require('../errors/BadRequestError');
const NotFoundError = require('../errors/NotFoundError');
const service = require('../services/musics');
const { isWholeNumber } = require('../utils/types');

const getMusic = async (req, res) => {
  const { id } = req.params;
  if (isWholeNumber(Number(id))) {
    const music = await service.getMusic(Number(id));
    if (music) {
      res.json({
        status: 200,
        music: music.toJSON(),
      });
    } else {
      throw new NotFoundError('The music with the given id does not exist');
    }
  } else {
    throw new BadRequestError('The given id is invalid');
  }
};

const getMusics = async (_, res) => {
  const musics = await service.getMusics();
  res.json({
    status: 200,
    musics: musics.map((music) => music.toJSON()),
  });
};

module.exports = {
  getMusic,
  getMusics,
};
