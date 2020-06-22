import React from 'react';
import { Link } from '@reach/router';

const Dest = props => {
    return (
        <Link to={props.dest.id}> {props.dest.name} </Link>
    )
}

export default Dest;