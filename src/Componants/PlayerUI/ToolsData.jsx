import React, { use } from 'react';
import AvailableTools from './AvailableTools';

const ToolsData = ({toolsPromise}) => {

const toolsData = use(toolsPromise);
console.log(toolsData);
    return (
        <div>
            <AvailableTools toolsData={toolsData}/>
        </div>
    );
};

export default ToolsData;