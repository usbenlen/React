/** @format */

import { Component } from "react";

type ExperienceProps = {
  experience: string;
};

export default class ExperienceInfo extends Component<ExperienceProps> {
  render() {
    return (
      <div>
        <h2>Досвід роботи</h2>
        <p>{this.props.experience}</p>
      </div>
    );
  }
}
