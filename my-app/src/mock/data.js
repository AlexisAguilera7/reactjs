const productList = [
 { id: `01`, name: `Pelota`, stock: 10, precio: 500, description: `Pelota Spanding`, img: `../img/pelota.jpeg` },
 { id: `02`, name: `Camiseta`, stock: 7, precio: 900, description: `Camiseta de los Angeles Lakers`, img: `../img/camiseta.jpeg` },
 { id: `03`, name: `Tableros`, stock: 24, precio: 1500, description: `Tablero Spanding profesional`, img: `../img/tableros.jpeg` },
 { id: `04`, name: `Zapatillas`, stock: 14, precio: 3000, description: `Nike Lebron18 low`, img: `../img/zapatillas.jpeg` },
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

export const getItem = () => {
 return new Promise((resolve) => {
  setTimeout(() => {
   resolve(productList[3])
  }, 2000)
 })
}


