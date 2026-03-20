import asyncHandler from 'express-async-handler';
import Message from '../models/Message.js';

// @desc    Send a message
// @route   POST /api/messages
// @access  Public
const createMessage = asyncHandler(async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        res.status(400);
        throw new Error('Please fill all required fields');
    }

    const newMessage = await Message.create({
        name,
        email,
        subject,
        message,
    });

    // Optionally notify admin via emailJS or nodemailer here
    // ... logic for email notification
    
    res.status(201).json(newMessage);
});

// @desc    Get all messages
// @route   GET /api/messages
// @access  Private/Admin
const getMessages = asyncHandler(async (req, res) => {
    const messages = await Message.find({}).sort({ createdAt: -1 });
    res.json(messages);
});

// @desc    Mark message as read
// @route   PUT /api/messages/:id/read
// @access  Private/Admin
const markMessageAsRead = asyncHandler(async (req, res) => {
    const message = await Message.findById(req.params.id);
    if(message) {
        message.read = true;
        await message.save();
        res.json({message: 'Message marked as read'});
    } else {
        res.status(404);
        throw new Error('Message not found');
    }
});


export { createMessage, getMessages, markMessageAsRead };
