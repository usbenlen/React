/** @format */

import { Component } from "react";

type SkillsProps = {
  skills: string[];
};

export default class SkillsInfo extends Component<SkillsProps> {
  render() {
    return (
      <div>
        <h2>Навички</h2>

        <ul>
          {this.props.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}
