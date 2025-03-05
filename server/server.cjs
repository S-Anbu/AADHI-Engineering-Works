import express from 'express';
import Razorpay from 'razorpay';
import cors from 'cors';

import pkg from 'body-parser';
const { json } = pkg;



const bodyParser = require('body-parser');

// Initialize the app AFTER requiring express
const app = express();

// Middlewares
app.use(bodyParser.json()); // Parses incoming requests with JSON payloads
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)

// Create Razorpay instance
const razorpay = new Razorpay({
    key_id: 'rzp_test_',  // Your Razorpay key ID
    key_secret: 'Your Razorpay secret' // Your Razorpay secret
});

// API route to create an order
app.post('/create-order', async (req, res) => {
    const { amount, currency } = req.body;

    const options = {
        amount: amount * 100, // Amount in smallest unit (e.g., paise)
        currency: currency,
        receipt: `receipt_order_${Math.random().toString(36).substring(2)}`, // Unique receipt ID
    };

    try {
        const order = await razorpay.orders.create(options);
        res.json(order); // Send order data to frontend
    } catch (error) {
        res.status(500).send(error);
    }
});

// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
