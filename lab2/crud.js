import readline from "readline/promises";
import { stdin, stdout } from "process";
import { writeFile, readFile } from "fs/promises";

const FILE = "product.json";

const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2));
};

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const addToCart = async (item) => {
  const products = await getCart();
  const productFound =products.find((p) => p.id === item.id);
  if(productFound){
    productFound.qty += item.qty;
    console.log("priduct in cart quantity updated");
  }else{
  products.push(item);
  console.log("product added successfully 👍");
  }
  await saveCart(products);
};

const showCart = () => {
  console.log("show cart");
};

const removeCart = () => {
  console.log("remove item");
};

const updateCart = () => {
  console.log("update the cart");
};


const main = async () => {
  const cin = readline.createInterface({ input: stdin, output: stdout });

  let choice;

  do {
    console.log("Welcome to shopping cart 🛍️ ");
    console.log("1   Add to cart");
    console.log("2   show cart");
    console.log("3   Remove item");
    console.log("4   update quantity");
    console.log("5   checkout");

    choice = await cin.question("Enter your choice :");
    console.log("Entered choice:", choice);

    switch (Number(choice)) {
      case 1:
    
        let data = await cin.question("enter id, name,price,qty:");
        let p = data.split(",");
        let q = p.map((item) => item.trim());
       let[ id,name,price,qty] = q;
       console.log(id,name,price,qty);
       const product = {
         id: Number(id),
         name,
         price: Number(price),
         qty: Number(qty),
       };
       //console.log(product);
       await addToCart(product);
        break;
       

      case 2:
        showCart();
        break;

      case 3:
        removeCart();
        break;

      case 4:
        updateCart();
        break;

      case 5:
        console.log("see you later... 😄");
        process.exit();
        break;

      default:
        console.log("Invalid choice! try again 😕");
    }
  } while (choice != 5);

  cin.close();
};

main();
