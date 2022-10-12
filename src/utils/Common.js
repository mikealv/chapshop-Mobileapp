



export const APP_FONTS = {
  bold : 'Montserrat-Bold',
  semi_bold : 'Montserrat-SemiBold',
  medium : 'Montserrat-Medium',
  regular : 'Montserrat-Regular',
}

export const BUTTON ={
    
  width:"100%", height:50,
  backgroundColor:'#F43297',
  borderRadius:10,
  justifyContent:"center",
  alignItems:"center" 
}


export const APP_IMAGES = {
  // loginBackground: require('assets/images/login-bg.png'),
  loginBackground: require('../../assets/images/login-bg.png'),
  logo: require('../../assets/images/ChapShop.png'),
  arrowLeft: require('../../assets/images/arrow-left.png'),
  arrowDown: require('../../assets/images/arrow-down.png'),
  otpShape: require('../../assets/images/otp-shape.png'),
  cart: require('../../assets/images/cart.png'),
  bell: require('../../assets/images/bell.png'),
  search: require('../../assets/images/search.png'),
  tops: require('../../assets/images/image-one.png'),
  tshirts: require('../../assets/images/image-two.png'),
  girlsJacket: require('../../assets/images/image-three.png'),
  jacket: require('../../assets/images/image-four.png'),
  patternBackground: require('../../assets/images/pattern-bg.png'),
  share: require('../../assets/images/share.png'),
  productImage: require('../../assets/images/product-img.png'),
  commisionImage: require('../../assets/images/discount.png'),
  popVector: require('../../assets/images/popup-vector.png'),
  manGender: require('../../assets/images/man.png'),
  women: require('../../assets/images/woman.png'),
  profileImage: require('../../assets/images/profile-img.png'),
  help: require('../../assets/images/help.png'),
  settings: require('../../assets/images/settings.png'),
  payments: require('../../assets/images/my-payment.png'),
  bank: require('../../assets/images/my-bank.png'),
  legalandPolicy: require('../../assets/images/legal-and-policies.png'),
  rateChapShop: require('../../assets/images/rate-chapshop.png'),
  sharedProducts: require('../../assets/images/shared-product.png'),
  rightArrow: require('../../assets/images/right-arrow.png'),
  man: require('../../assets/images/men-inactive.png'),
  heart: require('../../assets/images/heart.png'),
  facebook: require('../../assets/images/fb.png'),
  instagram: require('../../assets/images/insta.png'),
  whatsapp: require('../../assets/images/whatsapp.png'),
  filter: require('../../assets/images/filter.png'),
  download: require('../../assets/images/download.png'),
  discountDollar: require('../../assets/images/discount.png'),
  info: require('../../assets/images/info.png'),
  camera: require('../../assets/images/camera.png'),
  gallery: require('../../assets/images/gallery.png'),
  cameraActive: require('../../assets/images/Camera-active.png'),
  closed: require('../../assets/images/close.png'),
  logout: require('../../assets/images/logout.png'),
  heart: require('../../assets/images/heart.png'),
  downloadDark: require('../../assets/images/download-black1.png'),
  arrowRight: require('../../assets/images/arrow-right.png'),
  arrowUp: require('../../assets/images/up-arrow.png'),
  plus: require('../../assets/images/plus.png'),
  minus: require('../../assets/images/minus.png'),
  imageArrowDown: require('../../assets/images/icon-arrowdown.png'),
  closedCircle: require('../../assets/images/close-circle.png'),
  heartActive: require('../../assets/images/heart-active.png'),
  cash: require('../../assets/images/cash.png'),
  callIcon: require('../../assets/images/call-icon.png'),
  blueTick: require('../../assets/images/blue-tick.png'),
  greenTick: require('../../assets/images/green-tick.png'),
  check: require('../../assets/images/check.png'),
  uncheck: require('../../assets/images/uncheck.png'),
  confirmOrderPage : require('../../assets/images/confirm-order-bg.png'),
  innerCircle: require('../../assets/images/inner-tick-cercle.png'),
  mdiTruckDelivery: require('../../assets/images/mdi-truck-delivery.png'),
  mapPin: require('../../assets/images/map-pin.png')

  

}

export const APP_GIF ={
  orderConfirmationGif: require('../../assets/gif/orderanimation.gif')
}

export const APP_COLOR ={
  label_color : '#070707',
  light_label_color : '#949494',
}

// const BASE_URL = 'http://65.1.62.58/api/v1/user/'
const BASE_URL = 'https://api-chapshop.appsmaventech.com/api/v1/user/'
// https://api-chapshop.appsmaventech.com/

export const APP_URLS = { 
  loginSignUp : BASE_URL+'signup-login',
  verifyOtp : BASE_URL+'otp-verify',
  mainCategories : BASE_URL+'get-categories',
  // subCategories : BASE_URL+'get-sub-category',
  productWithFilters: BASE_URL+'get-products-with-filter',
  productWithSorts: BASE_URL+'/get-products-with-sort',
  subCategories : BASE_URL+'home',
  getProduct: BASE_URL+'get-product',
  getProductDetail: BASE_URL+'product-details',
  editAccount: BASE_URL+'edit-account',
  wishList: BASE_URL+'get-products-to-wishlist',
  addTowishList:BASE_URL+'add-products-to-wishlist',
  removeFromWishlist:BASE_URL+'remove-products-to-wishlist',
  getFilters:BASE_URL+'get-filters',
  getTopFilters:BASE_URL+'get-top-filters',
  addToBag:BASE_URL+'add-product-to-bag',
  getShoppingBag:BASE_URL+'get-products-from-bag',
  editCartProduct:BASE_URL+'edit-products-to-bag',
  removeFromCart:BASE_URL+'delete-cart-product',
  orderSummary:BASE_URL+'order-summary',
  editAddress:BASE_URL+'edit-address',
  placeOrder:BASE_URL+'place-order'
    // "category" : "6287363d87ec1cc126ebc33a"

}
export const CATEGORY_URLS = {
   category : 'http://65.1.62.58/api/v1/category/get-categories'

}
