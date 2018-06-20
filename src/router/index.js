import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import News from '../components/News';
import NewsDetail from '../components/NewsDetail';
import Reg from '../components/Reg';
import Todo from '../components/TodoList';
import Login from '../components/Login';

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/', // 路径，在url地址栏中显示
      name: 'HelloWorld', // 名字，路由的名字
      component: HelloWorld, // 对应路由访问的组件
    }, {
      path: '/news',
      name: 'News',
      component: News,
    }, {
      path: '/news_detail',
      name: 'NewsDetail',
      component: NewsDetail,
    }, {
      path: '/reg',
      name: 'Reg',
      component: Reg,
    }, {
      path: '/todo',
      name: 'TodoList',
      component: Todo,
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
router.beforeEach(((to, from, next) => {
  console.log(to);
  console.log(from);
  console.log(next);
  next();
}));
export default router;

