import EquipmentCard from "./EquipmentCard";
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
export const Equipment = () => {
  return (
    <section>
      <div className="container p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 font-playfair items-center">
          <div className="px-4">
            <h1 className="text-4xl font-bold  mb-4 ">What we offer for you</h1>
            <p className="text-gray-600">
              It is a long established fact that a reader readable.
            </p>
          </div>
          <div className="Equipment-color ">
            <GrYoga className="text-4xl mb-4" />
            <EquipmentCard
              title="Yoga Equipments"
              description="It is a long established fact that a reader readable."
            />
          </div>
          <div className="Equipment-color ">
            <FaDumbbell className="text-4xl mb-4" />
            <EquipmentCard
              title="Muscles Equipments"
              description="It is a long established fact that a reader readable."
            />
          </div>
          <div className="Equipment-color ">
            <GiGymBag className="text-4xl mb-4" />
            <EquipmentCard
              title="Fitness Equipments"
              description="It is a long established fact that a reader readable."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
