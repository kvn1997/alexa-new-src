<template>
    <div>
        <h1 class="lalla text-center font-italic mt-5">Parejas</h1>
        <p id="p-retratos">Uno de los mejores momentos tambien pueden ser retratos!</p>
        <div class="div_retratos">
             <img class="fotos" max-width="250"
            height="200"
            align-items="center"
             src="@/assets/parejas/pareja 19.jpg" alt="">
            <img class="fotos foto-pegada foto-lalla" max-width="250"
            height="400"
            align-items="center"
             src="@/assets/parejas/pareja 21.jpg" alt="">
        
            <img class="fotos foto-m" max-width="250"
            height="200"
            align-items="center"
             src="@/assets/parejas/pareja 20.jpg" alt="">
        <img class="fotos foto-pegada" max-width="150"
            height="200"
            align-items="center"
             src="@/assets/parejas/p.jpg" alt="">
        <img class="fotos" max-width="250"
            height="200"
            align-items="center"
             src="@/assets/parejas/pareja 7.jpg" alt="">
        <img class="fotos foto-m" max-width="250"
            height="200"
            align-items="center"
             src="@/assets/parejas/pareja 9.jpg" alt="">
            </div>  
        <div class="div_retratos">
        
        <!-- chaval -->
        <img class="fotos foto-pegada" max-width="300"
            max-height="200"
            align-items="center"
             src="@/assets/parejas/pareja 15.jpg" alt="">
<!-- niña -->
        <img class="fotos foto-lalla" max-width="250"
            height="350"
            align-items="center"
             src="@/assets/parejas/pareja 16.jpg" alt="">

        <img class="fotos f" max-width="150"
            height="200"
            align-items="center"
             src="@/assets/parejas/pareja 17.jpg" alt="">
    
        <img class="fotos f" max-width="250"
            height="200"
            align-items="center"
             src="@/assets/parejas/pareja 18.jpg" alt="">
             
        
       
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
    height:500px;
    margin-bottom: 2rem;
}}
.div_retratos {
        padding: 0px;
        margin-top: 3rem;

}
@media (min-width: 760px){
      .fotos  {
    width:700px;
    height:700px;
    margin-left: 1rem;
    margin-bottom: 2rem;
}

}
@media (min-width: 830px){
      .fotos  {
    width:380px;
    height:400px;
    margin-right:2rem;
    margin-bottom: 2rem;
    align-items: justify;
}

}
@media (min-width: 930px){
      .fotos  {
    width:300px;
    height:400px;
    margin-right:0rem;
    margin-bottom: 2rem;
}
}
@media (min-width: 1230px){
      .fotos  {
    width:380px;
    height:550px;
    margin-right:2rem;
    margin-bottom: 2rem;
    margin-left: 12rem;
    
    align-items: justify;
}
.f {
    height: 400px;
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