<template>
  <div class="product">
    <!-- <router-link
      :to="'/product/'+info.id"
      class="product-main">
         <img :src="info.image" alt="">
         <h4>{{info.name}}</h4>
         <div class="product-color" :style="{background: colors[info.color]}"></div>
        <div class="product-cost">￥ {{info.cost}}</div>
         <div class="product-add-cart" @click.prevent="handleCart">
           加入购物车
         </div>
      </router-link> -->
    <div class="product-main" @click="goProduct(info.id)">
      <img :src="info.image" alt="" />
      <h4>{{ info.name }}</h4>
      <div
        class="product-color"
        :style="{ background: colors[info.color] }"
      ></div>
      <div class="product-cost">￥ {{ info.cost }}</div>
      <div class="product-add-cart" @click.stop="handleCart">
        加入购物车
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object
    }
  },
  data () {
    return {
      // info: {
      //   id: 1,
      //   name: 'AirPods',
      //   brand: 'Apple',
      //   image: require('../assets/image/1.jpg'),
      //   sales: 10000,
      //   cost: 1288,
      //   color: '白色'
      // },
      colors: {
        白色: '#ffffff',
        金色: '#dac272',
        蓝色: '#233472',
        红色: '#f2352e'
      }
    }
  },
  methods: {
    handleCart () {
      console.log(22222)
      this.$store.commit('addCart', this.info.id)
    },
    goProduct (id) {
      // this.$router.push(`/product/${id}`)
      console.log(3333)
      this.$router.push({ path: '/product', query: { id: id } })
    }
  }
}
</script>
<style scoped>
.product {
  text-align: center;
  width: 25%;
  display: inline-block;
}
.product-main {
  display: block;
  border-radius: 6px;
  border: 1px solid black;
  text-decoration: none;
  position: relative;
}
.product-main img {
  width: 80%;
}

h4 {
  color: #222;
  text-overflow: ellipsis; /*超出显示省略符号*/
  overflow: hidden;
  white-space: nowrap; /*不会换行 */
  margin: 10px 0;
}
.product-main:hover h4 {
  color: #0070c9;
}
.product-color {
  display: block;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  border: 1px solid #dddee1;
  margin: auto;
}

.product-cost {
  color: #de4037;
  text-decoration: none;
  margin: 10px 0;
}

.product-add-cart {
  color: #fff;
  background: #2d8cf0;
  display: none;
  position: absolute;
  cursor: pointer;
  top: 5px;
  right: 5px;
  padding: 4px 8px;
  border-radius: 3px;
  font-size: 12px;
}
.product-main:hover .product-add-cart {
  display: inline-block;
}
</style>
