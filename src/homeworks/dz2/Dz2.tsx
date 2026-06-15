/** @format */

import { Component } from "react";

//1
import PersonInfo from "@/homeworks/dz2/components/PersonInfo";
import SkillsInfo from "@/homeworks/dz2/components/SkillsInfo";
import ExperienceInfo from "@/homeworks/dz2/components/ExperienceInfo";

import photo from "@/shared/images/chernivtsi-2.jpg"; //це наприклад (можна і фото людини)

import type { PersonType } from "@/homeworks/dz2/types/PersonType";

//2
import MovieInfo from "@/homeworks/dz2/components/MovieInfo";

import poster from "@/shared/images/chernivtsi-3.jpg"; //тоже наприклад

import type { MovieType } from "@/homeworks/dz2/types/MovieType";

export default class Dz2 extends Component {
  //1
  person: PersonType = {
    fullName: "Іван Іванов",
    phone: "+380671234567",
    email: "ivan@gmail.com",
    city: "Чернівці",
    photo,
    experience: "Навчальні проєкти на React та TypeScript",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
  };

  //2
  movie: MovieType = {
    title: "Інтерстеллар",
    director: "Крістофер Нолан",
    year: 2014,
    studio: "Paramount Pictures",
    genre: "Наукова фантастика",
    description:
      "Фільм розповідає про подорож групи дослідників через космос у пошуках нового дому для людства.",
    poster,
  };

  render() {
    return (
      <>
        {/* 1 */}
        <h1>1. Улюблений фільм</h1>
        <MovieInfo movie={this.movie} />

        <br />
        <hr />
        <br />

        {/* 2 */}
        <h1>2. Персональна сторінка</h1>

        <PersonInfo person={this.person} />
        <SkillsInfo skills={this.person.skills} />
        <ExperienceInfo experience={this.person.experience} />
      </>
    );
  }
}
