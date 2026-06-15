/** @format */

import img1 from "@/shared/images/chernivtsi-1.jpg";
import img2 from "@/shared/images/chernivtsi-2.jpg";
import img3 from "@/shared/images/chernivtsi-3.jpg";

export default function CityPhotos() {
  return (
    <div>
      <h3>Фотографії Чернівців</h3>

      <img src={img1} alt="Чернівецький університет" width={300} />
      <img src={img2} alt="Театральна площа" width={300} />
      <img src={img3} alt="Центр Чернівців" width={300} />
    </div>
  );
}
