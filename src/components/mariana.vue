
<template>
    <v-row>
        <v-col cols="2" class="d-flex child-flex" v-for="r in clothes" :key="r.id">
            <v-card flat title class="d-flex">
                <v-img :src="r.foto" />
                <v-card-text>{{r.nombre}}<br>{{r.precio}}</v-card-text>
                <v-btn @click="add(r)"> ADD TO BAG </v-btn>
                <v-btn @click="addToFavorites(r)"> ADD TO FAVORITES </v-btn>
    
            </v-card>
        </v-col>
        <v-snackbar v-model="snackbar">
            ADDED TO BAG
        </v-snackbar>
        <v-snackbar v-model="snackbarFavorites">
            ADDED TO FAVORITES      
        </v-snackbar>
    
    </v-row>
</template>

<script>
export default {
    name: 'mariana',
    methods: {
        add(ropa) {
            this.$store.commit("AddToBag", ropa);
            this.snackbar=true
            setTimeout(()=>{this.snackbar=false;},500)
        },
        addToFavorites(rop){
            this.$store.commit("AddToFavorites", rop);
            this.snackbarFavorites=true;
            setTimeout(()=>{this.snackbarFavorites=false;},500)
        }

    },

    data: function() {
        return {
            clothes: [{
                    id: 1,
                    foto: "https://www.forever21.com/images/default_330/00398990-07.jpg",
                    nombre: "Ruffled Smocked Crop Top",
                    precio: "$14.99"

                },
                {
                    id: 2,
                    foto: "https://www.forever21.com/images/default_330/00400106-01.jpg",
                    nombre: "Leopard Smocked Flounce-Hem Top",
                    precio: "$24.99"

                },
                {
                    id: 3,
                    foto: "https://www.forever21.com/images/default_330/00393602-04.jpg",
                    nombre: "Lettuce-Edge Pointelle Top",
                    precio: "$25.99"
                },
                {
                    id: 4,
                    foto: "https://www.forever21.com/images/default_330/00393430-01.jpg",
                    nombre: "Butterfly Rose Graphic Tee",
                    precio: "$15.99"
                },
                {
                    id: 5,
                    foto: "https://www.forever21.com/images/default_330/00391032-01.jpg",
                    nombre: "Comic Book Woman Graphic Tee",
                    precio: "$18.99"
                },
                {
                    id: 6,
                    foto: "https://www.forever21.com/images/default_330/00395264-01.jpg",
                    nombre: "Ribbed Tinker Bell Graphic Tee",
                    precio: "$23.99"
                }
            ],
            snackbar: false,
            snackbarFavorites:false
        }

    }

}
</script>
