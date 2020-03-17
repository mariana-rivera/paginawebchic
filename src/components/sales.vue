<template>
<div>
<v-container>
	<v-img 
      src= 'https://www.forever21.com/images/f21/us/en/web/20200130/0312_NewToSale_D_M_225602_f21.gif?1'
      width='100%'
      >
     </v-img> 
 </v-container>
 <v-container>
     	<v-row>
		<v-col
		cols="2" 
      class="d-flex child-flex"
    > 
      <v-card flat title class="d-flex">
      <v-img 
      src="https://www.forever21.com/images/default_330/00335213-01.jpg"
    /> 
      <v-card-text>Vacay Mode Graphic Case for iPhone 6/7/8<br> $1.99</v-card-text>
      </v-card>
   </v-col>

      <v-col 
      cols="2" 
      class="d-flex child-flex"
    > 
      <v-card flat title class="d-flex">
      <v-img 
      src="https://www.forever21.com/images/default_330/00395683-01.jpg"
     />
     <v-card-text>Buckled Western Ankle Boots<br> $18.99</v-card-text>
      <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="red lighten-2"
          dark
          v-on="on"
        >
          Select
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Privacy Policy
        </v-card-title>

        <v-card-text>
          THIS ITEM IS SOLD OUT
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
      </v-card>
      </v-col>

      <v-col
      cols="2"
      class="d-flex child-flex"
    > 
      <v-card flat title class="d-flex">
      <v-img 
      src="https://www.forever21.com/images/4_full_330/00394329-01.jpg"
     />
     <v-card-text>Strawberry Print Flip Flops<br> $2.99</v-card-text>
      </v-card>
      </v-col>

      <v-col
      cols="2"
      class="d-flex child-flex"
    > 
      <v-card flat title class="d-flex">
      <v-img 
      src="https://www.forever21.com/images/default_330/00361118-02.jpg"
     />
     <v-card-text>Hamburger Graphic Ankle Socks<br> $1.99</v-card-text>
      </v-card>
      </v-col>

       <v-col
      cols="2"
      class="d-flex child-flex"
    > 
      <v-card flat title class="d-flex">
      <v-img 
      src="https://www.forever21.com/images/default_330/00397466-01.jpg"
     />
     <v-card-text>Translucent Fanny Pack<br> $8</v-card-text>
      </v-card>
      </v-col>

       <v-col
      cols="2"
      class="d-flex child-flex"
    > 
      <v-card flat title class="d-flex">
      <v-img 
      src="https://www.forever21.com/images/1_front_750/00341670-02.jpg"
     />
     <v-card-text>Rolo Chain Bralette<br> $9.99</v-card-text>
      </v-card>
      </v-col>
		</v-col>
	</v-row>		
 </v-container>
</div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>