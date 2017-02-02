import React from "react";
import TripService from "../TripService";

export class Trip extends React.Component {
    state = {
        trip: {}
    }

    componentDidMount(){
        TripService.get(this.props.params.id).then(data =>{
            this.setState({
                trip: data
            });
        });
    }
    render() {
        return <div>Trip {this.state.trip.name}</div>
    }
}