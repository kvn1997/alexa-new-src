<template>
    <div>
        <footer class="d-flex">
<section>
    <H1 class=" lalla text-center font-italic" >Follow me</H1>
  <img class="card, fluid, m-4" style="width:150px" src="@/assets/imgs/lalla.jpg" alt="Card image">
  <img class="card, fluid, m-4" style="width:150px" src="@/assets/imgs/lalla2.jpg" alt="Card image">
  <img class="card, fluid, m-4" style="width:150px" src="@/assets/imgs/5.jpg" alt="Card image">
<br>
<br>
<div class="text-center">
           <a id="facebook" href="#" class="fa fa-facebook"></a>
           <a href="#" class="fa fa-instagram"></a>
           <a href="#" class="fa fa-pinterest"></a>
</div>
<br>
</section>
<section>
    <br>
    <br>
<h7 id="copyr" class="m-5">©2020 DreamArt Photography</h7>
</section>
<section class="list-inline ml-5">
  <div class="lalla1">
<h1 class="lalla font-italic">Explora</h1> 
        <b-nav-item class="" to="/">Home</b-nav-item>
        <b-nav-item to="/Galeria">Galeria</b-nav-item>
        <b-nav-item to="/Contacto">Contactos</b-nav-item>

</div>

</section>
        </footer>
    </div>
</template>
<style>
.lalla{
  font-family: 'Lora', serif;
  }


.fa {
  margin-left: 4rem;
  font-size: 3rem;
  height: 3rem;
  text-align: center;
  text-decoration: none;
  width: 3rem;
}
.fa:hover {
    opacity: 0.7;
}
.fa-instagram {
  color: 125688;
}
.fa-facebook {
  color: blue;
}
.fa-pinterest {
  color: #cb2027;;
}
  @media (min-width: 374px){
       .footer-media {
    width:250px;
    height:320px;
}
.lalla1 {
  display:none;
}
  }
  @media (min-width: 1100px){
    .lalla1 {
      display: block;
    } }
    @media (min-width: 1400px){
    .lalla1 {
      display: block;
      margin-left:20rem;
    } 
    #copyr {
      padding-left: 20rem;
    }
   
}
  
</style>