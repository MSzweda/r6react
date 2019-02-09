import React from 'react'
import Card from './card'

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    fetch("/api/v1/cards")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            cards: result
          });
        }
      )
  }

  render(){
    const { cards } = this.state;
    return (
      <ul>
        {cards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </ul>
    );
  }
}

export default Cards;
