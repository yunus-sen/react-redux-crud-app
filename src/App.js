import React, {Component} from 'react';
import {Link,Route} from "react-router-dom";
import MoviesPage from "./components/pages/MoviesPage";
import {connect} from "react-redux";
import 'semantic-ui-css/semantic.min.css'
import logo from'./logo.png'
import{menuStyle,fixedMenuStyle,overlayStyle} from"./helper/styleHelper"

import {
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react'

class App extends Component {

    state = {
        menuFixed: false,
        overlayFixed: false,
    }

    stickTopMenu = () => this.setState({ menuFixed: true })

    unStickTopMenu = () => this.setState({ menuFixed: false })
    render() {
        const { menuFixed, overlayFixed, overlayRect } = this.state
        return (

            <div >
                <div>

                    <Visibility
                        onBottomPassed={this.stickTopMenu}
                        onBottomVisible={this.unStickTopMenu}
                        once={false}
                    >
                        <Menu
                            borderless
                            fixed={menuFixed ? 'top' : undefined}
                            style={menuFixed ? fixedMenuStyle : menuStyle}
                        >
                            <Container text>
                                <Menu.Item>
                                    <Image size='mini' src={logo}/>
                                </Menu.Item>
                                <Menu.Item header>Movie APP</Menu.Item>
                                <Menu.Item as={Link} to={"/movies"}>Movies</Menu.Item>
                                <Menu.Item as='a'>News Movie</Menu.Item>
                            </Container>
                        </Menu>
                    </Visibility>

                    <Container text>

                        <Route path={"/movies"} strict exact render={()=>{
                            return(
                                <div>
                                    <MoviesPage id={5}/>
                                </div>
                            )
                        }}/>

                        <hr/>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at consequuntur eius
                            eligendi enim, eveniet fugiat laboriosam magnam mollitia natus omnis praesentium quas quo
                            quod saepe sed sequi totam, vitae.
                        </div>
                        <div>At atque dolor dolorem facilis fugit itaque odio sapiente voluptatem. Accusamus nobis omnis
                            reiciendis sapiente totam? Accusamus, aperiam consequuntur doloribus earum eos eveniet, hic
                            impedit itaque laborum, odit perspiciatis rerum.
                        </div>
                        <div>Dolorum eius et in iste molestiae. Accusantium architecto corporis officiis omnis optio
                            reprehenderit repudiandae vero. Corporis delectus deleniti dolor doloremque iste modi
                            placeat temporibus ullam ut voluptates! Minima, quisquam vero.
                        </div>
                        <div>Culpa cumque cupiditate dolore doloremque doloribus, dolorum et explicabo illum in iure
                            labore necessitatibus numquam pariatur provident temporibus voluptas voluptates! Accusantium
                            deserunt doloribus eligendi et harum ipsam neque nulla, quis?
                        </div>
                        <div>Accusamus beatae dolorem id maxime necessitatibus nesciunt officia provident rem vitae?
                            Aspernatur exercitationem fuga recusandae saepe veniam? Eligendi exercitationem harum
                            laborum possimus, quod repudiandae sit tempore unde vel voluptates. Aliquid?
                        </div>
                        <div>Eum explicabo fuga hic impedit itaque molestiae mollitia quae quam sit soluta! Deleniti
                            distinctio enim error est iste itaque quas quis repellendus tenetur vero. Aperiam at et eum
                            ex maiores.
                        </div>
                        <div>A ad adipisci animi cum distinctio dolores esse facilis fuga hic illo illum ipsam laborum
                            minus nemo nesciunt, non obcaecati officia provident quod saepe tempore tenetur ut veniam
                            voluptatibus voluptatum?
                        </div>
                        <div>Amet dolorum laborum necessitatibus nobis quasi! Aliquam autem commodi consectetur deleniti
                            error esse, labore maxime, modi mollitia, nisi obcaecati rem sapiente tempore. Animi debitis
                            dolores harum optio quam quis repellat.
                        </div>
                        <div>Corporis error minima nesciunt quae quis! Asperiores autem blanditiis consequuntur dolor
                            doloremque enim ex facilis illum inventore iste porro quas quasi, recusandae repellendus
                            repudiandae sequi sit sunt tempore vero voluptatum.
                        </div>
                        <div>Dolores maxime mollitia nemo qui quis recusandae rem reprehenderit sequi vitae,
                            voluptatibus! Commodi cumque, voluptates! Consequatur cumque doloribus ducimus error nam. Ab
                            amet, ducimus eius facere nulla optio quis sit.
                        </div>
                    </Container>

                    <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
                        <Container textAlign='center'>
                            <Grid columns={4} divided stackable inverted>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Header inverted as='h4' content='Group 1' />
                                        <List link inverted>
                                            <List.Item as='a'>burdayımmmm</List.Item>
                                            <List.Item as='a'>Link Two</List.Item>
                                            <List.Item as='a'>Link Three</List.Item>
                                            <List.Item as='a'>Link Four</List.Item>
                                        </List>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header inverted as='h4' content='Group 2' />
                                        <List link inverted>
                                            <List.Item as='a'>Link One</List.Item>
                                            <List.Item as='a'>Link Two</List.Item>
                                            <List.Item as='a'>Link Three</List.Item>
                                            <List.Item as='a'>Link Four</List.Item>
                                        </List>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header inverted as='h4' content='Group 3' />
                                        <List link inverted>
                                            <List.Item as='a'>Link One</List.Item>
                                            <List.Item as='a'>Link Two</List.Item>
                                            <List.Item as='a'>Link Three</List.Item>
                                            <List.Item as='a'>Link Four</List.Item>
                                        </List>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Header inverted as='h4' content='Footer Header' />
                                        <p>
                                            Extra space for a call to action inside the footer that could help re-engage
                                            users.
                                        </p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Divider inverted section />
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
            </div>

        );
    }
}


const mapStateToProps = (state)=>(
    state
)
export default connect(mapStateToProps)(App);
