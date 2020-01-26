<template>

  <div class="home">    
  <div>
    <b-carousel :interval="4000" controls indicators>
  
        <b-carousel-slide >
            
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
   <template>
     <div id="img-des">
          <img
            class="animated rounded-pill slideInUp delay-1s"
            width="250"
            height="300"
            align-items="center"
            src="../assets/imgs/alexa1.jpg"
            alt="image slot"
          >
          </div>
        </template>
        <div id="description">
         <div id="div_des"> <!-- <h1 id="h1-des" class="lalla text-center font-italic">PRESTACION</h1> -->
          <P class="p-des">aminima provamet consectetur adipisicing elit. Minus tempore aut maxime corrupti quam quia, ut ipsa, velit illo soluta rem aperiam autem quas assumenda temporibus! Obcaecati quod praesentium beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perspiciatis neque dignissimos voluptatum ex amet sint at eum cum officiis. Consequatur necessitatibus recusandae molestiae mollitia, unde laudantium deserunt culpa enim.</P>
          <p class="p-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam inventore ducimus non impedit suscipit quos sequi natus ut, quisquam, praesentium, aperiam alias iusto eos fugit maxime labore beatae doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laudantium itaque, porro doloremque cupiditate repellat! Officiis similique, eum totam vero natus delectus, laborum velit, odio earum dolor illo amet minima.</p>
     </div>
        </div>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          
  </div>
</template>


 <script>
  import Navbar from '@/App.vue'
    export default {
      name: 'App',
       components: {
         Navbar
       }      
     }
  
   </script>
   <style>
   #div_des {
    margin-left: 13rem;
    margin-right: 13rem;

   }
   #h1-des {
     color:orange;
     font-size: 3rem;

   }
   .p-des {
    font-family: 'Quicksand', sans-serif;
     color: darkgreen;
     font-style: italic;
    text-align: justify;
      letter-spacing: 1px;
        line-height: 1.8;
          word-spacing: 3px;

    
   }
   #img-des {
     margin-left: 32rem;
     margin-top: 10rem;
     margin-bottom: 10rem;
   }
     
   </style>

