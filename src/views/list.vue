<template>
  <div v-show='list.length' >
    <div class="list-control">
      <div class="list-control-order">
        <span >排序：</span>
        <span
        class="list-control-order-item"
        :class="{on: order === '' }"
        @click="handleOrderDefult">
          默认
        </span>
        <span
        class="list-control-order-item"
        :class="{on: order === 'sales' }"
        @click="handleOrderSale">
          销量
        <template v-if="order === 'sales' ">∨</template>
        </span>
        <span
        class="list-control-order-item"
        :class="{on: order.indexOf('cost') > -1 }"
        @click="handleOrderCost">
          价格
        <template v-if="order === 'cost-desc' ">∨</template>
        <template v-if="order === 'cost-asc' ">∧</template>
        </span>

      </div>
      <div class="list-control-filter">
        <span>品牌：</span>
        <span
        class="list-control-filter-item"
        :class="{on: item === filterBrands }"
        v-for="item in brands"
        @click="handleFilterBrand(item)">
          {{item}}
        </span> <br>
        <span>颜色：</span>
        <span
        class="list-control-filter-item"
        :class="{on: item === filterColors }"
        v-for="item in colors"
        @click="handleFilterColor(item)">
          {{item}}
        </span>
      </div>
    </div>
    <Product v-for='item in filteredAndOrderedList' :info='item' :key='item.id' ></Product>
   <div class="product-not-found" v-show="!filteredAndOrderedList.length"> 暂无相关商品</div>

  </div>
</template>

<script>
import Product from '../components/Product.vue'
export default {
  components: { Product },

  mounted () {
    // 初始化时，通过 Vuex 的action 请求数据
    this.$store.dispatch('getProductList')
  },
  computed: {
    list () {
      // console.log(this.$store.state.productList, 'dsad')
      return this.$store.state.productList
    },
    brands () {
      // console.log(this.$store.getters.brands, 'dsadas')
      return this.$store.getters.brands
    },
    colors () {
      return this.$store.getters.colors
    },
    filteredAndOrderedList () {
      // 复制原始数据
      let list = [...this.list]
      // 过滤品牌
      if (this.filterBrands !== '') {
        list = list.filter(item => item.brand === this.filterBrands)
      }
      // 过滤颜色
      if (this.filterColors !== '') {
        list = list.filter(item => item.color === this.filterColors)
      }
      if (this.order !== '') {
        if (this.order === 'sales') {
          list = list.sort((a, b) => b.sales - a.sales)
        } else if (this.order === 'cost-desc') {
          list = list.sort((a, b) => b.cost - a.cost)
        } else if (this.order === 'cost-asc') {
          list = list.sort((a, b) => a.cost - b.cost)
        }
      }
      return list
    }
  },
  data () {
    return {
      //  排序依据，可选值为：
      // sales （销量〉
      //  cost-desc （价格降序〉
      // cost- asc （价格升序）
      order: '',
      filterBrands: '',
      filterColors: ''
    }
  },
  methods: {
    handleOrderDefult () {
      this.order = ''
    },
    handleOrderSale () {
      this.order = 'sales'
    },
    handleOrderCost () {
      if (this.order === 'cost-desc') {
        this.order = 'cost-asc'
      } else {
        this.order = 'cost-desc'
      }
    },
    handleFilterColor (e) {
      if (this.filterColors === e) this.filterColors = ''
      else this.filterColors = e
    },
    handleFilterBrand (e) {
      if (this.filterBrands === e) this.filterBrands = ''
      else this.filterBrands = e
    }

  }
}
</script>

<style scoped>
.list-control{
  background: #fff;
  border-radius: 6px;
  margin: 16px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 2);
}
.list-control-filter {
  margin-bottom: 16px;
}

.list-control-filter-item,
.list-control-order-item{
  background: #f2352e;
  border: 1px solid #e9eaec;
  cursor: pointer;
  display: inline-block;
  margin-right: 6px;
  border-radius: 4px;
  font-size: 15px;
  padding: 2px 6px;
}
.list-control-filter-item.on,
.list-control-order-item.on{
  background: #f2352e;
  border: 1px solid #f2352e;
  color: #fff;
}

.product-not-found{
  text-align: center;
  padding: 32px ;
}

</style>
