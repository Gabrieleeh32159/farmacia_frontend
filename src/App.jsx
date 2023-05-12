import { useEffect, useState } from "react"
import Product from "./components/Product"

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/farmacos")
      .then((res) => (res.json()))
      .then((response) => {
        console.log(response)
        setProducts(response.farmacos)
      });
  },[])

  return (
    <main className="pt-5">
      <h1 className="text-center text-5xl font-bold">Farmacia</h1>
      <div className="flex justify-between flex-wrap gap-10 p-10">
        {
          products.map((product) => (
            <Product key={product.id} product={product} setProducts={setProducts}/>
          ))
        }
      </div>
    </main>
  )
}

export default App
