import { useContext } from "react";
import { FormspreeProvider } from "@formspree/react";
import ComponentContext from "../../store/component-context";
import LeftComponentComponent from "./ContactComponents/LeftComponentComponent";
import RightContentComponent from "./ContactComponents/RightContentComponent";

import classes from "./Contact.module.css";

const Contact = () => {
  const componentNameCtx = useContext(ComponentContext);
  Contact.displayName = "Contact";
  const componentIdentifier = Contact.displayName;
  componentNameCtx.componentNameFunction(componentIdentifier);

  return (
    <div className={`${classes.contact} ${classes.animation}`}>
      <LeftComponentComponent />
      <FormspreeProvider project="1890396208996810406">
        <RightContentComponent />
      </FormspreeProvider>
    </div>
  );
};

export default Contact;
