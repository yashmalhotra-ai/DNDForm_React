import React from 'react';
import DraggableTool from './Draggable';
import { MdTextRotationNone, MdOutlineTextRotateVertical } from 'react-icons/md';
import { IoIosArrowDropdown } from 'react-icons/io';
import { FaBox } from 'react-icons/fa';

const Toolbox = () => {
  return (
    <div className="bg-slate-600 flex flex-col flex-1 gap-4 w-full max-w-xs min-w-[20rem] p-4 rounded-lg">
      <h1 className="text-center text-2xl text-white">Toolbox</h1>
      <DraggableTool type="text-input">
        <div className="text-white hover:text-black cursor-pointer m-1.5 p-3 border-2 border-dashed border-gray-400 flex items-center justify-center rounded-lg hover:bg-gray-200 transition-all">
          <MdTextRotationNone className="text-xl" /> Text Input
        </div>
      </DraggableTool>
      <DraggableTool type="text-area">
        <div className="text-white hover:text-black cursor-pointer m-1.5 p-3 border-2 border-dashed border-gray-400 flex items-center justify-center rounded-lg hover:bg-gray-200 transition-all">
          <MdOutlineTextRotateVertical className="text-xl" /> Text Area
        </div>
      </DraggableTool>
      <DraggableTool type="dropdown">
        <div className="text-white cursor-pointer m-1.5 p-3 border-2 border-dashed border-gray-400 flex items-center justify-center rounded-lg hover:text-black hover:bg-gray-200 transition-all">
          <IoIosArrowDropdown className="text-xl" /> Dropdown
        </div>
      </DraggableTool>
      <DraggableTool type="button">
        <div className="text-white hover:text-black cursor-pointer m-1.5 p-3 border-2 border-dashed border-gray-400 flex items-center justify-center rounded-lg hover:bg-gray-200 transition-all">
          <FaBox className="text-xl" /> Submit
        </div>
      </DraggableTool>
    </div>
  );
};

export default Toolbox;
