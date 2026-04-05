import React, { use } from 'react';
import AvailableTools from './AvailableTools';

const ToolsData = ({selectedProducts, setSelectedProducts, toolsPromise}) => {

const toolsData = use(toolsPromise);
console.log(toolsData);
    return (
        <div>
            <AvailableTools toolsData={toolsData} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts}/>
        </div>
    );
};

export default ToolsData;