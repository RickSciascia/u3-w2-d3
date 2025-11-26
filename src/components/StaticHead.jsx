import Dropdown from "react-bootstrap/Dropdown";

const StaticHead = function () {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <h2 className="mb-4">TV Shows</h2>
        <Dropdown>
          <Dropdown.Toggle
            className="rounded-0 bg-transparent border border-white ms-4 mt-1"
            id="dropdown"
          >
            Genres
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Comedy</Dropdown.Item>
            <Dropdown.Item href="#">Drama</Dropdown.Item>
            <Dropdown.Item href="#">Thriller</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <i className="bi bi-grid icons"></i>
        <i className="bi bi-grid-3x3 icons"></i>
      </div>
    </div>
  );
};

export default StaticHead;
