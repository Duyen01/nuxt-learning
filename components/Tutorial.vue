<!-- Please remove this file from your project -->
<template>
  <div class="ct">
    <div class="banner">
     <div class="thumbnail-banner"></div>
    </div>
    <div class="popular-decks">
      <h3 class="text_center my_3">Three Popular for you</h3>
      <div class="r">
        <div class="c_4">
          <div class="card">
            Deck 1
          </div>
        </div>
        <div class="c_4">
          <div class="card">
            Deck 2
          </div>
        </div>
        <div class="c_4">
          <div class="card">
            Deck 3
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      deck: [
        {
          _id: 1,
          title: 'Deck 1'
        },
        {
          _id: 2,
          title: 'Deck 2'
        },
        {
          _id: 3,
          title: 'Deck 3'
        },
      ]
    }
  }
}
</script>

<style>
  .banner {
    height: 220px;
    margin-top:3rem;

  }
  .banner .thumbnail-banner {
    background: url('~assets/images/banner.jpg');
    height: inherit;
    background-size: cover;
  }
</style>
