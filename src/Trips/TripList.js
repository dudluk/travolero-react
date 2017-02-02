import React, { Component } from "react";
import { TripListItem } from "./TripListItem";

export class TripList extends Component {
    state = {
        trips: []
    }

    componentDidMount() {
        this.setState({
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
        });
    }

    render() {
        let nodes = this.state.trips.map(t => <TripListItem key={t.id} trip={t}></TripListItem>);

        return (<div>
            <h2>TripList</h2>
            <div>
                {nodes}
            </div>
        </div>
        );
    }
}
