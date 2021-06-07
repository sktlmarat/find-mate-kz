
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/search/:city', component: () => import('pages/OptionsList.vue') },
      { path: '/login/', component: () => import('pages/Login') },
      { path: '/register/', component: () => import('pages/Register') },
      { path: '/post/:id', component: () => import('pages/Post') },
      { path: '/contact/', component: () => import('pages/Contact') },
      { path: '/add-post/', component: () => import('pages/AddPost') },
      { path: '/my-posts/', component: () => import('pages/MyPosts') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
