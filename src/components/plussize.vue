<template>
    <div>
        <v-container>
            <v-img src='https://www.forever21.com/images/f21/us/en/web/20200310/0310_EverydayDresses_D_H_200149_f21.jpg?1' width='100%'>
            </v-img>
        </v-container>
        <v-container>
            <v-row>
                <v-col cols="2" class="d-flex child-flex" v-for="p in size" :key="p.id">
                    <v-card flat title class="d-flex">
                        <v-img :src="p.foto" />
                        <v-card-text>{{p.nombre}}<br>{{p.precio}}</v-card-text>
                        <v-btn @click="add(p)"> ADD TO BAG </v-btn>
                        <v-btn @click="addToFavorites(p)"> ADD TO FAVORITES </v-btn>
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
    name: 'plussize',
    methods: {
        add(plus) {
            this.$store.commit("AddToBag", plus);
            this.snackbar = true
            setTimeout(()=>{this.snackbar=false;},500)
        },
        addToFavorites(pLus){
            this.$store.commit("AddToFavorites", pLus);
            this.snackbarFavorites=true;
            setTimeout(()=>{this.snackbarFavorites=false;},500)
        }


    },
    data: function() {
        return {
            size: [{
                    id: 1,
                    foto: "https://www.forever21.com/images/default_330/00398272-02.jpg",
                    nombre: "Plus Size Striped Open-Knit Dress",
                    precio: "$14.99"

                },
                {
                    id: 2,
                    foto: "https://www.forever21.com/images/default_330/00395971-04.jpg",
                    nombre: "Plus Size Stretch-Satin Tube Dress",
                    precio: "$24.99"

                },
                {
                    id: 3,
                    foto: "https://www.forever21.com/images/default_330/00394667-02.jpg",
                    nombre: "Plus Size Denim Mini Dress",
                    precio: "$25.99"
                },
                {
                    id: 4,
                    foto: "https://www.forever21.com/images/1_front_750/00402530-02.jpg",
                    nombre: "Plus Size Leopard Print Bodycon Dress",
                    precio: "$15.99"
                },
                {
                    id: 5,
                    foto: "https://www.forever21.com/images/1_front_750/00394668-01.jpg",
                    nombre: "Plus Size Mock Neck Swing Dress",
                    precio: "$18.99"
                },
                {
                    id: 6,
                    foto: "https://www.forever21.com/images/1_front_750/00304771-02.jpg",
                    nombre: "Plus Size Faux Patent Leather Tube Dress",
                    precio: "$23.99"
                }
            ],
            snackbar: false,
            snackbarFavorites:false
        }
    }
}
</script>