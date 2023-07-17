// Import the necessary dependencies and controllers
const router = require('express').Router();
const {
    getAllUsers,
    getOneUser,
    createUser,
    deleteUser,
    addFriend,
    removeFriend,
    updateUser,
    //   checkFriendRemoved,
} = require('../../controller/usercontroller');

// GET and POST all users
router.route('/').get(getAllUsers).post(createUser);

// GET user id, PUT update user id and DELETE user by id
router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

// POST add friend and DELETE remove Friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);
// Export the router
module.exports = router;