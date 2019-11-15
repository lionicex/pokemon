import React, { Component } from 'react';
import Details from '../components/Details';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { showDetails, getName, type, ability } from "../store/actions/detailsActions";

export class DetailsContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.showDetails(this.props.history.location.pathname);
  }

  render() {
    this.props.type(this.props.information.types);
    this.props.ability(this.props.information.abilities);
    let url = 'http://pokestadium.com/sprites/xy/' + this.props.name + '.gif';
    return (

      <Details
        name={this.props.name}
        key={this.props.id}
        url={url}
        id={this.props.id}
        type={this.props.types}
        height={this.props.height}
        abilities={this.props.abilities}
      />

    )
  }
}

const mapStateToProps = state => ({
  information: state.information.information,
  types: state.information.types,
  abilities: state.information.abilities,
  name: state.information.name,
  id: state.information.id,
  height: state.information.height
});

export default withRouter(connect(mapStateToProps, { showDetails, getName, type, ability })(DetailsContainer));


