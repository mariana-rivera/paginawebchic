
<template>
  <div id="app">
  	<div>
    <v-app-bar
      color="red lighten-2"
      
    >
    <v-btn icon>
      <router-link to="/menu">
      <v-app-bar-nav-icon>
         </v-app-bar-nav-icon>
         </router-link>
    </v-btn>
      <v-toolbar-title>50% ALL DRESSES</v-toolbar-title>

      <v-spacer></v-spacer>

       <v-btn icon>
         <router-link to="/form">
        <v-icon>mdi-account</v-icon>
        </router-link>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
         
        <v-icon>mdi-shopping</v-icon>

      </v-btn>
      

    </v-app-bar>
    
      <h1 class="red--text text--darken-3"> C H I C </h1>
      
  </div>
   
    <router-view />
  </div>
   
</template>

<script>
export default {
}
</script>