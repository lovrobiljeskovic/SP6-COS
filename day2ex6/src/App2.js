import React from 'react';


export default class App2 extends React.Component {
    constructor() {
        super();
        this._darths = [
            { name: "Darth Vader", source: "images/Darth Vader.png" },
            { name: "Darth Bane", source: "images/Darth Bane.jpg" },
            { name: "Darth Maul", source: "images/Darth Maul.jpg" },
            { name: "Darth Nihilus", source: "images/Darth Nihilus.jpg" },
            { name: "Darth Revan", source: "images/Darth Revan.png" }

        ];
    }
    render() {
        const images = this._darths.map((image) =>
            <img name={image.name} src={image.source} />
        );
        return (
            <div>
                <p> All the Darths</p>
                <p>
                    {images}
                </p>
            </div>
        )
    }
}
/*
export default class App2 extends React.Component {
    constructor() {
        super();
        this._darths = [
            "images/Darth Vader.jpg",
            "images/Darth Bane.jpg",
            "images/Darth Maul.jpg",
            "images/Darth Nihilus.jpg",
            "images/Darth Revan.jpg"

        ];
    }
    render() {
        const images = this._darths.map((image, index) =>
            <img src={image} alt="" key={index} />
        );
        return (
            <div>
                <p>All the Darths </p>
                <p>
                    {images}
                </p>
            </div>
        )
    }
}
*/
