const express = require('express');
const { createProduct, getAllProducts, getProductsOnsubcategoryId, getaProduct, updateProduct, deleteProduct, getProductOnvendorId, getAllSoldProducts, getProductOnvendorIdMiddleware, getSoldProductOnvendorId } = require('../controllers/ProductController');
const upload = require('../middlewares/multer');
const mongoose = require('mongoose');
const authMiddleware = require('../middlewares/authMiddleware');
const { createOrder, getOrderByUId, getOrderByVId, getOrderPending, getOrderDeatils, updateStatus, cancelOrder, getOrderCancel, getOrderDeliver, getAllOrders, revenueCalculation, getOrderDeliverMiddleware, getOrderPendingMiddleware, getPendingOrderByUId, getCancelledOrderByUId, getDeliveredOrderByUId, revenueCalculationParams, revenueCalculationAndTransfer } = require('../controllers/orderController');
const router = express.Router();

// const Grid = require('gridfs-stream');
// require('dotenv').config(); 

// const mongoURI = process.env.MONGO_URL;
// const conn = mongoose.createConnection(mongoURI);
// let gfs;
// conn.once('open', () => {
//     gfs= Grid(conn.db, mongoose.mongo);
//     gfs.collection('uploads');
// });
 
router.post('/create-product',authMiddleware,upload.array('images', 5), createProduct);
router.get('/getAll-products', getAllProducts)
//finding product based on product id
router.get('/get-product/:id', getaProduct)
router.get('/getAllSoldProducts', getAllSoldProducts)
//finding product based on subcategory id
router.get('/getProduct/:id', getProductsOnsubcategoryId)
router.get('/getproductvendor/:id', getProductOnvendorId)
router.get('/get-product-vendor', authMiddleware, getProductOnvendorIdMiddleware)
router.get('/get-soldProduct-vendor', authMiddleware, getSoldProductOnvendorId)
router.put('/update-product/:id', upload.array('images', 5),updateProduct)
router.delete('/delete-product/:id', deleteProduct)

//order apis
router.post('/create-order', authMiddleware, createOrder)
router.get('/get-user-order/:id', getOrderByUId)
router.get('/get-pending-order-user/:id', getPendingOrderByUId)
router.get('/get-cancelled-order-user/:id', getCancelledOrderByUId)
router.get('/get-delivered-order-user/:id', getDeliveredOrderByUId)

router.get('/get-vendor-order', authMiddleware, getOrderByVId)
router.get('/get-all-orders', getAllOrders)
router.get('/revenue-calculation', authMiddleware, revenueCalculation) 
router.get('/revenue/:id', revenueCalculationParams)
router.post('/revenue-calculation-and-transfer/:id', revenueCalculationAndTransfer)
router.get('/order-pending', getOrderPending)
router.get('/order-cancel', getOrderCancel)
router.get('/order-deliver', getOrderDeliver)
router.get('/get-complete-order', authMiddleware, getOrderDeliverMiddleware)
router.get('/get-pending-order', authMiddleware, getOrderPendingMiddleware)
router.get('/get-orderDetails/:id', getOrderDeatils)
router.put('/update-status/:id', updateStatus)
router.put('/cancel-order/:id', cancelOrder)
module.exports = router;