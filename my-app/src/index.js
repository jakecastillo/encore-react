import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon, Dropdown, Image, Grid, List, Input, Label } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item position="left"><img src="http://courses.ics.hawaii.edu/ics314s20/morea/ui-frameworks/rwod-encore-saloon-logo.png"></img></Menu.Item>
            <Menu.Item position="right"> Home </Menu.Item>
            <Menu.Item> Location </Menu.Item>
            <Dropdown item text="Menus" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>Food</Dropdown.Item>
                <Dropdown.Item>Drink</Dropdown.Item>
                <Dropdown.Item>Catering</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item> Contact </Menu.Item>
            <Menu.Item> Tel: 808.367.1656 </Menu.Item>
          </Container>
        </Menu>
  )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <div className="encore-background">
        </div>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <container>
          <Grid>
            <Grid.Row columns={1}>
              <Grid.Column>
          <div class="footer-one">
          <Menu.Item> <a target="_blank" href="http://facebook.com/encoresaloon">Facebook</a>&nbsp;-&nbsp;<a target="_blank" href="http://instagram.com/encoresaloon">Instagram</a> </Menu.Item>

            <Menu.Item><a href="#">10 North Hotel Street, Honolulu, HI 96817</a></Menu.Item>

          <Menu.Item> Monday - Thursday 11:00 am - 12:00 am and Friday - Saturday 11:00 am -1:00 am </Menu.Item>

          <Menu.Item> Copyright 2016 Encore Saloon</Menu.Item>
          </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </container>
    )
  }
}

class Encore extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<Encore/>, document.getElementById('root'));