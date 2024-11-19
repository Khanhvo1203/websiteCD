import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { BsArrowDown } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function DropdownComp({ items, title }) {
  console.log(items);
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => setShow(false);

  return (
    <Dropdown
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      show={show}
    >
      <Dropdown.Toggle
        variant="light"
        id="dropdown-basic"
        className="lg:hover:text-blue-400"
      >
        <span className="font-medium">{title}</span>
        <MdKeyboardArrowDown className="text-blue-400" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-right custom-dropdown">
        {items
          ? items.map((item, index) => (
              <Dropdown.Item key={index}>{item}</Dropdown.Item>
            ))
          : "" // Optional: message when no items
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}
