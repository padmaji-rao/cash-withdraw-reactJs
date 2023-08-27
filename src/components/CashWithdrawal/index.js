import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onClickAmount = value => {
    console.log(`I am in onClickAmount`)
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    console.log(amount)
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-section">
            <p className="avatar">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-section">
            <p className="balance-head">Your Balance</p>
            <div className="amount-section">
              <p className="amount-head">{amount}</p>
              <p className="amount-para">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-head">Withdraw</p>
          <p className="withdraw-para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-container">
            {denominationsList.map(each => {
              console.log(each)
              return (
                <DenominationItem
                  onClickAmount={this.onClickAmount}
                  key={each.id}
                  value={each.value}
                />
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
