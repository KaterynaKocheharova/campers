import VehicleImage from "../VehicleImage/VehicleImage";
import VehicleCardHead from "../VehicleCardHead/VehicleCardHead";
import Text from "../common/Text/Text";
import CategoriesList from "../CategoriesList/CategoriesList";
import Button from "../common/Button/Button";

import css from "./VehicleCard.module.css";

const VehicleCard = ({ vehicleData }) => {
  const {
    id,
    name,
    description,
    gallery,
    price,
    rating,
    reviews,
    location,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    transmission,
    engine,
  } = vehicleData;

  const availableCategories = [
    { name: "AC", available: AC },
    { name: "Bathroom", available: bathroom },
    { name: "Kitchen", available: kitchen },
    { name: "TV", available: TV },
    { name: "Radio", available: radio },
    { name: "Refrigerator", available: refrigerator },
    { name: "Microwave", available: microwave },
    { name: "Gas", available: gas },
    { name: "Water", available: water },
  ]
    .filter((category) => category.available)
    .map((category) => category.name);

  return (
    <div className={css.card}>
      <div className={css["card-layout"]}>
        <VehicleImage url={gallery[0].thumb} />
        <div className={css["card-right"]}>
          <VehicleCardHead
            headData={{
              name,
              rating,
              location,
              price,
              reviews,
              id,
            }}
            variant="card"
          />
          <div className={css["card-body"]}>
            <Text variant="light" addEllipsis={true}>
              {description}
            </Text>
            <CategoriesList
              variant="card"
              availableCategories={availableCategories}
              transmission={transmission}
              engine={engine}
            />
            <Button extraClass="show-more-link" vehicleId={id}>
              Show more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
