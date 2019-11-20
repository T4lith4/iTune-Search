import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "../App.css";

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className="drop-background dropdown-button">
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Search <span role="img" aria-label="magnifying glass">&#128269;</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="/music">Music</DropdownItem>
          <DropdownItem href ="/movies">Movies</DropdownItem>
          <DropdownItem href="/videos">Music Videos</DropdownItem>
          <DropdownItem href="/audiobooks">Audio Books</DropdownItem> 
        </DropdownMenu>
      </Dropdown>
      </div>
    );
  }
}
