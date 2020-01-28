<template>
    <div>
        <h1 class="lalla text-center font-italic mt-5">Retratos</h1>
        <p id="p-retratos">Uno de los mejores momentos tambien pueden ser retratos!</p>
        <div class="div_retratos">
        <img class="fotos foto-pegada" max-width="150"
            height="200"
            align-items="center"
             src="@/assets/imgs/retratos 3.jpg" alt="">
        <img class="fotos" max-width="250"
            height="200"
            align-items="center"
             src="@/assets/imgs/retratos 4.jpg" alt="">
        <img class="fotos foto-m" max-width="250"
            height="200"
            align-items="center"
             src="@/assets/imgs/retratos 5.jpg" alt="">
            </div>  
        <div class="div_retratos">
        
        <!-- chaval -->
        <img class="fotos foto-pegada" max-width="300"
            max-height="200"
            align-items="center"
             src="@/assets/imgs/retratos 2.jpg" alt="">
<!-- niña -->
        <img class="fotos foto-lalla" max-width="250"
            height="350"
            align-items="center"
             src="@/assets/imgs/retrato 6.jpg" alt="">

        <img class="fotos foto-m" max-width="150"
            height="200"
            align-items="center"
             src="@/assets/imgs/retratos 1.jpg" alt="">
            </div>
<!--               -->
             <div class="div_retratos">
        <img class="fotos foto-pegada" max-width="250"
            height="200"
            align-items="center"
             src="@/assets/imgs/retratos 6.jpg" alt="">
              <img class="fotos" max-width="250"
            height="200"
            align-items="center"
             src="@/assets/imgs/retratos 8.jpg" alt="">
        <img class="fotos foto-m" max-width="250"
            height="200"
            align-items="center"
             src="@/assets/imgs/retratos 7.jpg" alt="">
       
            </div> 
<!--              -->
             <div class="div_retratos">
        <img class="fotos foto-pegada foto-lalla" max-width="250"
            height="400"
            align-items="center"
             src="@/assets/imgs/retratos 9.jpg" alt="">
        
        <img class="fotos" max-width="250"
            height="250"
            align-items="center"
             src="@/assets/imgs/retratos 11.jpg" alt="">
             <img class="fotos foto-m foto-lalla" max-width="250"
            height="400"
            align-items="center"
             src="@/assets/imgs/retratos 10.jpg" alt="">
            </div>  
             <div class="div_retratos">
                  <img class="fotos foto-m" max-width="350"
            height="200"
            align-items="center"
             src="@/assets/imgs/retratos 13.jpg" alt="">
        <img class="fotos foto-lalla" max-width="240"
            height="350"
            align-items="center"
             src="@/assets/imgs/retratos 12.jpg" alt="">
       
        <img class="fotos foto-m" max-width="350"
            height="240"
            align-items="center"
             src="@/assets/imgs/retratos 14.jpg" alt="">
            </div>     
             
      </div>
</template>

<style>
.div_retratos {
    padding-left: 13rem;
}
@media (min-width: 320px){
      .fotos  {
    width:390px;
    height:400px;
}
.div_retratos {
        padding: 0px;
        margin-top: 3rem;

}
@media (min-width: 760px){
      .fotos  {
    width:700px;
    height:400px;
    margin-left: 1rem;
    margin-bottom: 1rem;
}
.foto-lalla {
    height: 800px;
}
.div_retratos {
        padding: 0px;
        margin-top: 3rem;

}}
}
@media (min-width: 830px){
      .fotos  {
    width:380px;
    height:400px;
    margin-right:2rem;
    margin-bottom: 2rem;
    align-items: justify;
}
.foto-m {
margin-left: 13rem;}
.foto-pegada {
    margin-left: 2rem;
}
@media (min-width: 930px){
      .fotos  {
    width:300px;
    height:400px;
    margin-right:0rem;
    margin-bottom: 2rem;
}
.foto-m {
margin-left: 2rem;
margin-right: 2rem;
}

.foto-pegada {
    margin-left: 2rem;
    margin-right: 2rem;}

}
@media (min-width: 1230px){
      .fotos  {
    width:580px;
    height:400px;
    margin-right:2rem;
    margin-bottom: 2rem;
        margin-left: 4rem;

    align-items: justify;
}
.foto-m {
margin-left: 20rem;}
.foto-pegada {
    margin-left: 2rem;
}
.foto-lalla {
    height: 50rem;
}
}
}

#p-retratos {
    font-family: 'Lobster', sans-serif;
     font-style: italic;
    text-align: center;
      letter-spacing: 1px;
        line-height: 1.8;
          word-spacing: 3px;
          font-size: 1.2rem;
}


    
</style>