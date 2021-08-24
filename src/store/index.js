import Vue from 'vue'
import Vuex from 'vuex'
import productData from '../product'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 商品列表数据
    productList: [],
    // 购物车数据
    cartList: []
  },
  getters: {
    brands: state => {
      const brands = state.productList.map(item => item.brand)
      return Array.from(new Set(brands))
    },
    colors: state => {
      const colors = state.productList.map(item => item.color)
      return Array.from(new Set(colors))
    }
  },
  mutations: {
    // 添加商品
    setProduceList (state, data) {
      state.productList = data
    },
    addCart (state, id) {
      const isAdded = state.cartList.find(item => item.id === id)
      if (isAdded) {
        isAdded.count++
      } else {
        state.cartList.push(
          {
            id: id,
            count: 1
          }
        )
      }
    },
    editCartCount (state, playload) {
      // const product = state.cartList.find(item => item.id === payload. id) ;
      //   product.count += payload.count;
      state.cartList.map(item => {
        if (item.id === playload.id) {
          item.count += playload.count
          return item
        } else return item
      })
    },
    deleteCart (state, id) {
      const index = state.cartList.findIndex(item => item.id === id)
      state.cartList.splice(index, 1)
    },
    emptyCart (state) {
      state.cartList = []
    }
  },
  actions: {
    // 请求商品列表
    getProductList (context) {
      // 真实环境通过ajax获取，这里用异步模拟
      setTimeout(() => {
        context.commit('setProduceList', productData)
      }, 500)
      console.log(context)
    },
    buy (context) {
      return new Promise(resolve => {
        setTimeout(() => {
          context.commit('emptyCart')
          resolve()
        }, 500)
      })
    }

  },
  modules: {}
})
export default store
