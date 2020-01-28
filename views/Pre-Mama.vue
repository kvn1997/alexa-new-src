<template>
    <div>
        <h1 class="lalla text-center font-italic mt-5">Pre-Mama</h1>
        <p id="p-retratos">Uno de los mejores momentos tambien pueden ser retratos!</p>
        <div class="div_retratos">
       
        <img class="fotos" width="750"
            height="300"
            align-items="center"
             src="@/assets/pre-mama/premama 1.jpg" alt="">
             <img class="fotos" width="750"
            height="300"
            align-items="center"
             src="@/assets/pre-mama/premama 2.jpg" alt="">
             <img class="fotos f1" width="750"
            height="300"
            align-items="center"
             src="@/assets/pre-mama/premama3.jpg" alt="">
             <img class="fotos f1" width="750"
            height="300"
            align-items="center"
             src="@/assets/pre-mama/premama 6.jpg" alt="">
             <img class="fotos f" width="750"
            height="300"
            align-items="center"
             src="@/assets/pre-mama/premama 8.jpg" alt="">
        
             </div>
      </div>
</template>

<style>

@media (min-width: 320px){
      .fotos  {
    width:240px;
    height:300px;
    margin-left:4rem;
    margin-bottom:2rem;
}
}
@media (min-width: 760px){
      .fotos  {
    width:350px;
    height:450px;
    margin-left: 1rem;
    margin-bottom: 1rem;
}
.f {
  margin-left: 13rem;
}

}
@media (min-width: 830px){
      .fotos  {
    width:380px;
    height:400px;
    margin-right:2rem;
    margin-bottom: 2rem;
    align-items: justify;
          margin-left: 26rem;

}
}

@media (min-width: 930px){
      .fotos  {
    width:500px;
    height:400px;
      margin-left: 24rem;

}
}
@media (min-width: 1230px){
      .fotos  {
    width:380px;
    height:500px;
   
    margin-left: 10rem;
      }
.f {
  height: 400px;
      margin-left: 30rem;

      }
      .f1 {
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