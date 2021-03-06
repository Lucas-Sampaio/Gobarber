import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'validation fails' });
      }

      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ erro: 'User not found' });
      }

      if (!(await user.checkPassword(password))) {
        return res.status(401).json({ error: 'Password does not match' });
      }

      const { id, name } = user;
      const userResponse = { id, name, email };
      const token = jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      });
      const resposta = { userResponse, token };
      return res.json(resposta);
    } catch (error) {
      return res.json(error);
    }
  }
}

export default new SessionController();
