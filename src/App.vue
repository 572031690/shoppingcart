<template>
  <div id="app">
    <div class="header">
      <router-link to="/list" class="header-title">电商网站示例</router-link>
      <div class="header-menu">
        <router-link class="header-menu-cart" to="/cart">
          购物车 <i class="iconfont">&#xe775;</i>
          <span v-if="cartList.length">{{ cartList.length }}</span>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import './assets/icont/iconfont'
// import store from './store/index'
// import { config } from 'vue/types/umd'
export default {
  data () {
    return {}
  },
  computed: {
    cartList () {
      return this.$store.state.cartList
    }
  },
  mounted () {
    console.log(this.$store, '----------')
    // this.getList()
  },
  methods: {
    getList () {
      // this.$store.dispatch('getProductList')
    }
  }
}
</script>

<style>
/* .dmz{
  color: red;
} */
i.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  color: blue;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
