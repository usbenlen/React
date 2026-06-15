/** @format */

import { Component } from "react";

import type { PersonType } from "@/homeworks/dz2/types/PersonType";
import PersonPhoto from "@/homeworks/dz2/ui/PersonPhoto";

type PersonProps = {
  person: PersonType;
};

export default class PersonInfo extends Component<PersonProps> {
  render() {
    const { person } = this.props;

    return (
      <div>
        <h2>Особиста інформація</h2>

        <p>
          <strong>ПІБ:</strong> {person.fullName}
        </p>
        <p>
          <strong>Телефон:</strong> {person.phone}
        </p>
        <p>
          <strong>Email:</strong> {person.email}
        </p>
        <p>
          <strong>Місто:</strong> {person.city}
        </p>
        <PersonPhoto photo={person.photo} />
      </div>
    );
  }
}
