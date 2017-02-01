import React, { Component } from "react";
import { TripListItem } from "./TripListItem";

export class TripList extends Component {

    getInitialState() {
        return {
            trips: [
                {
                    id: 1,
                    name: "Sri Lanka"
                },
                {
                    id: 2,
                    name: "New Zealand"
                }
            ]
        }
    };

    render() {
        let items = this.getInitialState().trips;
        let nodes = items.map(t => <TripListItem name={t.name}></TripListItem>);
        
        return (<div>
                <h2>TripList</h2>

                <div>
                    {nodes}
                </div>
            </div>
        );
    }
}
