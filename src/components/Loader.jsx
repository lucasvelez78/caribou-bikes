import BeatLoader from "react-spinners/BeatLoader";

function Loader() {
  return (
    <div className="loader">
      <BeatLoader color="#3ccf4e" loading={true} />
    </div>
  );
}

export default Loader;
