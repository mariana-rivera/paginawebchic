<template>
    <v-row>
        <v-col cols="2" class="d-flex child-flex" v-for="a in acceSories" :key="a.id">
            <v-card flat title class="d-flex">
                <v-img :src="a.foto" />
                <v-card-text>{{a.nombre}}<br>{{a.precio}}</v-card-text>
                <v-btn @click="addToBag(a)"> ADD TO BAG </v-btn>
                <v-btn @click="addToFavorites(a)"> ADD TO FAVORITES </v-btn>
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

    name: 'accesories',
    methods: {
        addToBag(acceSories) {
            this.$store.commit("AddToBag", acceSories);
            this.snackbar=true;
            setTimeout(()=>{this.snackbar=false;},500)
        },
        addToFavorites(acc){
            this.$store.commit("AddToFavorites", acc);
            this.snackbarFavorites=true;
            setTimeout(()=>{this.snackbarFavorites=false;},500)
        }


    },
    data: function() {
        return {
            acceSories: [{
                    id: 1,
                    foto: "https://www.forever21.com/images/default_330/00404817-01.jpg",
                    nombre: "Resin Palm Tree Drop Earrings",
                    precio: "$4.99"

                },
                {
                    id: 2,
                    foto: "https://www.forever21.com/images/default_330/00381933-01.jpg",
                    nombre: "Princess Pendant Necklace",
                    precio: "$12.99"

                },
                {
                    id: 3,
                    foto: "https://www.forever21.com/images/1_front_330/00385028-03.jpg",
                    nombre: "Floral Drop Earrings",
                    precio: "$5.99"
                },
                {
                    id: 4,
                    foto: "https://www.forever21.com/images/default_330/00401585-02.jpg",
                    nombre: "Rhinestone Fringe Drop Earrings",
                    precio: "$6.99"
                },
                {
                    id: 5,
                    foto: "https://www.forever21.com/images/1_front_750/00403497-01.jpg",
                    nombre: "Seashell Hoop Earring Set",
                    precio: "$8.99"
                },
                {
                    id: 6,
                    foto: "https://www.forever21.com/images/default_330/00399406-01.jpg",
                    nombre: "Faux Turquoise Hoop Earrings",
                    precio: "$9.99"
                },


            ],
            snackbar: false,
            snackbarFavorites:false

        }
    }
}
</script>