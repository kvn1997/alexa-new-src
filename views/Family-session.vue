<template>
    <div>
        <h1 class="lalla text-center font-italic mt-5">Sesión de Familia</h1>
        <p id="p-familia">Momentos en familia...inolvidables!</p>

        <div class="div_familia">       
            <img class="fotos" width="750"
                height="300"
                align-items="center"
                src="@/assets/familia/f-1.jpg" alt="">

            <img class="fotos" width="750"
                height="300"
                align-items="center"
                src="@/assets/familia/f-2.jpg" alt="">

            <img class="fotos" width="750"
                height="300"
                align-items="center"
                src="@/assets/familia/f-3.jpg" alt="">

             <img class="fotos" width="750"
                height="300"
                align-items="center"
                src="@/assets/familia/f-4.jpg" alt="">

             <img class="f-5 fotos" width="750"
                height="300"
                align-items="center"
                src="@/assets/familia/f-5.jpg" alt="">        
             </div>
      </div>
</template>

<style>
.div_familia {
    padding-left: 13rem;
}

@media (min-width: 320px){
      .fotos  {
    width:340px;
    height:300px;
    margin-left:5rem;
    margin-bottom: 2rem;
}
.div_familia {
        padding: 0px;
        margin-top: 3rem;

}}

@media (min-width: 760px){
      .fotos  {
    max-width:490px;
    max-height:400px;
    margin-left: 15rem;
    margin-bottom: 1rem;
}

}
@media (min-width: 830px){
      .fotos  {
    max-width:380px;
    max-height:400px;
    margin-right:2rem; 
    margin-left: 2.5rem;
    margin-bottom: 2rem;
    /* align-items: justify;
    margin-left: 26rem; */
}
}

@media (min-width: 830px){
      .f-5  {
    max-width:380px;
    max-height:400px;
    margin-left: 15rem; 
    
    /* align-items: justify;
    margin-left: 26rem; */
}
}



@media (min-width: 930px){
      .fotos  {
    max-width: 800px;
    max-height:800px;
    margin-left: 4rem; 

}
}

@media (min-width: 930px){
      .f-5  {
    max-width: 800px;
    max-height:800px;
    margin-left: 17rem; 

}
}


@media (min-width: 1230px){
      .fotos  {
    width:980px;
    height:500px;   
    margin-left: 17rem;
      }
}

#p-familia {
    font-family: 'Lobster', sans-serif;
     font-style: italic;
    text-align: center;
      letter-spacing: 1px;
        line-height: 1.8;
          word-spacing: 3px;
          font-size: 1.2rem;
}


    
</style>