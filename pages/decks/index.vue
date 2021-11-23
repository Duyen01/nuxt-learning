<template>
  <div>
    <div class="ct">
      <div class="d_flex justify_content_between my_3">
        <h3>List of your decks</h3>
        <button class="btn btn_success" @click.prevent="openModal">
          Create a Deck
        </button>
      </div>
      <ul class="decks-list">
        <deck-list 
        v-for="deck in decks" 
        :id="deck.id" 
        :key="deck.id"
        :name="deck.name" 
        :description="deck.description" 
        :thumbnail="deck.thumbnail"
         />
      </ul>
    </div>
    <!-- modal -->
    <v-modal name="createDeckModal">
      <div class="modal_body">
        <h1>Hello modal</h1>
        <deck-form @submit="onSubmit" />
      </div>
    </v-modal>
    <!-- end modal -->
  </div>
</template>
<script>
import axios from 'axios'

import DeckList from '@/components/Decks/DeckList'
import DeckForm from '@/components/Decks/DeckForm'
export default {
  components: {
    DeckList,
    DeckForm
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    setTimeout(() => {
      resolve({
        decks: [
        {
          _id: 1,
          name: 'Learn English',
          description: 'Fake dữ liệu chuẩn bị kết nối API trong dự án Nuxt.js - RHP Team',
          thumbnail: 'https://wallpaperbat.com/img/566655-english-class-wallpaper-png-free-english-class-wallpaperpng-transparent-image.png'
        },
        {
          _id: 2,
          name: 'Learn JavaScript',
          description: 'Fake dữ liệu chuẩn bị kết nối API trong dự án Nuxt.js - RHP Team',
          thumbnail: 'https://wallpaperbat.com/img/566655-english-class-wallpaper-png-free-english-class-wallpaperpng-transparent-image.png'
        },
        {
          _id: 3,
          name: 'Learn NuxtJs',
          description: 'Fake dữ liệu chuẩn bị kết nối API trong dự án Nuxt.js - RHP Team',
          thumbnail: 'https://wallpaperbat.com/img/566655-english-class-wallpaper-png-free-english-class-wallpaperpng-transparent-image.png'
        },
      ]
      })
    }, 1000)
    }).then((data) => {
      return data
    }).catch((e) => {
      // eslint-disable-next-line unicorn/error-message
      context.error(e)
    })
  },
  create() {
    this.$store.dispatch('setDecks', this.decks)
    // eslint-disable-next-line no-console
    console.log(this.$store.getters.decks)
  },
  methods: {
    openModal() {
      this.$modal.open({ name: 'createDeckModal' })
    },
    closeModal() {
      this.$modal.close({ name: 'createDeckModal' })
    },
    onSubmit(deckData) {
      axios.post('https://nuxt-learning-2866a-default-rtdb.firebaseio.com/decks.json', deckData)
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log(data)
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e)
      })
    },
    // eslint-disable-next-line require-await
    async getData() {
      const messageRef = this.$fireDb.ref('cases') // Where 'cases' is the json object
      axios.get(messageRef.toString() + '.json').then(response => {
        console.log(response.data)
      })
    }
  },
}
</script>

<style>
.decks-list {
  margin: 0;
  padding: 0;
}
.deck {
  display: block;
}
.deck-card {
  display: flex;
  height: 250px;
}
img {
  width: 250px;
  height: auto;
}
.deck li {
  margin-bottom: 1rem;
  margin-bottom: 0;
}
.modal_body {
  background-color: #fff;
  padding: 1rem;
}
</style>