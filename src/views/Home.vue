<template>
  <div class="home" style="width:80%">

    <!-- <Product /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Product from '@/components/Product.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    // Product
  },
  methods: {

  },
  created () {
    // var text = '买的话的机票'
    // for (const i of text) {
    //   console.log(i)
    // }
    // const a = 5
    // const b = 10

    // function tag (s, v1, v2) {
    //   console.log(s[0])
    //   console.log(s[1])
    //   console.log(s[2])
    //   console.log(v1)
    //   console.log(v2)

    //   return 'OK'
    // }

    // tag`Hello ${a + b} world ${a * b}`
    function factorial (n, total = 1) {
      if (n === 1) return total
      return factorial(n - 1, n * total)
    }

    console.log(factorial(5, 1)) // 120
  }
}
</script>
