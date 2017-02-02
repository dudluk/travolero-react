import React from "react";
import { Link } from 'react-router';

export function TripListItem(props) {
    return (
        <div>
            <Link to={`/trip/${props.trip.id}`}>{props.trip.name}</Link>
        </div>
    );
}
