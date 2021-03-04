import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationController {
  async index(req, res) {
    try {
      const isProvider = await User.findOne({
        where: { id: req.userId, provider: true },
      });

      if (!isProvider) {
        res.status(401).json({ error: 'only provider can load notifications' });
      }

      const notifications = await Notification.find({ user: req.userId })
        .sort({ createdAt: 'desc' })
        .limit(20);

      return res.json(notifications);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async update(req, res) {
    try {
      const notification = await Notification.findByIdAndUpdate(
        req.params.id,
        { read: true },
        { new: true }
      );

      return res.json(notification);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default new NotificationController();
