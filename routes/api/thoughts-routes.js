const router = require('express').Router();
//api/thoughts
    // GET to get all thoughts
router.get('/', (req, res) => {
    res.send('<h1>All Thoughts</h1>')
} )
    // GET to get a single thought by its _id
router.get('/:thoughId', (req, res) => {
    res.send('<h1>Single Thought/h1>')
} )
    // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
router.post('/:thoughId', (req, res) => {
    res.send('<h1>New Thought</h1>')
} )
        // example data {"thoughtText": "Here's a cool thought...","username": "lernantino","userId": "5edff358a0fcb779aa7b118b"}
    // PUT to update a thought by its _id
router.put('/:thoughId', (req, res) => {
    res.send('<h1>Update Thought</h1>')
} )
    // DELETE to remove a thought by its _id
router.delete('/:thoughId', (req, res) => {
    res.send('<h1>Delete Thought</h1>')
} )
//api/thoughts/:thoughtId/reactions
    // POST to create a reaction stored in a single thought's reactions array field
router.post('/:thoughtId/reactions', (req, res) => {
    res.send('<h1>Thought Reactions</h1>')
} )
    // DELETE to pull and remove a reaction by the reaction's reactionId value
router.delete('/:thoughtId/reactions', (req, res) => {
    res.send('<h1>Remove Reaction</h1>')
} )
module.exports = router;