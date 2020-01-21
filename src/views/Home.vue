<template>
  <div class="home">
   
    
  
  <div id="app">
    <b-carousel :interval="4000" controls indicators>

        <b-carousel-slide>
        <template v-slot:img>
          <img
            class="fluid max-width: 100%"
            width="1350"
            height="620"
            src="@/assets/imgs/19.jpg"
            
          >
        </template>
      </b-carousel-slide>
       
       <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block fluid max-width: 100%"
            width="1350"
            height="620"
            src="@/assets/imgs/3.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      
      <b-carousel-slide>
        
        <template v-slot:img>
        <div class="carousel-caption d-none d-md-block">
        <h5>Alex Nicastro</h5>
        </div>
          <img 
           class="d-block fluid max-width: 100%"
            width="1350"
            height="620"
            src="@/assets/imgs/8.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block fluid max-width: 100%"
            width="1350"
            height="620"
            src="@/assets/imgs/12.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
       <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block fluid max-width: 100%"
            width="1350"
            height="620"
            src="@/assets/imgs/14.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
       <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block fluid max-width: 100%"
            width="1350"
            height="620"
            src="@/assets/imgs/15.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      
      
      </b-carousel>
  
    </div>  
    
  </div>
</template>
 <script>
    export default {
      name: 'home',
      
    }
  </script>
