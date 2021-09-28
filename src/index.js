import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      clock: 1000,
      copo: 'água'
    }
  }

    componentDidMount() {
      window.setTimeout(() => {
      this.setState({
        copo: 'suco'
      })
    }, 3000)
  }

  alterarCopo = () => {
    this.setState({
      clock: 1000,
      copo: 'água'
    })
    //this.state.copo = 'refrigerante'
  } 

  render() {
    const { clock, copo } = this.state
    return(
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
      </div>
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)