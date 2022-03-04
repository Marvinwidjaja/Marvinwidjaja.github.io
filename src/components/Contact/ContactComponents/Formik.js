const Formik = (props) => {
  return <div onSubmit={props.onSubmit}>{props.children}</div>;
};

export default Formik;
