<template>

  <div class="home">    
  <div>
    <b-carousel :interval="4000" controls indicators >
  
        <b-carousel-slide>
            
        <template v-slot:img>
          
          <img
            class="carousel-media fluid max-width: 100%"
           min-width="250"
            min-height="300"
            src="@/assets/imgs/19.jpg"
            alt="image slot"
          >    
          

        </template>
      </b-carousel-slide>
       
       <b-carousel-slide>
            

        <template v-slot:img>
          <img
            class="carousel-media fluid max-width: 100%"
            min-width="250"
            min-height="300"
            src="@/assets/imgs/retratos 3.jpg"
           alt="image slot"

          >
        </template>
      </b-carousel-slide>
      
      <b-carousel-slide>

        
        <template v-slot:img>
   
          <img 
           class="carousel-media d-block fluid max-width: 100%"
           min-width="250"
            min-height="300"
            src="@/assets/imgs/8.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      
      <b-carousel-slide>

        <template v-slot:img>
          <img
            class="carousel-media d-block fluid max-width: 100%"
            min-width="250"
            min-height="300"
            src="@/assets/imgs/12.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
       <b-carousel-slide>

        <template v-slot:img>
          <img
            class="carousel-media d-block fluid max-width: 100%"
          min-width="250"
            min-height="300"
            src="@/assets/imgs/14.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
       <b-carousel-slide>

        <template v-slot:img>
          <img
            class="carousel-media d-block fluid max-width: 100%"
           min-width="250"
            min-height="300"
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
          <P class="p-des1">La fotografia es un medio de expresion muy fuerte: Una imagen que junta a la vez recuerdos, conversaciones, historias, publicidad...Por eso, el campo fotografigo se esta explorando y desarrolado continuamente. Y los que trabajan en este campo tienen que perfeccionarse para garantizar un servicio profesional. Asimismo, el equipo DreamArt Photo presente en la estructura hostelera colaboradora, garantiza un servicio exelente, su actividad esta siento ya altamente valorada por los turistas, esto les consideran parte del personal del hotel, lo que pondra en valor su compañia</P>
          <p class="p-des2"></p>
     </div>
        </div>
          <br>
          <br>
          <br>
          <br>
          <br> 
          <br>
    <div id="flex-des">
   <b-card id="retratos" header="Retratos"
   text-variant="center"
    header-text-variant="light"
    header-tag="header"
    header-bg-variant="dark" class="card, fluid, mr-5" style="width:400px">
  <img class="card-img-top" src="@/assets/imgs/2.jpg" alt="Card image">
  <div  class="card-body">
    <p class="text-justify">Eres un chico/a y quieres plasmar tu verdadera esencia a travez de una foto? Te gusta estar de frente al objectivo? Entonces no espere en contactar conmigo!</p>
    <a href="#" class="btn btn-primary">EXPLORA!</a>
  </div>
  </b-card>

           <b-card id="sess-niñ" header="Sessiones de Niños"
   text-variant="center"
    header-text-variant="light"
    header-tag="header"
    header-bg-variant="dark" class="card, fluid, mr-5" style="width:400px">
  <img class="card-img-top" src="@/assets/imgs/retratos 7.jpg" alt="Card image">
  <div  class="card-body">
    <p class="text-justify">Eres un chico/a y quieres plasmar tu verdadera esencia a travez de una foto? Te gusta estar de frente al objectivo? Entonces no espere en contactar conmigo!</p>
    <a href="#" class="btn btn-primary">EXPLORA!</a>
  </div>
  </b-card>
  </div>
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
    margin-left: 20rem;
    margin-right: 20rem;

   }
   #h1-des {
     color:orange;
     font-size: 3rem;

   }
   .p-des1, .p-des2 {
    font-family: 'Quicksand', sans-serif;
     color: gray;
     font-style: italic;
    text-align: justify;
      letter-spacing: 1px;
        line-height: 1.8;
          word-spacing: 3px;
          font-size: 1.2rem;

    
   }
   #img-des {
     margin-left: 32rem;
     margin-top: 10rem;
     margin-bottom: 10rem;
   }
     /* @media (min-width: 300px){
       .carousel-media {
    max-width:300px;
    max-height:220px;
} */
     
      @media (min-width: 300px){
       .carousel-media {
    width:350px;
    height:220px;
    
}

#img-des{
  margin-left:5rem;
}
#div_des {
 margin-left: 2rem;
    margin-right: 0rem;  }
#des {
   padding-left: 0rem;
       margin-bottom: 0rem;
}

}
     @media (min-width: 374px){
       .carousel-media {
    width:500px;
    height:220px;
    
}


#img-des{
  margin-left:5rem;
}
#div_des {
 margin-left: 2rem;
    margin-right: 2rem;  }

     }

       @media (min-width: 630px){
       .carousel-media {
    width:700px;
    height:220px;
}
#img-des{
  margin-left:10rem;
}
#div_des {
 margin-left: 3rem;
    margin-right: 11rem;  }
    #flex-des{
margin-left: 7rem;    }
     }
     @media (min-width: 670px){
.carousel-media {
  width:770px;
  height:400px;
}
#img-des{
  margin-left:10rem;
}
#div_des {
 margin-left: 3rem;
    margin-right: 11rem;  }
    #flex-des{
margin-left: 10rem;    }
     
     }
     
@media (min-width: 760px){
.carousel-media {
  min-width:860px;
  min-height:530px;
}
#flex-des{
margin-left: 10rem;    }
     
     
#img-des{
  margin-left:13rem;
}
#div_des {
 margin-left: 6rem;
    margin-right: 13rem;  }
     
     }
     @media (min-width: 850px){
.carousel-media {
  min-width:950px;
  min-height:530px;
}
#flex-des{
margin-left: 15rem;    }
     
     
#img-des{
  margin-left:15rem;
}
#div_des {
 margin-left: 5rem;
    margin-right: 13rem;  }
     
     }
     @media (min-width: 1000px){
.carousel-media {
  min-width:1100px;
  min-height:530px;
}
#flex-des{
margin-left: 18rem;    }
     
     
#img-des{
    margin-left:20rem;

}
#div_des {
 margin-left: 5rem;
    margin-right: 18rem;  }
     } 
      @media (min-width: 1150px){
.carousel-media {
  min-width:1250px;
  min-height:630px;
}
#flex-des{
margin-left: 20rem;    }
     
#img-des{
  margin-left:24rem;
}
#div_des {
 margin-left: 8rem;
    margin-right: 18rem;  }
     } 
           @media (min-width: 1350px){
.carousel-media {
  min-width:1450px;
  min-height:630px;
}
#flex-des{
margin-left: 28rem;    }
     
#img-des{
  margin-left:24rem;
}
#div_des {
 margin-left: 8rem;
    margin-right: 22rem;  }
           }
     @media (min-width: 1350px){
.carousel-media {
  min-width:1450px;
  min-height:630px;
}
#flex-des{
margin-left: 28rem;    }
     
#img-des{
  margin-left:36rem;
}
#div_des {
 margin-left: 14rem;
    margin-right: 16rem;  }
     } 
           @media (min-width: 1650px){
.carousel-media {
  min-width:1950px;
  min-height:930px;
}
#flex-des{
margin-left: 33rem;
display: flex;}
    
#img-des{
  margin-left: 50rem;
}
#div_des {
 margin-left: 10rem;
    margin-right: 18rem;  }
     } 
     #flex-des {
       
       margin-bottom: 5rem;
     }

     .p-des1 {
       border-top: solid black 2px;
     }
     .p-des2 {
       border-bottom: solid black 2px;
     }
   </style>

