import "../i18n"
import * as React from "react"
import { contains } from "ramda"
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

interface RootComponentState {
}

/**
 * This is the root component of our app.
 */
export class RootComponent extends React.Component<{}, RootComponentState> {
  /**
   * When the component is mounted. This happens asynchronously and simply
   * re-renders when we're good to go.
   */
  async componentDidMount() {
    this.setState({
    })
  }

  /**
   * Are we allowed to exit the app?  This is called when the back button
   * is pressed on android.
   *
   * @param routeName The currently active route name.
   */
  canExit(routeName: string) {
    return false
  }

  render() {
    const rootStore = this.state && this.state.rootStore

    // Before we show the app, we have to wait for out state to be ready.
    // In the meantime, don't render anything. This will be the background
    // color set in native by rootView's background color.
    //
    // This step should be completely covered over by the splash screen though.
    //
    // You're welcome to swap in your own component to render if your boot up
    // sequence is too slow though.
/*
    if (!rootStore) {
      return null
    }
*/

    // otherwise, we're ready to render the app

    // --- am: begin list of stores ---
    const otherStores = {}
    // --- am: end list of stores ---

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                <Title>Header</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                <Text>
                    This is Content Section
                </Text>
            </Content>
            <Footer>
                <FooterTab>
                    <Button full>
                        <Text>Footer</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    )
  }
}
