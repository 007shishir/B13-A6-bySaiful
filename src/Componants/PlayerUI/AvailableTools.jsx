import React from "react";
import ToolsCart from "./ToolsCart";

const AvailableTools = ({selectedProducts, setSelectedProducts, toolsData }) => {
  console.log(toolsData);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 container mx-auto bg-white ">
      {toolsData.map((tool) => (

<ToolsCart key={tool.id} tool={tool} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} />
      ))}

      
    </div>
  );
};

export default AvailableTools;
