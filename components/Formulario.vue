<template>
    <div id="formulario">
        <!-- sección de la foto -->
        <section class="section_foto d-flex">
            <div class="div_foto mr-5">
                <h2 class="nombre_contacto">Alexa Nicastro</h2>
                <img caption="hola" class="foto" src="../assets/imgs/alexa.jpg" alt="foto de mi">
            </div>
             <div class="section_formulario ml-5">
         
       
            <h2 class="ml-5">Consultas y Reservas</h2>
            
            <p class="parrafo_contacto ml-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nulla saepe quasi dignissimos, reprehenderit soluta blanditiis ipsum. Reiciendis ipsum sint architecto ab maiores minima praesentium fugit ut, saepe a voluptate.</p>
        
            
             <div class="ml-5">
                <label class="estilo_letra_labels" for="name">Nombre*</label>
                <input type="text" id="nombre" size="65">
                <br>
                <br>
                <label class="estilo_letra_labels" for="name">Email*</label>
                <input type="text" id="email" size="65">
                <br>
                <br>
                <label class="estilo_letra_labels" for="name">Fecha de tu reserva*</label>
                <input type="text" id="fecha" size="65">
                <br>
                <br>
                <label class="estilo_letra_labels" for="mensaje">¿Qué tienes planeado?¿Qué es importante para tí?</label>
                <br>
                <textarea name="" class="textarea" cols="67" rows="3"></textarea>
                <br>
                <input type="button" value="Enviar" class="btnEnviar">
            </div> 
      
    </div> 
        </section> 
        
    <br>
     <br>
      <br>
       <br>
        <br>

<!-- sección del formulario -->
        <hr align="center" noshade="noshade" size="4" width="100%" />

    </div>    

</template>





<script type="text/javascript">

// para exportar el componente llamado Formualario y lo recononozcan
export default {
  name: 'Formulario',  
}

// funcion para que cuando ponga el cursos en el input fecha se abre el datepicker de jquery
$(function() {
        $("#fecha").datepicker();
    });

// codigo para cambiar el datepicker a español
    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '< Ant',
        nextText: 'Sig >',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
        dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['es']);
    $(function() {
        $("#fecha").datepicker();
    });
</script>






<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: white;
}

.nombre_contacto {
    font-family: 'Sacramento', cursive;
}

.parrafo_contacto {
    font-family: 'Bad Script', cursive;
    width: 30rem;
}

.todo {
    display: flex;
    display: inline-block;
}


/* foto */



.div_foto {
    max-width: 400px;
    max-height: 700px;
    margin-top: 10rem;
    margin-left: 8rem;
}

@media (max-width: 380px) {
    .div_foto {
        max-width: 300px;
        max-height: 800px;
        margin-top: 8rem;
        margin-left: 2.5rem;
        margin-right: 2rem;
    }
}

.section_foto {
    width: 10px;
}
.section_foto {
    width: 10px;
}
.foto {
    background-image: url(../assets/imgs/2.jpg);
    max-width: 400px;
    max-height: 700px;
    border-radius: 1rem;
} 

@media (max-width: 380px) {
    .foto {
        background-image: url(../assets/imgs/2.jpg);
        max-width: 300px;
        max-height: 800px;
        border-radius: 2rem;
    }
}


/* formulario */

.section_formulario {
    float: right;
    width: 300px;
    
}

@media (max-width: 380px) {
    .section_formulario {
        float: right;
        max-width: 300px;
        margin-top: 2rem;
        margin-right: 1.5rem;
    }
}

.form {
    display: block;
}

@media (max-width: 380px) {
    #nombre {
        max-width: 18rem;
    }
}

@media (max-width: 380px) {
    #email {
        max-width: 18rem;
    }
}

@media (max-width: 380px) {
    #fecha {
        max-width: 18rem;
    }
}

@media (max-width: 380px) {
    .textarea {
        max-width: 18rem;
    }
}

.textarea {
    resize: none;
}


/* boton */

.btnEnviar {
    cursor: pointer;
    background-color: black;
    color: white;
    font-size: .8rem;
    padding: .5rem;
}

.btnEnviar:hover {
    opacity: .6;
}
</style>

