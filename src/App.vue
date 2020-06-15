
<template>
    <div id="app">
        <v-app-bar color="red">
    
            <v-icon>mdi-format-list-bulleted</v-icon>
            <v-btn to="/">
             
            <h1> C H I C </h1>
               
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
                <router-link to="/form">
                    <v-icon>mdi-account</v-icon>
                </router-link>
            </v-btn>
    
            <v-btn icon>
                <router-link to="/favoritos">
                    <v-icon>mdi-heart</v-icon>
                </router-link>
            </v-btn>
    
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
                <router-link to="/cart">
                    <v-icon>mdi-shopping</v-icon>
                </router-link>
            </v-btn>
    
    
    
        </v-app-bar>
    
    
    
        <router-view/>
    
    </div>
</template>

<script>
export default {
    data: () => ({
        items: [
            { title: 'WOMEN' },
            { title: 'ACCESORIES' },
            { title: 'PLUS SIZE' },
            { title: 'SALES' },
        ],
    }),
}
</script>