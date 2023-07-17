const { User } = require('../models');

const UserController = {
    // this gets all the users
    getAllUsers(req, res) {
        User.find({})
            .then((userData) => res.json(userData))
            .catch((err) = res.status(500).json(err));
    },

    // get one user 

    getOneUser(req, res) {
        User.findById(req.params.userId)
            .then((userData) => res.json(userData))
            .catch(err => res.status(500).json(err));
    },

    //create a user

    createUser(req, res) {
        User.create(req.body)
            .then((userData) => res.json(userData))
            .catch((err) => res.status(500).json(err));
    },

    // delete a user

    deleteUser(req, res) {
        User.findOneAndDelete(req.params.id)
            // add if statement 
            .then(userData => {
                if (!userData) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.json({ message: 'User deleted successfully' });
            })
            .catch((err) => res.status(500).json(err));

    },

    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.body.friendId || req.params.friendId } },
            { new: true }
        )
            .then(userData => {
                if (!userData) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.json(userData);
            })
            .catch((err) => res.status(500).json(err));
    },

    removeFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
            .then(userData =>
                !userData
                    ? res
                        .status(404)
                        .json({ message: 'User not found' })
                    : res.json(userData)
            )
            .catch((err) => res.status(500).json(err));
    },


    // update a user
    updateUser(req, res) {
        User.findOneAndUpdate(req.params.id, req.body, { new: true })
            .then((userData) => {
                if (!userData) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.json(userData);
            })
            .catch((err) => res.status(500).json(err));
    },


};

module.exports = UserController;
