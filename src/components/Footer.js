import React from 'react';
import {Container, Image, List, Segment} from "semantic-ui-react";
import logo from "../logo.png";

function Footer(props){
    return (
      <div>
          <Segment inverted style={{ margin: '5em 0em 0em', padding: '2em 0em' }} vertical>
              <Container textAlign='center'>
                  <Image src={logo} centered size='mini' />
                  <List horizontal inverted divided link size='small'>
                      <List.Item as='a' href='#'>
                          Site Map
                      </List.Item>
                      <List.Item as='a' href='#'>
                          Contact Us
                      </List.Item>
                      <List.Item as='a' href='#'>
                          Terms and Conditions
                      </List.Item>
                      <List.Item as='a' href='#'>
                          Privacy Policy
                      </List.Item>
                  </List>
              </Container>
          </Segment>
      </div>
    );
}

Footer.propTypes = {};

export default Footer;
