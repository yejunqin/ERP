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
      component: require('./pages/test.vue')
    },
    '/hello': {
      name: 'hello',
      component: require('./pages/Hello.vue')
    },
    '/stockManage/baseOption': {
      name: 'baseOption',
      component: require('./pages/stockManage/baseOption.vue')
    }
  })
}
