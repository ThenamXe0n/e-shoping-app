const ProductPage = () => {
  return (
    <>
    <div className="grid-cols-2 grid">
      <div className="p-4 m-2">
        <div>
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="main Product" />
        </div>
        <div className="flex my-3 gap-4">
            <img className="h-32" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="main Product" />
            <img className="h-32" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="main Product" />
            <img className="h-32" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="main Product" />
            <img className="h-32" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="main Product" />
        </div>
      </div>
      <div className="p-4 m-2">
        <h5 className="text-sm ">File Path</h5>
        <h2 className="text-4xl my-2 font-semibold">Title</h2>
        <h3 className="text-2xl font-semibold">$ <span>Price</span></h3>
        <span className="my-1 block">Key features</span>
        <ul className="px-8">
            <li className="list-disc text-sm">List item 1</li>
            <li className="list-disc text-sm">List item 2</li>
            <li className="list-disc text-sm">List item 3</li>
        </ul>
        <div className="my-3">
            <button className="border px-3 bg-gray-200 py-1">-</button><span className="border px-3 py-1">Value</span><button className="border px-3 bg-gray-200 py-1">+</button>
        <button className="mx-5 bg-[#24333e] py-1 px-3 text-white font-semibold">Add to cart</button>
        </div>
      </div>
    </div></>
  );
};

export default ProductPage;
