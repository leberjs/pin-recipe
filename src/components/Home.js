import React from 'react'

import { sortBoards, sortPins } from '../utils/sort'

class Home extends React.Component {
  constructor() {
    super()

    this.handleOnClick = this.handleOnClick.bind(this)
    this.showPins = this.showPins.bind(this)

    this.state = {
      boards: {}
    }
  }

  handleOnClick() {
    PDK.login({ scope: 'read_public' }, res => {
      PDK.me('boards', res => {
        this.setState({ boards: sortBoards(res.data) })
      })
    })
  }

  showPins(id) {
    PDK.request(`boards/${id}/pins`, res => {
      const boards = { ...this.state.boards }
      boards[id].pins = res.data
      this.setState({ boards })
    })
  }

  render() {
    return (
      <div>
        <div className="layout marginT60">
          <button onClick={this.handleOnClick}>CLICK ME!</button>
        </div>
        <div className="marginT60">
          <ul>
            {Object.keys(this.state.boards)
              ? Object.keys(this.state.boards).map((key, i) => {
                  return (
                    <li
                      key={i}
                      className="marginB15"
                      onClick={e => this.showPins(key)}
                    >
                      {this.state.boards[key].name.toUpperCase()}
                      <ul>
                        {this.state.boards[key].pins
                          ? this.state.boards[key].pins.map((pin, i) => {
                              return (
                                <li key={i} className="marginR10 colorRed">
                                  <a href={pin.link} target="_blank">
                                    {pin.note}
                                  </a>
                                </li>
                              )
                            })
                          : ''}
                      </ul>
                    </li>
                  )
                })
              : ''}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
