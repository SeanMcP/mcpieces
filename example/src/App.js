import React, { Component } from 'react'

import { Form } from 'mcpieces'

export default class App extends Component {
  render() {
    return (
      <div>
        <ExampleComponent text="Modern React component module" />
        <Form.Input type="text" defaultValue="Hello world!" />
      </div>
    )
  }
}
