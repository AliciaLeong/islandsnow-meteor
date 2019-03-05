import React from 'react';
import { Container, Menu, Dropdown } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu" id="middlez">
          <Container>
            <Dropdown item text="MEN" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>shirts</Dropdown.Item>
                <Dropdown.Item>Sweaters</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="WOMEN" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>shirts</Dropdown.Item>
                <Dropdown.Item>Dresses</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="KIDS" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="BRANDS" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>shirts</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item fitted>SEARCH</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
