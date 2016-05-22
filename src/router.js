/**
 * Created by yejunqin on 2016/5/21.
 */
export default function(router){
  router.map({
    '/': {
      name: 'index',
      component: require('./components/index.vue')
    },
    '/test': {
      name: 'test',
      component: require('./components/test.vue')
    },
    '/hello': {
      name: 'hello',
      component: require('./components/Hello.vue')
    }
  })
}
