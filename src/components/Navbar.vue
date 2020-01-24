<template>
  <div class="background">    
    <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Dream Art Photography</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
            
        <b-nav-item to="/Galeria">Galeria</b-nav-item>
        <b-nav-item to="/Contacto">Contactos</b-nav-item>

      </b-navbar-nav>
    
    </b-collapse>
  </b-navbar>
</div>
      <router-view/>
  </div>  
  
</template>


<script>
export default {
    name: 'Navbar'    
}
</script>