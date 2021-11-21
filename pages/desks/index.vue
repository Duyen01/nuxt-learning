<template>
    <div>
        <div class="ct">
            <div class="d_flex justify_content_between my_3">
                <h3>List of your decks</h3>
                <button class="btn btn_success" @click.prevent="openModal">Create a Deck</button>
            </div>
            <ul class="decks-list">
                <li>
                    <nuxt-link class="deck" to="/desks/1">
                        <div class="card deck-card">
                            <img src="https://wallpaperbat.com/img/566655-english-class-wallpaper-png-free-english-class-wallpaperpng-transparent-image.png">
                            <div class="card_body">
                                <h3>Title card</h3>
                                <p>Description card</p>
                            </div>
                        </div>
                    </nuxt-link>
                </li>
               <li>
                    <nuxt-link class="deck" to="/desks/2">
                        <div class="card deck-card">
                            <img src="https://wallpaperbat.com/img/566655-english-class-wallpaper-png-free-english-class-wallpaperpng-transparent-image.png">
                            <div class="card_body">
                                <h3>Title card</h3>
                                <p>Description card</p>
                            </div>
                        </div>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link class="deck" to="/desks/3">
                        <div class="card deck-card">
                            <img src="https://wallpaperbat.com/img/566655-english-class-wallpaper-png-free-english-class-wallpaperpng-transparent-image.png">
                            <div class="card_body">
                                <h3>Title card</h3>
                                <p>Description card</p>
                            </div>
                        </div>
                    </nuxt-link>
                </li>
            </ul>
        </div>
        <v-modal name="createDeckModal">
            <div class="test_body">
                <h1>Hello test modal</h1>
                <form action="">
                    <div class="form_group">
                        <label for="">Name</label>
                        <input type="text" placeholder="Please enter name deck">
                        <label for="">Desciption</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Please enter desciption deck"></textarea>
                        <label for="">Thumbnail</label>
                        <input type="file">
                        
                    </div>
                </form>
                <button class="btn btn_danger" @click.prevent="closeModal">Close Modal</button>
            </div>
        </v-modal>
    </div>
</template>
<script>
export default {
    data(){
        return {
            deskID: '1'
        }
    },
    methods: {
        showDesk(){         
            // this.$router.push('desks/' + this.deskID)
            this.$router.push(`/desks/${this.deskID}`)
            
        },
        openModal(){
            this.$modal.open({name: 'createDeckModal'})
        },
        closeModal(){
            this.$modal.close({name: 'createDeckModal'})
        }
    }
}
</script>

<style>
    .decks-list{
        margin: 0;
        padding: 0;
    }
    .deck{
        display: block;
    }
    .deck-card{
        display: flex;
        height: 250px;
    }
    img{
        width: 250px;
        height: auto;
    }
    .deck li{   
        margin-bottom: 1rem;
        margin-bottom: 0;
    }
    .test_body{
        background-color: #fff;
        padding: 1rem;
    }
</style>