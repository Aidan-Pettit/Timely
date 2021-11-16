import express from 'express'
import Stripe from 'stripe'

const router = express.Router()

const publishableKey = 'pk_live_51IZGhdEzfDUsrge8ZU59NXVLdHG09dPcEFaN9hk7bInoyuTBYs6ZUEg7LCKOT4fUUErhBkQqy4BqeMNbCAifHokp00BunhKjC9'
const secretKey = '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'

const stripe = new Stripe(secretKey, {apiVersion: '2020-08-27'})

router.post('/', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: [
            {
                price_data: {
                    currency: 'cad',
                    product_data: {
                        name: 'Pencil'
                    },
                    unit_amount: 99,
                }, 
                quantity: 1
            }
        ],
        success_url: 'https://localhost:1111',
        cancel_url: 'https://localhost:1111'
    })
    
    console.log(session)
    res.send(session)
})

router.post('/test', async (req, res) => {
    // const paymentIntent = await stripe.paymentIntents.create({
    //     amount: 99,
    //     currency: 'cad'  
    // })

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: [
            {
                price_data: {
                    currency: 'cad',
                    product_data: {
                        name: 'Pencil'
                    },
                    unit_amount: 99,
                }, 
                quantity: 1
            }
        ],
        success_url: 'https://localhost:1111',
        cancel_url: 'https://localhost:1111'
    })
    
    console.log(session)
    res.send(session)
})

export default router