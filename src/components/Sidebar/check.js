import React, { Component } from 'react'

import CloseButton from './CloseButton'
import cx from '../styles'
import { Bottom, Container, Top } from '../DyslexiBalance'

class Check extends Component {

    state = {
        token: ''
    }

    render() {
        return (
            <div>
                <div className={cx('list-group', 'list-group-flush')}>
                    <CloseButton setAppState={this.props.setAppState} />
                </div>
                <Container>
                    <Top>
                        <h1>Welcome to Dyslex.ie</h1>
                    </Top>
                    <Bottom>
                        <p>Dyslex.ie can help you read articles faster and more comfortably.</p>
                        <div className={`form-group ${cx('form-group')}`}>
                            <label for="exampleInputEmail1">To unlock all the features of the Dyslex.ie extension, Please enter the authentication token in the box below.</label>
                            <input type="text" className={`form-control ${cx('form-control')}`} onChange={(e) => this.setState({ token: e.target.value })} value={this.state.token} aria-describedby="emailHelp" placeholder="Enter token" />
                        </div>
                        <div className={`btn btn-primary text-center ${cx('text-center')} ${cx('btn')} ${cx('btn-primary')}`} onClick={() => this.props.setToken(this.state.token)} >Submit</div>
                        <p>You can generate a token by purchasing the plan from the link below.</p>
                        <a href="https://app.dyslex.ie" target="_blank" >Click here to get a 15 days free trial</a>
                    </Bottom>
                </Container>
            </div>
        );
    }
}

export default Check
