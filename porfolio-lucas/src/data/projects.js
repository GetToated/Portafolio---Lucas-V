export const PROJECTS = [
  {
    title: 'Filtrar Paises',
    description: 'Esta aplicacion web sirve para filtrar paises y ver informacion, cuando escribes un pais en el buscador, se conecta a una API Externa con la informacion de los paises y carga la bandera, la capital y la poblacion. Incluso solo con poner las primeras letras ya funcionaria. (Aclarar que funciona mejor escribiendo los Idiomas en ingles)',
    technologies: ['Angular', 'HTML', 'CSS', 'TS'], 
    image: '/assets/proyecto1.jpg', 
    github: 'https://github.com/GetToated/ExamenCliente', 
    liveDemo: 'https://lively-biscotti-d69812.netlify.app/buscar', 
  },
  {
    title: 'Lucas Store',
    description: 'Esta es una tienda web desarrollada con Angular que consume datos de productos desde una API externa llamada FakeStore. Los productos se muestran en tarjetas (cards), cada una con un botón para agregar el artículo al carrito de compras. Tenemos un boton para actualizar y muestre mas cards, hecho con un LIMIT. En la parte superior hay un ícono de carrito que muestra dinámicamente la cantidad total de productos añadidos. Al hacer clic en carrito, el usuario accede a la página donde puede visualizar los productos seleccionados, con la opción de eliminar artículos o ajustar la cantidad mediante botones para aumentar o disminuir unidades. El precio total se actualiza automáticamente según los productos y cantidades en el carrito. Para mejorar la experiencia, se implementó un indicador de carga (loading) mientras se obtienen los datos de la API y durante la navegación entre páginas. Actualmente, la aplicación no es responsive, pero se planea implementar esta funcionalidad próximamente. He seguido un curso/guia para poder seguir aumentando mis conocimientos de Angular!',
    technologies: ['Angular', 'HTML', 'CSS', 'TS', 'Tailwindcss'], 
    image: '/assets/lucas-shop.png', 
    github: 'https://github.com/GetToated/Angular-Project/tree/main/signal-store-lucas', 
    liveDemo: 'https://effulgent-nasturtium-fa3c84.netlify.app/products', 
  },


];