import * as Yup from 'yup';
import validarCpf from 'validar-cpf';

import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cpf: Yup.string()
        .required()
        .min(11),
      farm_name: Yup.string().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      farm_area: Yup.string().required(),
      plantation: Yup.string()
        .required()
        .min(3),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({ where: { cpf: req.body.cpf } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const validCpf = validarCpf(req.body.cpf);

    if (!validCpf) {
      return res.status(400).json({ error: 'CPF invalid' });
    }

    const {
      id,
      name,
      cpf,
      farm_name,
      city,
      state,
      farm_area,
      plantation,
    } = await User.create(req.body);

    return res.json({
      id,
      name,
      cpf,
      farm_name,
      city,
      state,
      farm_area,
      plantation,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      cpf: Yup.string().min(11),
      farm_name: Yup.string(),
      city: Yup.string(),
      state: Yup.string(),
      farm_area: Yup.string(),
      plantation: Yup.string().min(3),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const user = await User.findByPk(req.userId);

    // if (cpf !== user.cpf) {
    //   const userExists = await User.findOne({ where: { cpf } });

    //   if (userExists) {
    //     return res.status(400).json({ error: 'User already exists.' });
    //   }
    // }

    const {
      id,
      name,
      cpf,
      farm_name,
      city,
      state,
      farm_area,
      plantation,
    } = await user.update(req.body);

    return res.json({
      id,
      name,
      cpf,
      farm_name,
      city,
      state,
      farm_area,
      plantation,
    });
  }

  async index(req, res) {
    const {
      id,
      name,
      cpf,
      farm_name,
      city,
      state,
      farm_area,
      plantation,
    } = await User.findOne({ id: req.body.id });

    return res.json({
      id,
      name,
      cpf,
      farm_name,
      city,
      state,
      farm_area,
      plantation,
    });
  }
}

export default new UserController();
