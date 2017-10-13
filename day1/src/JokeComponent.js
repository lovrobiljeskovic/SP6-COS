import React, {Component} from "react";
import jokes from "./jokesStore";
export default class jokeComponent extends Component {
constructor() {
    super(jokes.addJoke("Bla Bla"));
    super(jokes.addJoke("Bla bla 2"));
}
    render() {
        return (
            <div>
            <p>{jokes.getRandomJoke()}</p>
            </div>
        )
    }
}