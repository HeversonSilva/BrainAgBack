import User from '../models/User';

class FarmController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const farms = await User.findAll({
      limit: 15,
      offset: (page - 1) * 15,
      attributes: [
        'id',
        'name',
        'cpf',
        'farm_name',
        'city',
        'state',
        'farm_area',
        'plantation',
      ],
    });

    return res.json(farms);
  }
}

export default new FarmController();
