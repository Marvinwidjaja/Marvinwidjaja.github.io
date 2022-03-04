import React, { useState, useEffect } from "react";

const ComponentContext = React.createContext({
  componentNameFunction: () => {},
  componentName: "",
  dropdownBtnState: false,
  dropdownBtnHandler: () => {},
  onCloseDropdown: () => {},
});

export const ComponentContextProvider = (props) => {
  const [componentName, setComponentName] = useState("");
  const componentNameHandler = (name) => {
    setTimeout(() => {
      setComponentName(name);
    }, 100);
  };

  const [dropdownBtnState, setDropdownBtnDtate] = useState(false);
  const onCloseDropdown = () => {
    setDropdownBtnDtate(false);
  };

  const onShowDropdown = () => {
    setDropdownBtnDtate(true);
  };

  const dropdownBtnHandler = () => {
    if (dropdownBtnState) {
      onCloseDropdown();
      return;
    }
    onShowDropdown();
  };

  useEffect(() => {
    if (componentName) {
      onCloseDropdown();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [componentName]);

  return (
    <ComponentContext.Provider
      value={{
        componentNameFunction: componentNameHandler,
        componentNameVar: componentName,
        dropdownBtnState: dropdownBtnState,
        dropdownBtnHandler: dropdownBtnHandler,
        onCloseDropdown: onCloseDropdown,
      }}
    >
      {props.children}
    </ComponentContext.Provider>
  );
};

export default ComponentContext;
