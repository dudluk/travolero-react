import React, { Component } from "react";
import {Link} from 'react-router';

export class TripListItem extends Component {
    render() {
        return (
            <div>
                <Link to={`/trip/${this.props.trip.id}`}>{this.props.trip.name}</Link>
            </div>
        );
    }
}
