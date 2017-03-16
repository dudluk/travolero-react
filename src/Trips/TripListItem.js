import React from "react";
import { Link } from 'react-router';

export function TripListItem(props) {
    return (
        <div>
            <Link to={`/trips/${props.trip.id}`}>{props.trip.name}</Link>
        </div>
    );
}
