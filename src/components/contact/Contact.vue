<template>
  <div class="container">
    <h3>Demande de contact</h3>
    <div class="jumbotron">
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" v-model="name" placeholder="name" aria-describedby="contact-name">
          <small id="contact-name" class="">Your name ?</small>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" v-model="email" placeholder="email" aria-describedby="contact-email">
          <small id="contact-email" class="">Your email ?</small>
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" class="form-control" v-model="message" cols="30" rows="10" aria-describedby="contact-text"></textarea>
          <small id="contact-text" class="">Your Message ?</small>
        </div>
        <button class="btn btn-primary" v-on:click.prevent="onVerif()">Valider {{ count }}</button>
        <button class="btn btn-danger" v-on:click.prevent="onDeleted()" v-bind:disabled="this.contact.length === 0">Supprimer ma demande de contact</button>
      </form>
    </div>
    <div class="jumbotron">
      <h3>Object contact :</h3>
      {{ contact }}
        <ul v-for="row in contact" v-bind:key="row">
          <li>{{ row }}</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormContact',
  data () {
    return {
      count: 0,
      contact: [],
      name: 'Votre nom',
      email: 'john.doe@gmail.com',
      message: 'Votre message'
    }
  },
  mounted () {
    console.log('Bilel B ', this.contact)
    // this.contact = []
  },
  methods: {
    onVerif () {
      this.count++
      if (this.contact === 0) {
        this.onCreate()
      } else {
        this.onUpdate()
      }
    },
    onCreate () {
      this.contact.push(
        this.name, this.email, this.message
      )
    },
    onUpdate () {
      this.contact = []
      this.onCreate()
    },
    onDeleted () {
      this.contact = []
      this.count = 0
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './contact';
</style>
