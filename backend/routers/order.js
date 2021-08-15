const {CreateOrder, GetSingleOrder, MyOrder, AllOrder} = require('../Controllers/orderController')
const router = require('express').Router();
const {IsAuthenticateUser, IsAuthorizeRole} = require('../MiddleWares/ProtectAuth')

router.route('/order/new').post( IsAuthenticateUser,CreateOrder)
router.route('/order/:id').get( IsAuthenticateUser, GetSingleOrder)
router.route('/myorder').get(IsAuthenticateUser, MyOrder)
router.route('/admin/orders').get(IsAuthenticateUser, IsAuthorizeRole('admin'),AllOrder)
module.exports = router