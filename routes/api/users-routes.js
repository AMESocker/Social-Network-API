const router = require('express').Router();
//api/users
    // GET all users
router.get('/')
    // GET a single user by its _id and populated thought and friend data
router.get('/:userId')
    // POST a new user:
router.post('')
        // example data {"username": "lernantino","email": "lernantino@gmail.com"}
    // PUT to update a user by its _id
router.put('/')
    // DELETE to remove user by its _id
router.delete('/')
//api/users/:userId/friends/:friendId
    // POST to add a new friend to a user's friend list
router.post('/')
    // DELETE to remove a friend from a user's friend list
router.delete('/')
module.exports = router;