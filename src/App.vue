<template>
  <div id="app">    
      <b-navbar class="d-flex justify-content-center" type="dark" variant="dark">        
        <router-link class="pr-3 text-light" to="/">Home</router-link>  
        <router-link class="pr-3 text-light" to="/Sobre_mi">Sobre mi</router-link> 
        <h3>DreamArt <br> Photography</h3>
        <router-link class="pr-3 text-light" to="/Proyectos">Proyectos</router-link> 
        <router-link class="pr-3 text-light" to="/Galeria">Galeria</router-link> 
        <router-link class="pr-3 text-light" to="/Contacto">Contacto</router-link>         
      </b-navbar> 
      <router-view/>
  </div>  
</template>

