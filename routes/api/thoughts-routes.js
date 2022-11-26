const router = require('express').Router();
//api/thoughts
    // GET to get all thoughts
router.get('/')
    // GET to get a single thought by its _id
router.get('/')
    // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
router.post('/')
        // example data {"thoughtText": "Here's a cool thought...","username": "lernantino","userId": "5edff358a0fcb779aa7b118b"}
    // PUT to update a thought by its _id
router.put('/')
    // DELETE to remove a thought by its _id
router.delete('/')
//api/thoughts/:thoughtId/reactions
    // POST to create a reaction stored in a single thought's reactions array field
router.post('/')
    // DELETE to pull and remove a reaction by the reaction's reactionId value
router.delete('/')
module.exports = router;