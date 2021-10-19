$(document).ready( () => {

    setTimeout( () => {
        $('.loader').css({
             opacity: 0,
             visibility: "hidden"
         })
     }, 1000)
 })




const carrito = []

 const productos = [

    {
        nombre: 'Producto 1',
        id: 1,
        precio: 100
    },
    {
        nombre: 'Producto 2',
        id: 2,
        precio: 200
    },
    {
        nombre: 'Producto 3',
        id: 2,
        precio: 300
    },


 ]

 productos.forEach((pro) =>{
     $('#contenedor').append(`

      <h2>${pro.nombre}</h2>
      <p>precio: $${pro.precio}</p>
      <small>codigo: ${pro.id}</small><br>
      <button class="btn btn-dark">AGREGAR AL CARRITO</button>
       <hr>
     `)
 })