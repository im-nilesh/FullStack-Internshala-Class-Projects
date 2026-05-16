// Build a React component called Gadgets that receives an array of products as a prop. Render each product's name, description,
//  and price as an ordered list. Add a border around the product details which has price above 50000

export default function Gadgets({ products }) {
  return (
    <div>
      <ol>
        {products.map((item) => {
          return (
            <li
              style={{
                border: item.price > 50000 ? "2px solid black" : "none",
              }}
            >{`${item.name}, ${item.description}, 
        ${item.price}`}</li>
          );
        })}
      </ol>
    </div>
  );
}
