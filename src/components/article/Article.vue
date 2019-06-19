<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <button type="button" class="btn btn-primary col-12" data-toggle="modal" data-target="#createArticleModal">Create New Article</button>
      <div class="row">

        <div class="col-md-4" v-for="(post, idx) in posts" v-bind:key="idx">
          <div class="card mb-4 shadow-sm">
            <img class="bd-placeholder-img card-img-top" src="../../assets/logo.png" alt="image" height="225">
            <div class="card-body">
              <h3>{{ post.title }}</h3>
              <p class="card-text">{{ post.body }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary btn-primary" @click="view(post)">View</button>
                  <!--button type="button" class="edit-post btn btn-sm btn-outline-secondary btn-warning">Edit</button-->
                  <button type="button" class="btn btn-sm btn-outline-secondary btn-danger" @click="destroy(post)">Delete</button>
                </div>
                <small class="text-muted">Created by {{ post.userId }}</small>
              </div>
            </div>
          </div>

          <!-- Loader -->
          <div class="d-flex justify-content-center">
            <div class="spinner-grow text-primary" role="status" v-if="loading">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
          <!-- Edit Form -->
          <div class="edit-form">
            <form action="">
                <div class="form-group">
                  <label for="title">title</label>
                  <input type="text" class="form-control" id="title" placeholder="title" v-model="post.title">
                </div>
                <div class="form-group">
                  <label for="body">Description</label>
                  <textarea class="form-control" id="body" cols="30" rows="10" v-model="post.body"></textarea>
                </div>
              <div class="form-group">
                <button type="submit" class="form-control btn btn-success" @click.prevent="edit(post)">Update</button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  data () {
    return {
      posts: [],
      loading: false
    }
  },
  mounted () {
    this.$post = this.$resource('posts{/id}', {}, {}, {
      before: () => { this.loading = true },
      after: () => { this.loading = false }
    })
    this.$post.query().then((response) => {
      response.json().then((data) => {
        this.posts = data
      })
    }, (error) => {
      console.log('Error posts ', error)
    })
  },
  methods: {
    view (post) {
    },
    edit (post) {
      this.$post.update({ id: post.id }, {
        title: post.title,
        body: post.body
      }).then((response) => {
        response.json().then((data) => {
          console.log(data)
          this.posts = data
        })
      }, (error) => {
        console.log('error edit form ', error)
      })
    },
    destroy (post) {
      this.$post.remove({ 'id': post.id }).then((success) => {
        this.posts = this.posts.filter(p => p !== post)
      }, (error) => {
        console.log('error form delete ', error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./article";
</style>
