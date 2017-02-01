import React, {Component} from "react";
import {TripListItem} from "./TripListItem";

export class TripList extends Component {
    render() {
        return (
            <div>
                <h2>TripList</h2>
                <div>
                    <TripListItem></TripListItem>
                    <TripListItem></TripListItem>
                </div>
            </div>
        );
    }
}
