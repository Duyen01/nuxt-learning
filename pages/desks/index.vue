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
        v-for="deck in desks" 
        :id="deck._id" 
        :key="deck._id"
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
        <form action="">
          <div class="form_group">
            <label for="">Name</label>
            <input class="form_control" type="text" placeholder="Please enter name deck" />
          </div>
          <div class="form_group">
            <label for="">Desciption</label>
            <input class="form_control" type="text" placeholder="Please enter name Desciption" />
          </div>
          <div class="form_group">
            <label for="">Thumbnail</label>
            <input type="file" />
          </div>
          <div class="form_group d_flex justify_content_end">
                <button class="btn btn_danger" @click.prevent="closeModal">
                    Close Modal
                </button>
                <button class="btn btn_success md_1" @click.prevent="createDeck">
                    Create
                </button>
          </div>
        </form>
      </div>
    </v-modal>
    <!-- end modal -->
  </div>
</template>
<script>
import DeckList from '@/components/Decks/DeckList'
export default {
  components: {
    DeckList
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    setTimeout(() => {
      resolve({
        desks: [
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
    this.$store.dispatch('setDecks', this.desks)
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