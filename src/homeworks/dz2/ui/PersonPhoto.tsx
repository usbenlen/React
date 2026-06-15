/** @format */

type PersonPhotoProps = {
  photo: string;
};

export default function PersonPhoto({ photo }: PersonPhotoProps) {
  return <img src={photo} alt="Photo" width={250} />;
}
