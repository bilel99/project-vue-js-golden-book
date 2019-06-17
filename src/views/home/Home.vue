<template>
  <div class="home">
    <TopPage/>
    <Article/>
  </div>
</template>

<script>
import TopPage from '@/components/topPage/TopPage'
import Article from '@/components/article/Article'

export default {
  name: 'home',
  components: {
    TopPage,
    Article
  }
}
</script>
