import React from "react";
import cars from "./carsStore";
export default class ListDemo extends React.Component {
    constructor() {
        super();
         
        this._cars = cars.getAllCars();
    }
render() {
    return <CarsTable cars = {this._cars}                 /> 
}
    /*
      export default function NumberTable(props) {
          const numbers = props.numbers;
          const listNumbers = numbers.map((number, index) =>
          <tr key={index}>
          <td>{number}</td>
          </tr>
      );
    return (
    <div>
    <table className="table">
    <tr><th>Number</th></tr>
    {listNumbers}
    </table>
    </div>
    );
      }
    
      export default function NumberList(props) {
        const numbers = props.numbers;
        const listNumbers = numbers.map((number, index) =>
       <li key={index}>{number} </li>
    );
    return (
    <div>
    <ul>{listNumbers} </ul>
    </div>
    );
    }
    */

}
function CarsTable(props) {
    const rows = props.cars.map((car, index) =>
        <tr key={car.id}>
            <td> {car.id} </td> <td> {car.make} </td> <td> {car.model} </td> <td> {car.year} </td>
        </tr>
    );
    return (
        <div>
            <table className="table">
                <tr><th>ID</th> <th>Make</th> <th>Model</th> <th> Year</th></tr>
                {rows}
            </table>
        </div>
    )
}