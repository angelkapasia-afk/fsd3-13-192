const Hello = ()=>{
  return <h2> welcome to react 19</h2>
}
const Book =()=>{
  return <> 
  <h1>Book name: jungle book</h1>
  <h2> price:700</h2>
  <h3>rating:4.9</h3>
  </>

}





export default function App() {
  return( 
    <>
  <h1 className="text-4xl text-center bg-gray-600 text-white my-2 p-2">Hello React</h1>
<Hello />
<Book />
</>
  );

}
