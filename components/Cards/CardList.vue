<template>
    <div class="c_3">
       <div class="card">
        <div class="front-card">
            <img 
            :src="picture" 
            :alt="'Thumbnail of ${deck.name}'"
            >
        </div>
        <div class="back-card">
            <h6>{{keyword}}</h6>
            </div>
        </div>
    </div>             
</template>
<script>
export default {
    props: {
        keyword: {
            type: String,
            required: true
        },
        picture: {
            type: String,
            required: true
        },
    }
}
</script>