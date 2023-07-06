const URL_usuario = import.meta.env.VITE_API_USUARIOS;
const URL_producto = import.meta.env.VITE_API_PRODUCTO;

export const iniciarSesion = async (usuario)=>{
    try{
        const respuesta = await fetch(URL_usuario);
        const listausuarios = await respuesta.json();
        const usuarioBuscado = listausuarios.find((itemUsuario)=> itemUsuario.email === usuario.email);
        if(usuarioBuscado){
            if(usuarioBuscado.password === usuario.password){
                return usuarioBuscado;
            }else{
                console.log('password incorrecto');
                return null
            }
        }else{
            console.log('Email no existe');
            return null
        }
    }catch(error){
       console.log(error); 
    }
} 

export const obtenerListaProductos= async()=>{
    try{
     const respuesta = fetch(URL_producto);
     const listaProductos = (await respuesta).json();
     return listaProductos
    }catch(error){
     console.log(error)
    }
}