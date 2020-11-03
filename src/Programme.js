import Hour from "./Hour";
import Image from "./Image";
import Description from "./Description";

function Programme({ data }) {
  return (
    <div className="programme">
      <Hour time={data.time} />
      <Image image={data.image} />
      <Description data={data} />
    </div>
  );
}

export default Programme;
