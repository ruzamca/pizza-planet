import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Contact from '@/components/Contact'
import Admin from '@/components/Admin'
import About from '@/components/About'
import History from '@/components/History'
import Delivery from '@/components/Delivery'
import OrderingGuide from '@/components/OrderingGuide'

export const routes = [
    { path: '/', name: 'homeLink', component: Home },
    { path: '/menu', name: 'menuLink', component: Menu },
    { path: '/contact', name: 'contactLink', component: Contact },
    {
      path: '/admin', name: 'adminLink', component: Admin, beforeEnter: () => {
        alert('This area is for authorised users only. Please login to continue')
      }
    },
    {
      path: '/about', name: 'aboutLink', component: About, children: [
        { path: '/history', name: 'historyLink', component: History },
        { path: '/delivery', name: 'deliveryLink', component: Delivery },
        { path: '/ordering-guide', name: 'orderingGuideLink', component: OrderingGuide }
      ]
    },
    { path: '*', redirect: '/' }
  ]