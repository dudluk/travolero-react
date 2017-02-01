import React, { Component } from "react";

export class TripListItem extends Component {
    render() {
        return (<div>{this.props.name}</div>);
    }
}
