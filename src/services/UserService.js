const Subscription = require('../models/Subscription');
const User = require('../models/User');
const pool = require('../database');

class UserService {
  createAccount() {
    return new Promise((resolve, reject) => {
      pool.query('INSERT INTO users VALUES ()')
        .then(resolve)
        .catch(reject);
    });
  }

  deleteAccount(uid) {
    return new Promise((resolve, reject) => {
      pool.query('UPDATE users SET status = 0, deletedAt = NOW() WHERE uid = ?', [uid])
        .then(resolve)
        .catch(reject);
    });
  }

  getAccount(uid) {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM users WHERE uid = ?', [uid])
        .then((rows) => {
          const [row] = rows;
          resolve(new User.Builder()
            .setId(row.id)
            .setUid(row.uid)
            .setEmail(row.email)
            .setName(row.name)
            .setStatus(row.status)
            .setDeviceId(row.device_id)
            .setCreatedAt(row.created_at)
            .setUpdatedAt(row.updated_at)
            .setDeletedAt(row.deleted_at)
            .setLoginAt(row.login_at)
            .build());
        })
        .catch(reject);
    });
  }

  getSubscription(uid) {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM subscriptions WHERE user_id = (SELECT user_id FROM users WHERE uid = ?)', [uid])
        .then((rows) => {
          const [row] = rows;
          resolve(new Subscription.Builder()
            .setId(row.id)
            .setPlanId(row.plan_id)
            .setUserId(row.user_id)
            .setValid(row.valid)
            .setStartedAt(row.started_at)
            .setEndedAt(row.ended_at)
            .setCanceledAt(row.canceled_at)
            .build());
        })
        .catch(reject);
    });
  }

  login() {

  }

  subscribe(uid, planId) {
    return new Promise((resolve, reject) => {
      pool.query('INSERT INTO subscriptions (plan_id, user_id, valid, started_at, ended_at) VALUES (?, SELECT user_id FROM users WHERE uid = ?, 1, NOW(), DATE_ADD(NOW(), INTERVAL (SELECT duration FROM plans WHERE id = ?) DAY))', [planId, uid, planId])
        .then(resolve)
        .catch(reject);
    });
  }

  unsubscribe(uid) {
    return new Promise((resolve, reject) => {
      pool.query('UPDATE subscriptions SET valid = 0, canceled_at = NOW() WHERE user_id = (SELECT user_id FROM users WHERE uid = ?) AND valid = 1', [uid])
        .then(resolve)
        .catch(reject);
    });
  }

  updateInformation(uid, information) {
    return new Promise((resolve, reject) => {
      const { email, name, deviceId } = information;
      pool.query('UPDATE users SET email = IFNULL(?, email), name = IFNULL(?, name), device_id = IFNULL(?, device_id), updated_at = NOW() WHERE uid = ?', [email, name, deviceId, uid])
        .then(resolve)
        .catch(reject);
    });
  }
}

module.exports = UserService;
