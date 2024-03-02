import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ElementTypesText } from '../constants/elementTypes';
import { FaTimes } from 'react-icons/fa';
import { HiPlusSm, HiMinusSm } from 'react-icons/hi';
import { closeDrawer } from '../store/drawerSlice';
import { updateEditorElement } from '../store/globalSlice';

const EditDrawer = ({ activeElementId }) => {
  const { editorElements } = useSelector((state) => state.global);
  const element = editorElements.find((element) => element.id === activeElementId);

  const [placeHolder, setPlaceHolder] = useState(element.placeHolder);
  const [options, setOptions] = useState(element.options);

  const dispatch = useDispatch();

  const closeClick = () => {
    dispatch(closeDrawer());
  };

  const applyChanges = () => {
    const payload = {
      ...element,
      placeHolder,
    };

    if (element.type === 'dropdown') {
      payload.options = options;
    }

    dispatch(
      updateEditorElement({
        id: element.id,
        element: payload,
      })
    );

    closeClick();
  };

  const handleOptionLabelChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = {
      ...newOptions[index],
      label: value,
    };
    setOptions(newOptions);
  };

  const handleOptionValueChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = {
      ...newOptions[index],
      value,
    };
    setOptions(newOptions);
  };

  const handleOptionAdd = (index) => {
    const newOptions = [...options];
    newOptions.splice(index + 1, 0, {
      label: '',
      value: '',
    });
    setOptions(newOptions);
  };

  const handleOptionRemove = (index) => {
    setOptions((ex) => ex.filter((_, i) => i !== index));
  };

  const renderDropDownOptions = () => {
    return (
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-slate-500 text-left">
            <th className="p-2">Options</th>
            <th className="p-2">Value</th>
            <th className="p-2"></th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {options.map((option, index) => {
            return (
              <tr key={index} className="bg-white border-b">
                <td className="p-2">
                  <input
                    type="text"
                    className="w-full p-1 border rounded outline-none focus:border-slate-600"
                    value={option.label}
                    onChange={(event) => {
                      handleOptionLabelChange(index, event.currentTarget.value);
                    }}
                  />
                </td>
                <td className="p-2">
                  <input
                    type="text"
                    className="w-full p-1 border rounded outline-none focus:border-slate-600"
                    value={option.value}
                    onChange={(event) => {
                      handleOptionValueChange(index, event.currentTarget.value);
                    }}
                  />
                </td>
                <td className="p-2 w-5">
                  <button
                    onClick={() => handleOptionAdd(index)}
                    className="bg-green-500 p-1 rounded-sm hover:bg-green-600 transition-all"
                  >
                    <HiPlusSm className="text-gray-100" />
                  </button>
                </td>
                <td className="p-2 w-5">
                  {index !== 0 && (
                    <button
                      onClick={() => handleOptionRemove(index)}
                      className="bg-red-500 p-1 rounded-sm hover:bg-red-600 transition-all"
                    >
                      <HiMinusSm className="text-gray-100" />
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-white shadow-lg z-10 p-10 w-full max-w-xl flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">
          {ElementTypesText[element.type]}
        </h2>
        <button onClick={closeClick}>
          <FaTimes className="text-gray-500 hover:text-gray-700 transition-all" />
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-gray-600 font-semibold">Display Label</label>
        <input
          type="text"
          value={placeHolder}
          onChange={(e) => setPlaceHolder(e.target.value)}
          className="w-full border outline-none rounded p-2 focus:border-slate-700"
        />
      </div>

      {element.type === 'dropdown' && renderDropDownOptions()}

      <div className="mt-auto flex justify-end">
        <button
          onClick={applyChanges}
          className="px-4 py-2 bg-green-500 rounded font-semibold text-white hover:bg-green-600 transition-all"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default EditDrawer;
