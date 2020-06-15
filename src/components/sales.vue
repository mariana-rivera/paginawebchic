<template>
    <div>
        <v-container>
            <v-img src='https://www.forever21.com/images/f21/us/en/web/20200130/0312_NewToSale_D_M_225602_f21.gif?1' width='100%'>
            </v-img>
        </v-container>
    
        <v-container>
            <v-row>
                <v-col cols="2" class="d-flex child-flex" v-for="s in rebajas" :key="s.id">
                    <v-card flat title class="d-flex">
                        <v-img :src="s.foto" />
                        <v-card-text>{{s.nombre}}<br>{{s.precio}}</v-card-text>
                        <v-btn @click="add(s)"> ADD TO BAG </v-btn>
                        <v-btn @click="addToFavorites(s)"> ADD TO FAVORITES </v-btn>
                    </v-card>
                </v-col>
               <v-snackbar v-model="snackbar">
                    ADDED TO BAG
                </v-snackbar>
                <v-snackbar v-model="snackbarFavorites">
                    ADDED TO FAVORITES
                </v-snackbar>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'sales',
    methods: {
        add(salEs) {
            this.$store.commit("AddToBag", salEs);
            this.snackbar=true
            setTimeout(()=>{this.snackbar=false;},500)
        },
        addToFavorites(SALES){
            this.$store.commit("AddToFavorites", SALES);
            this.snackbarFavorites=true;
            setTimeout(()=>{this.snackbarFavorites=false;},500)
        }

    },
    data: function() {
        return {
            rebajas: [{
                    id: 1,
                    foto: "https://www.forever21.com/images/default_330/00335213-01.jpg",
                    nombre: "Vacay Mode Graphic Case for iPhone 6/7/8",
                    precio: "$14.99"

                },
                {
                    id: 2,
                    foto: "https://www.forever21.com/images/default_330/00395683-01.jpg",
                    nombre: "Buckled Western Ankle Boots",
                    precio: "$24.99"

                },
                {
                    id: 3,
                    foto: "https://www.forever21.com/images/4_full_330/00394329-01.jpg",
                    nombre: "Strawberry Print Flip Flops",
                    precio: "$25.99"
                },
                {
                    id: 4,
                    foto: "https://www.forever21.com/images/default_330/00361118-02.jpg",
                    nombre: "Hamburger Graphic Ankle Socks",
                    precio: "$15.99"
                },
                {
                    id: 5,
                    foto: "https://www.forever21.com/images/default_330/00397466-01.jpg",
                    nombre: "Translucent Fanny Pack",
                    precio: "$18.99"
                },
                {
                    id: 6,
                    foto: "https://www.forever21.com/images/1_front_750/00341670-02.jpg",
                    nombre: "Rolo Chain Bralette",
                    precio: "$23.99"
                }
            ],
            snackbar: false,
            snackbarFavorites:false
        }
    }
}
</script>
