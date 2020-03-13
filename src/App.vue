
<template>
  <div id="app">
  	<div>
    <v-app-bar
      color="red lighten-2"
      
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>50% ALL DRESSES</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

    </v-app-bar>
  </div>
   
    <router-view />
  </div>
</template>

<script>
export default {
}
</script>