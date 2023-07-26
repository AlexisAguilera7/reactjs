const productList = [
 { id: '01', category: 'Pelotas', name: 'Pelota', stock: 10, precio: 500, description: 'Pelota Spanding', img: '../img/pelota.jpeg' },
 { id: '02', category: 'Camisetas', name: 'Camiseta', stock: 7, precio: 900, description: 'Camiseta de los Angeles Lakers', img: '../img/camiseta.jpeg' },
 { id: '03', category: 'Tableros', name: 'Tableros', stock: 24, precio: 1500, description: 'Tablero Spanding profesional', img: '../img/tableros.jpeg' },
 { id: '04', category: 'Zapatillas', name: 'Zapatillas', stock: 14, precio: 3000, description: 'Nike Lebron18 low', img: '../ img / zapatillas.jpeg' },
]

export const getProducts = () => {
 new Promise((resolve, reject) => {
  let error = false
  setTimeout(() => {
   if (error) {
    reject(`ups, algo salio mal`)
   } else {
    resolve(productList)
   }
  }, 2000)
 })
}

export const getItem = (id) => {
 return new Promise((resolve) => {
  setTimeout(() => {
   resolve(productList.find((item) => item.id === id))
  }, 2000)
 })
}


