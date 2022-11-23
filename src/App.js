import BasicProduct from "./components/BasicProduct";

function App() {

  const products = [
    {title: "milk", price: "10", imageUrl: "../public/images/milk.jpeg"},
    {title: "pasta", price: "5", imageUrl: "../public/images/pasta.jpeg"}
  ]
  return (
    <div> 
      <h2> products </h2>
      {products.map((product,index) =>{
        return (<BasicProduct
                  key={index}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl} />)
      })}
    </div>
  );
}

export default App;
