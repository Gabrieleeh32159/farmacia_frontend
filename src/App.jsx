import { useEffect, useState } from "react"
import Product from "./components/Product"

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const response = fetch("http://localhost:3000/farmacos")
      .then((res) => (res.json()))
      .then((response) => {
        console.log(response)
        setProducts(response.farmacos)
      });
  },[])

  return (
    <>
      <h1 className="text-center text-5xl font-bold">Products</h1>
      <div className="flex flex-wrap gap-5 p-10">
        {
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
}

export default App
