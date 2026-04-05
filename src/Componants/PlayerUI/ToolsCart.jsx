import React from "react";
import { toast } from "react-toastify";

const ToolsCart = ({ selectedProducts, setSelectedProducts, tool }) => {
  const notify = () => toast(`${tool.name} added to cart!`);

  const handleClick = () => {
    setSelectedProducts([...selectedProducts, tool]);
    notify();
  };

  return (
    <div>
      <div className="relative rounded-lg bg-slate-50 p-6 sm:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
        <span className="absolute right-4 top-4 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase px-3 py-1 shadow-sm">
          {tool.tag}
        </span>

        <div className="grid h-18 w-18 place-items-center rounded-2xl bg-violet-100 text-violet-700">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.72 2.65a1.5 1.5 0 0 0-2.12 0L6.27 6.99a1.5 1.5 0 0 0-.39.9l-.24 3.42a.75.75 0 0 0 .75.78l3.42-.25a1.5 1.5 0 0 0 .9-.4l4.33-4.33a1.5 1.5 0 0 0 0-2.12l-1.92-1.92ZM5.74 14.75a.75.75 0 0 0-.74.75v2.5c0 .69.56 1.25 1.25 1.25h2.5a.75.75 0 0 0 0-1.5H6.25v-1.75a.75.75 0 0 0-.51-.72l-.0-.03Zm7.89-7.88l-4.33 4.32a.75.75 0 0 1-1.06 0l-1.6-1.6a.75.75 0 0 1 0-1.06l4.33-4.33a.75.75 0 0 1 1.06 0l1.6 1.6a.75.75 0 0 1 0 1.06Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              {tool.name}
            </h2>
            <p className="text-sm text-slate-500">{tool.description}</p>
          </div>
        </div>

        <div className="flex items-end gap-2 mb-6">
          <span className="text-4xl font-extrabold text-slate-900">
            ${tool.price}
          </span>
          <span className="text-sm text-slate-500">/{tool.period}</span>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-slate-700">
            <svg
              className="h-5 w-5 text-emerald-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 16.17l-3.88-3.88a.75.75 0 1 0-1.06 1.06l4.41 4.41a.75.75 0 0 0 1.06 0l9.19-9.19a.75.75 0 1 0-1.06-1.06L9 16.17Z"
                fill="currentColor"
              />
            </svg>
            <span>{tool.features[0]}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-700">
            <svg
              className="h-5 w-5 text-emerald-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 16.17l-3.88-3.88a.75.75 0 1 0-1.06 1.06l4.41 4.41a.75.75 0 0 0 1.06 0l9.19-9.19a.75.75 0 1 0-1.06-1.06L9 16.17Z"
                fill="currentColor"
              />
            </svg>
            <span>{tool.features[1]}</span>
          </div>
          <div className="flex items-center gap-3 text-slate-700">
            <svg
              className="h-5 w-5 text-emerald-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 16.17l-3.88-3.88a.75.75 0 1 0-1.06 1.06l4.41 4.41a.75.75 0 0 0 1.06 0l9.19-9.19a.75.75 0 1 0-1.06-1.06L9 16.17Z"
                fill="currentColor"
              />
            </svg>
            <span>{tool.features[2]}</span>
          </div>
        </div>

        <button
          className="w-full rounded-2xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/10 transition hover:bg-violet-700"
          onClick={handleClick}
        >
          {selectedProducts.some((product) => product.id === tool.id)
            ? "Added to Cart"
            : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ToolsCart;
