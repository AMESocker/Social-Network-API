const router = require('express').Router();
const apiThoughtsRoutes = require('./api/thoughts-routes');
const apiUserRoutes = require('./api/users-routes');

router.use('/api/thoughts', apiThoughtsRoutes);
router.use('/api/users', apiUserRoutes);

router.use((req, res) => res.send(`Would it help if I got out and pushed? It might! `));

module.exports = router;