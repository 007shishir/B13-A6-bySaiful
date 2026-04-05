import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import EmptyCart from '../Main/EmptyCart';

const SelectedTools = ({ selectedProducts, setSelectedProducts }) => {
  const total = selectedProducts.reduce((sum, item) => sum + Number(item.price || 0), 0);

  const removeProduct = (id) => {
    setSelectedProducts(selectedProducts.filter((product) => product.id !== id));
  };

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Your Cart</h2>
          </div>
          <div className="badge badge-outline badge-lg text-slate-700">
            {selectedProducts.length} Item{selectedProducts.length === 1 ? '' : 's'}
          </div>
        </div>

        <div className="space-y-4">
          {selectedProducts.length === 0 ? <EmptyCart /> : (
            selectedProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-violet-100 text-violet-700 shadow-sm">
                    {product.name?.charAt(0) || 'P'}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{product.name}</h3>
                    <p className="text-sm text-slate-500">${product.price}</p>
                  </div>
                </div>
                <button
                  className="btn btn-ghost btn-sm text-pink-600 hover:bg-pink-50"
                  onClick={() => removeProduct(product.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <div className="mt-8 flex flex-col items-end gap-4 text-right sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-sm text-slate-500">Total</p>
            <p className="text-3xl font-semibold text-slate-900">${total}</p>
          </div>
          <button className="btn btn-primary btn-wide rounded-full px-8 py-4 text-base font-semibold shadow-lg shadow-violet-500/10 hover:bg-violet-700" onClick={() => setSelectedProducts([])}>
            Proceed To Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default SelectedTools;