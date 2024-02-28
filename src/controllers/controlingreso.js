//DECLARANDO VARIABLES CON JS DESDE EL DOM


let usuarioBaseDatos="sura45"
let contrasenaBaseDatos="12345"
let correoBaseDatos="savelo@gmail.com"

let botonFormulario=document.getElementById("botonIngreso")
let cajaFormularioEmail=document.getElementById("email")
let cajaFormularioNombre=document.getElementById("nombre")
let cajaFormularioPassword=document.getElementById("password")

//DETECTANDO EVENTOS CON JS
botonFormulario.addEventListener("click",function(evento){

    evento.preventDefault()

   //1.capturamos la informacion del formulario
   let nombreUsuario=cajaFormularioNombre.value  
   let correoUsuario=cajaFormularioEmail.value 
   let passwordUsuario=cajaFormularioPassword.value


   //Validando los datos del usuario
   if(usuarioBaseDatos==nombreUsuario && contrasenaBaseDatos==passwordUsuario && correoBaseDatos==correoUsuario){
    Swal.fire({
        title: "Bienvenido "+nombreUsuario,
        text: "Tus credenciales son correctas",
        icon: "success"
      })

      setTimeout(function(){
         sessionStorage.setItem("nombre",nombreUsuario)
         sessionStorage.setItem("password",passwordUsuario)
         sessionStorage.setItem("email",correoUsuario)
         window.location.href="./src/views/home.html"
      },3000)
      

   }else{
        Swal.fire({
        icon: "error",
        title: "Oops..."+nombreUsuario+ "tienes problemas",
        text: "Verifica tus credenciales",        
      });
   }
})

cajaFormularioEmail.addEventListener("click", function(){alert("digite su Email")})
cajaFormularioNombre.addEventListener("click", function(){alert("digite su nombre")})
cajaFormularioPassword.addEventListener("click", function(){alert("digite su contraseña")})

/*cajaFormularioEmail.addEventListener("click", function(){alert("digite su Email")})
cajaFormularioNombre.addEventListener("click", function(){alert("digite su nombre")})
cajaFormularioPassword.addEventListener("click", function(){alert("digite su contraseña")})
*/