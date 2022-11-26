import Dropdown from "react-bootstrap/Dropdown";

function Dropdowny({
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  onSelect,
}) {
  return (
    <Dropdown onSelect={onSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select Your Hero
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">{one}</Dropdown.Item>
        <Dropdown.Item href="#/action-2">{two}</Dropdown.Item>
        <Dropdown.Item href="#/action-3">{three}</Dropdown.Item>
        <Dropdown.Item href="#/action-4">{four}</Dropdown.Item>
        <Dropdown.Item href="#/action-5">{five}</Dropdown.Item>
        <Dropdown.Item href="#/action-6">{six}</Dropdown.Item>
        <Dropdown.Item href="#/action-7">{seven}</Dropdown.Item>
        <Dropdown.Item href="#/action-8">{eight}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Dropdowny;
