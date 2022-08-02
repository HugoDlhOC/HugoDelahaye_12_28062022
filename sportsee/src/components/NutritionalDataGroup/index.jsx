import { NutritionalDataElement } from "../NutritionalDataElement";
import { ReactComponent as IconCalories } from "../../assets/icons/iconCalories.svg";
import { ReactComponent as IconCarbohydrates } from "../../assets/icons/iconCarbohydrates.svg";
import { ReactComponent as IconLipids } from "../../assets/icons/iconLipids.svg";
import { ReactComponent as IconProtein } from "../../assets/icons/iconProtein.svg";
import PropTypes from "prop-types";

/**
 * component display data nutrition of user
 * @param dataAPI
 * @returns {JSX.Element}
 */
export const NutritionalDataGroup = (dataAPI) => {
  const data = dataAPI.dataAPI.keyData;
  return (
    <div className={"nutritionaldata--group"}>
      <NutritionalDataElement
        idIcon={"nutritionaldata--element--icon--calories"}
        data={data.calorieCount + "kCal"}
        type={"Calories"}
        icon={<IconCalories />}
      />
      <NutritionalDataElement
        idIcon={"nutritionaldata--element--icon--protein"}
        data={data.proteinCount + "g"}
        type={"Proteines"}
        icon={<IconProtein />}
      />
      <NutritionalDataElement
        idIcon={"nutritionaldata--element--icon--carbohydrates"}
        data={data.carbohydrateCount + "g"}
        type={"Glucides"}
        icon={<IconCarbohydrates />}
      />
      <NutritionalDataElement
        idIcon={"nutritionaldata--element--icon--lipids"}
        data={data.lipidCount + "g"}
        type={"Lipides"}
        icon={<IconLipids />}
      />
    </div>
  );
};

NutritionalDataGroup.propTypes = {
  dataAPI: PropTypes.object.isRequired,
};
