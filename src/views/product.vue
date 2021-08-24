<template>
<div class="coner">
  <div v-if="product">
    <div class="product-image">
      <img :src="product.image" alt="">
    </div>
    <div class="product-info">
      <h1 class="product-name">{{ product.name }}</h1>
      <div class="product-cost"> ￥ {{ product.cost }}</div>
      <div class="product-add-cart" @click="handleAddToCart">加入购物车</div>
    </div>
  </div>
  </div>
</template>

<script>
import product_data from '../product'
export default {
  data () {
    return {
      id: parseInt(this.$route.query.id),
      product: null
    }
  },
  methods: {
    getProduct () {
      setTimeout(() => {
        this.product = product_data.find(item => item.id === this.id)
      }, 500)
    },
    handleAddToCart () {
      this.$store.commit('addCart', this, this.id)
    }
  },
  mounted () {
    // 初始化数据
    this.getProduct()
    console.log(this.$route)
  }
}
</script>

<style scoped>
.coner{
  padding: 0;
  margin: 0;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  /* background: red; */
  padding: 100px;

}
.product{
  margin: 32px;
  padding: 32px ;
  background: #fff;
  border: lpx solid #dddee1;
  border-radius: l0px;
  overflow: hidden ;
}
.product-image{
width : 50%;
height: 550px ;
float: left;
text-align : center;
}
.product-image img{
  height: 100%;
}

.product-info{
width: 30%;
padding: 120px 0 250px ;
height: 150px;
float : left;
text-align: center;
}
.product-cost{
color: #f2352e ;
margin: 8px 0;
}
.product-add-cart{
display : inline-block;
padding : 8px 64px;
margin: 8px 0 ;
background : #2d8cf0 ;
color : #fff;
border-radius: 4px;
cursor : pointer;
}
.product-desc{
background : #fff;
margin: 32px;
padding : 32px;
border : lpx solid #dddee1;
border-radius : l0px;
text-align: center;
}
.product-desc img{
display : block;
width: 50%;
margin : 32px auto;
padding : 32px ;
border-bottom: lpx solid #dddee1 ;
}
</style>
