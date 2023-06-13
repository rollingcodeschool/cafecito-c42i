// llamar a una variable de entorno
const URL_usuario = import.meta.env.VITE_API_USUARIO

/*
GET devuelven una lista de elementos o un elemento
POST me permiten crear un elemento
PUT / PATCH  me permiten editar un elemento
DELETE me permiten eliminar un elemento
*/ 
export const iniciarSesion = async (usuario)=>{
    try{
        const respuesta = await fetch(URL_usuario);
        const listausuarios = await respuesta.json();
        const usuarioBuscado = listausuarios.find((itemUsuario)=> itemUsuario.email === usuario.email);
        if(usuarioBuscado){
            // el mail era correcto
            if(usuarioBuscado.password === usuario.password){
                return usuarioBuscado;
            }else{
                console.log('password incorrecto');
                return null
            }
        }else{
            console.log('el mail no existe');
            //el mail no existe
            return null
        }
    }catch(error){
       console.log(error); 
    }
} 