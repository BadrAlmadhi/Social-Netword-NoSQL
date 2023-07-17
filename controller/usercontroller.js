const { User } = require('../models');

const UserController = {
    // Get all users
    getAllUsers: async (req, res) => {
        try {
            const userData = await User.find({});
            res.json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Get one user
    getOneUser: async (req, res) => {
        try {
            const userData = await User.findById(req.params.userId);
            res.json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Create a user
    createUser: async (req, res) => {
        try {
            const userData = await User.create(req.body);
            res.json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Delete a user
    deleteUser: async (req, res) => {
        try {
            const userData = await User.findOneAndDelete(req.params.id);
            if (!userData) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json({ message: 'User deleted successfully' });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Add a friend
    addFriend: async (req, res) => {
        try {
            const userData = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.body.friendId || req.params.friendId } },
                { new: true }
            );
            if (!userData) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Remove a friend
    removeFriend: async (req, res) => {
        try {
            const userData = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );
            if (!userData) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Update a user
    updateUser: async (req, res) => {
        try {
            const userData = await User.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true }
            );
            if (!userData) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = UserController;
