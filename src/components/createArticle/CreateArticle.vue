<template>
  <div class="modal fade" id="createArticleModal" tabindex="-1" role="dialog" aria-labelledby="createArticleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="createArticleModalLabel">Create new Article</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <form>
          <div class="modal-body">
              <div class="form-group">
                <label for="title" class="col-form-label">Title:</label>
                <input type="text" class="form-control" id="title" v-model="posts.title">
              </div>
              <div class="form-group">
                <label for="body" class="col-form-label">body:</label>
                <textarea class="form-control" id="body" v-model="posts.body"></textarea>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="create()">Create</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreateArticle',
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
    create () {
      this.$post.save({ title: this.posts.title, body: this.posts.body }).then((result) => {
        console.log(result)
      }, (error) => {
        console.log('Error create form ', error)
      })
    }
  }
}
</script>
