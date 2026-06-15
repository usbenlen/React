/** @format */

import type { CityType } from "@/homeworks/dz1/types/CityType";
import CityPhotos from "@/homeworks/dz1/ui/CityPhotos";

type CityProps = {
  city: CityType;
};

export default function CityInfo({ city }: CityProps) {
  return (
    <div>
      <h2>1.</h2>

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

      <CityPhotos />
    </div>
  );
}
