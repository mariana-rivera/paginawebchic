<template>
  <div id="app">
    <v-app id="inspire">
  

    <v-row >
      <v-col cols="12" class="d-flex justify-center">
        <v-container class="grey lighten-3 d-flex justify-center">
          <router-link to="/women">
            <v-btn class="grey lighten-3 mr-4">WOMEN</v-btn>
          </router-link>
          <router-link to="/accesories">
          <v-btn class="grey lighten-3 mr-4">ACCESORIES</v-btn>
          </router-link>
          <router-link to="/plussize">
          <v-btn class="grey lighten-3 mr-4">PLUS SIZE</v-btn>
        </router-link>
        <router-link to="/sales">
          <v-btn class="grey lighten-3 mr-4">SALES</v-btn>
         </router-link> 
        </v-container>
      </v-col>  
    </v-row>

    <v-img 
      src= 'https://img.ltwebstatic.com/images3_acp/2020/03/09/1583726339e3881df4397337325d15be27295d9cfd.jpg '
      width='100%'
    />


     <v-row> 
      <v-col cols="6">
     
      <v-img
        src= 'https://www.forever21.com/images/f21/us/en/web/20200211/0305_BMSM_D_M_020852_f21.jpg?1'
        width='100%'
        class="pr-4"
      />
        </v-col>

      <v-col cols="6">
        <v-img
        src= 'https://www.forever21.com/images/f21/us/en/web/20200206/0305_WGA_Spring-LooksWeLove_D_M_015310_f21.jpg?1'
        width='100%'
        class="pr-4"
      />
  
        </v-col>
        </v-row> 

        </v-app>

   
    
  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    
  }),
};

</script>
     