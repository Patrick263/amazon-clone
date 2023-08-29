const functions = require("firebase-functions");
const express = require("express");
const cors =require("cors");
const stripe = require("stripe")('sk_test_51JTUs7Iwvl20JvfUc4d35zDdxvr55UpbagaSCSMUkVGexNILB3cLsrOMgPqjwkQS7KTujxcT145OHyBESeWeklCK00Vd2aZ5KL')

const app = express ();

app.use(cors({origin: true}));
app.use(express.json());


app.get('/',(request, response) => response.status(200).send
('hello world'))

app.post('/payments/create',async (request, response) =>{
    const total = request.query.total;

    console.log('Payment REQUEST Received BOOM FOR THIS AMOUNT >>>',total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app)
