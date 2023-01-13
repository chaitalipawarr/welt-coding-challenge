import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="loader-wrapper" data-testid="loader">
      <span className="loader"></span>
    </div>
  );
};

export default Spinner;
