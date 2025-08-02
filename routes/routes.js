import express from 'express'
const router =express.Router();

//import * as taskcontrollers from '../app/contollers/taskcontrollers.js'
import * as usercontrollers from '../app/contollers/user controllers.js'
import * as Brandcontroller from '../app/contollers/Brandcontroller.js'
import * as CartListcontroller from '../app/contollers/Cartlistcontroller.js'
import * as Categorycontroller from '../app/contollers/Categorycontroller.js'
import * as Invoicecontroller from '../app/contollers/Invoicecontroller.js'
import * as Productcontroller from '../app/contollers/Productcontroller.js'
import * as WishListcontroller from '../app/contollers/Wishlistcontroller.js'
import authmiddleware from '../app/middleware/authmiddleware.js';


router.post('/Login',usercontrollers.login)
router.post('/VerifyLogin',usercontrollers.Verifylogin)
router.post('/CreateUserProfile',authmiddleware ,usercontrollers.CreateUserProfile)
router.post('/UpdateUserProfile',usercontrollers.UpdateUserProfile)
router.get('/ReadUserProfile',authmiddleware ,usercontrollers.ReadUserProfile)
router.get('/userlogout',usercontrollers.Logout)


router.get('/Brandlist',Brandcontroller.BrandList)

router.get('/CategoryList',Categorycontroller.CategoryList)

router.post('/SaveCartList',authmiddleware,CartListcontroller.SaveCartList)
router.post('/UpdateCartList/:cartID',authmiddleware,CartListcontroller.UpdateCartList)
router.post('/RemoveCartList',authmiddleware,CartListcontroller.RemoveCartList)
router.get('/CartList',authmiddleware,CartListcontroller.CartList)

router.post('/CreateWish',authmiddleware,WishListcontroller.CreateWish)
router.get('/ReadWish',authmiddleware,WishListcontroller.ReadWish)
router.get('/RemoveWish',authmiddleware ,WishListcontroller.RemoveWish)

router.get('/ProductListbySlider',Productcontroller.ProductListbySlider)
router.get('/ProductListbyCategory/:CategoryID',Productcontroller.ProductListbyCategory)
router.get('/ProductListbyRemark/:Remark',Productcontroller.ProductListbyRemark)
router.get('/ProductListbyBrand/:BrandID',Productcontroller.ProductListbyBrand)
router.get('/ProductListbyKeyword/:keyword',Productcontroller.ProductListbyKeyword)
router.get('/ProductDetailsID/:ProductID',Productcontroller.ProductDetailsID)
//router.get('/CreateProductReview',Productcontroller.CreateProductReview)
router.get('/ProductReviewListbyID/:ProductID',Productcontroller.ProductReviewListbyID)


//router.post('/CreateInvoice',Invoicecontroller.CreateInvoice)
//router.get('/ReadInvoiceList',Invoicecontroller.ReadInvoiceList)
//router.get('/ReadInvoiceDetails',Invoicecontroller.ReadInvoiceDetails)
















export default router