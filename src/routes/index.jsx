import Home from '../pages/Home'
import Login from '../pages/LogIn'
import LoginFast from '../pages/LoginFast'
import SignUp from '../pages/SignUp'
import VerifyEmail from '../pages/VerifyEmail'
import ViewTransaction from '../pages/ViewTransaction'
import SendAndRequest from '../pages/SendAndRequest'
import FundTransfer from '../pages/FundTransfer'

const publicRoutes = [
  { path: '/', component: Home },

  { path: '/login', component: Login, layout: Login },
  { path: '/signup', component: SignUp, layout: SignUp },
  { path: '/login-fast', component: LoginFast, layout: LoginFast },
  { path: '/verify-email', component: VerifyEmail},

  // temporary component: ViewTransaction
  { path: '/account', component: ViewTransaction},

  // temporary component: FundTransfer
  { path: '/my-transactions', component: FundTransfer},
  { path: '/send-and-request', component: SendAndRequest}
]

const privateRoutes = [
  
]

export { publicRoutes, privateRoutes }