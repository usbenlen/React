/** @format */

import { Component } from "react";
import type { CityType } from "@/homeworks/dz1/types/CityType";

type CityProps = {
  city: CityType;
};

export default class CityInfoClass extends Component<CityProps> {
  render() {
    const { city } = this.props;

    return (
      <div>
        <h2>2.</h2>

        <p>
          <strong>Місто:</strong> {city.name}
        </p>
        <p>
          <strong>Країна:</strong> {city.country}
        </p>
        <p>
          <strong>Рік заснування:</strong> {city.founded}
        </p>
        <p>{city.description}</p>
      </div>
    );
  }
}
