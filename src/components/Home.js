import React from 'react'

class Home extends React.Component {
  constructor() {
    super()

    this.handleOnClick = this.handleOnClick.bind(this)
    this.showPins = this.showPins.bind(this)

    this.state = {
      boards: [],
      pins: []
    }
  }

  handleOnClick() {
    PDK.login({ scope: 'read_public' }, res => {
      PDK.me('boards', res => {
        console.log(res)
        this.setState({ boards: res.data })
      })
    })
  }

  showPins(id) {
    console.log('test')
    PDK.request(`boards/${id}/pins`, res => {
      console.log(res)
      this.setState({ pins: res.data })
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
            {this.state.boards
              ? this.state.boards.map((board, i) => {
                  return (
                    <li
                      key={i}
                      className="marginB15"
                      onClick={e => this.showPins(board.id)}
                    >
                      {board.name.toUpperCase()}
                      <ul>
                        {this.state.pins
                          ? this.state.pins.map((pin, i) => {
                              return (
                                <li key={i} className="marginR10 colorRed">
                                  {pin.note}
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
