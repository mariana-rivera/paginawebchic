<template>
   
    <v-row>   
        <v-col cols="2" class="d-flex child-flex" v-for="(a,index) in favs" :key="a.id">
            <v-card flat title class="d-flex">
                <v-img :src="a.foto" />
                <v-card-text>{{a.nombre}}<br>{{a.precio}}</v-card-text>
                <v-btn @click="remove(index)">Remove From Favorites</v-btn>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "favoritos",

    data() {
        return {
            favs: []
        }
    },
    beforeMount() {
        this.inicio();
    },
    methods: {
        remove(index) {
            this.$store.commit("RemoveFromFav", index);

        },
        inicio() {
            this.favs = this.$store.state.favoriteItem;

        }

    }
}
</script>