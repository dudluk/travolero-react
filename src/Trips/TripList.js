import React from "react";
import { TripListItem } from "./TripListItem";
import TripService from "../TripService";

export class TripList extends React.Component {
    state = {
        trips: []
    }

    componentDidMount() {
        TripService.getAll().then(data => {
            this.setState({
                trips: data
            });
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
