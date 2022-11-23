import BasicProduct from "./components/BasicProduct";

function App() {

  const products = [
    {title: "milk", price: "10", imageUrl: "../public/images/milk.jpeg"}
  ]
  return (
    <div> 
      <h2> products </h2>
      {products.map(product =>{
        return (<BasicProduct
          title={product.title}
          price={product.price}
          imageUrl={product.imageUrl} />)
      })}
    </div>
  );
}

export default App;
