import propType from "prop-types";
const EquipmentCard = (props) => {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <p className="text-gray-600 mt-4 ">{props.description}</p>
      </div>
    </>
  );
};
EquipmentCard.propTypes = {
  title: propType.string.isRequired,
  description: propType.string.isRequired,
};

export default EquipmentCard;
