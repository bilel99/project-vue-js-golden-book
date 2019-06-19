<template>
  <div class="home">
    <TopPage/>
    <Article/>
    <CreateArticle/>
  </div>
</template>

<script>
import TopPage from '@/components/topPage/TopPage'
import Article from '@/components/article/Article'
import CreateArticle from '@/components/createArticle/CreateArticle'

export default {
  name: 'home',
  components: {
    TopPage,
    Article,
    CreateArticle
  }
}
</script>
