import React, { Fragment, useRef, useImperativeHandle } from "react";

const TextArea = React.forwardRef((props, ref) => {
  const textAreaRef = useRef();

  const activate = () => {
    textAreaRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <Fragment>
      <textarea
        ref={textAreaRef}
        rows={props.rows}
        cols={props.cols}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </Fragment>
  );
});

export default TextArea;
