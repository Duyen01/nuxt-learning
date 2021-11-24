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
   asyncData (context) {
    return axios
      .get('https://nuxt-learning-demo-default-rtdb.firebaseio.com/decks.json')
      .then((response) => {
        return {
            decks: response.data
        } 
              
      })
      .catch((e) => {
        context.error(e)
      })       
  },
  data(){
    return {
      decks: []
    }
  },
  create() {
    
    this.$store.dispatch('setDecks', this.decks)
  },
  methods: {
    openModal() {
      this.$modal.open({ name: 'createDeckModal' })
    },
    closeModal() {
      this.$modal.close({ name: 'createDeckModal' })
    },
    onSubmit(deckData) {
      axios.post('https://nuxt-learning-demo-default-rtdb.firebaseio.com/decks.json', deckData)
      .then((response) => {
        console.log(response);
        // eslint-disable-next-line no-console
          this.decks.push({ id: response.data.name})    
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e)
      })
    },
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