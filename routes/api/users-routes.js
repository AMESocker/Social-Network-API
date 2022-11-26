const router = require('express').Router();
//api/users
    // GET all users
router.get('/', (req, res) => {
    res.send('<h1>All Users</h1>')
} )
    // GET a single user by its _id and populated thought and friend data
router.get('/:userId', (req, res) => {
    res.send('Single User')
})
    // POST a new user:
router.post('/:userId', (req, res) => {
    res.send('New User')
})
        // example data {"username": "lernantino","email": "lernantino@gmail.com"}
    // PUT to update a user by its _id
router.put('/:userId', (req, res) => {
    res.send('Update User')
})
    // DELETE to remove user by its _id
router.delete('/:userId', (req, res) => {
    res.send('Delete User')
})

//api/users/:userId/friends/:friendId
    // POST to add a new friend to a user's friend list
router.post('/:userId/friends/:friendId', (req, res) => {
    res.send('New Friend')
})
    // DELETE to remove a friend from a user's friend list
router.delete('/:userId/friends/:friendId', (req, res) => {
    res.send('Remove Friend')
})
module.exports = router;