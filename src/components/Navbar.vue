<template>
  <div id="navbar" class="d-flex, background">          
        <router-link class="pr-3 text-dark" to="/">Home</router-link>  
        <router-link class="pr-3 text-dark" to="/Sobre_mi">Sobre mi</router-link> 
        <h3>DreamArt <br> Photography</h3>
        <router-link class="pr-3 text-dark" to="/Proyectos">Proyectos</router-link> 
        <router-link class="pr-3 text-dark" to="/Galeria">Galeria</router-link> 
        <router-link class="pr-3 text-dark" to="/Contacto">Contacto</router-link>         
      <router-view/>
  </div>  
</template>

<script>
export default {
    name: 'Navbar'    
}
</script>