import BasicProduct from "./components/BasicProduct";

function App() {

  const products = [
    {title: "milk", price: "10", imageUrl: "../public/images/milk.jpeg"}
  ]
  return (
    <div> 
      <h2> products </h2>
      <BasicProduct
        title={products[0].title}
        price={products[0].price}
        imageUrl={products[0].imageUrl} />
    </div>
  );
}

export default App;
