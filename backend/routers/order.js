const {CreateOrder, GetSingleOrder, MyOrder, AllOrder, UpdateOrderStatus, DeleteOrder} = require('../Controllers/orderController')
const router = require('express').Router();
const {IsAuthenticateUser, IsAuthorizeRole} = require('../MiddleWares/ProtectAuth')

router.route('/order/new').post( IsAuthenticateUser,CreateOrder)
router.route('/order/:id').get( IsAuthenticateUser, GetSingleOrder)
router.route('/myorder').get(IsAuthenticateUser, MyOrder)
router.route('/admin/orders').get(IsAuthenticateUser, IsAuthorizeRole('admin'),AllOrder)
router.route('/admin/updateorderstatus/:id').put(IsAuthenticateUser, IsAuthorizeRole('admin'), UpdateOrderStatus)
router.route('/admin/deleteOrder/:id').delete(IsAuthenticateUser, IsAuthorizeRole('admin'), DeleteOrder)

module.exports = router