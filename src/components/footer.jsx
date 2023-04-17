const react = require("react");

function footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {currYear}</p>
    </footer>
  );
}

export default footer;
