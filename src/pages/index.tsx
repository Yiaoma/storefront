import { GrFormClose } from "react-icons/gr";

const CartItem = () => {
  return (
    <li className="flex shrink-0">
      <div className="w-24 h-24 shrink-0 bg-neutral-100 rounded-md"></div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between font-medium text-neutral-900">
            <h3>Throwback Hip Bag</h3>
            <p className="ml-4">$90.00</p>
          </div>
          <p className="mt-1 text-sm text-neutral-500">Salmon</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-neutral-500">Qty 1</p>
          <p className="font-medium text-indigo-500">Remove</p>
        </div>
      </div>
    </li>
  );
};

const Index = () => {
  return (
    <section className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col h-screen w-full bg-neutral-100">
        <div className="py-6 border-b">
          <h1 className="text-center">Header</h1>
        </div>
        <div className="py-6 flex-1 overflow-y-scroll">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="py-6 border-t">
          <h1 className="text-center">Footer</h1>
        </div>
      </div>
    </section>
    // <section className="max-w-screen-2xl mx-auto">
    //   <div className="h-screen max-w-md">
    //     <div className="flex grow-0 shrink-0 justify-between px-4 pt-6">
    //       <p className="text-lg font-medium font-neutral-900">Shopping cart</p>
    //       <GrFormClose className="text-2xl" />
    //     </div>
    //     <ul className="px-4 grow overflow-y-scroll py-6 space-y-4">
    //       <CartItem />
    //       <CartItem />
    //       <CartItem />
    //       <CartItem />
    //       <CartItem />
    //       <CartItem />
    //       <CartItem />
    //     </ul>
    //     <div className="border-t grow-0 shrink-0 px-4 pt-6">
    //       <div className="flex justify-between font-medium font-neutral-900">
    //         <p className="text-lg font-medium font-neutral-900">Subtotal</p>
    //         <p>$262.00</p>
    //       </div>
    //       <p className="mt-0.5 text-sm text-neutral-500">
    //         Shipping and taxes calculated at checkout.
    //       </p>
    //       <button className="w-full font-medium text-white py-3 rounded-md bg-indigo-500 mt-6">
    //         Checkout
    //       </button>
    //       <p className="text-center mt-6 text-sm text-neutral-500">
    //         or{" "}
    //         <span className="text-indigo-500 font-medium">
    //           Continue Shopping
    //         </span>
    //       </p>
    //     </div>
    //   </div>
    /* <div className="px-4 py-8 max-w-md h-screen">
        <div className="flex justify-between">
          <p className="text-lg font-medium font-neutral-900">Shopping cart</p>
          <GrFormClose className="text-2xl" />
        </div>
        <ul role="list" className="space-y-12 py-6 overflow-y-scroll">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </ul>
        <div className="py-6 border-t">
          <div className="flex justify-between font-medium text-neutral-900">
            <p>Subtotal</p>
            <p>$262.00</p>
          </div>
          <p className="text-sm mt-0.5 text-neutral-500">
            Shipping and taxes calculated at checkout.
          </p>
          <button className="bg-indigo-500 mt-6 text-white font-medium rounded-md px-6 py-3 text-lg shadow-sm w-full">
            Checkout
          </button>
        </div>
        <div className="mt-6 flex justify-center text-sm">
          <p>or </p>
          <button className="font-medium text-indigo-500">
            Continue Shopping &rarr;
          </button>
        </div>
      </div> */
    // </section>
  );
};

export default Index;
