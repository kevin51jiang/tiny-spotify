import React from 'react';

// For subheading in sidebar (e.g. your library, playlists)

export const Subheading = (props) => {
    return (<h2 className="subheading">{props.heading.toUpperCase()}</h2>);
}

export default Subheading;