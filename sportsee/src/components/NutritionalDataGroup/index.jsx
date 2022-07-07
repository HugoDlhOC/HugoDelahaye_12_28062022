import { USER_MAIN_DATA } from "../../assets/data/data";
import { NutritionalDataElement } from "../NutritionalDataElement";
import { ReactComponent as IconCalories } from "../../assets/icons/iconCalories.svg";
import { ReactComponent as IconCarbohydrates } from "../../assets/icons/iconCarbohydrates.svg";
import { ReactComponent as IconLipids } from "../../assets/icons/iconLipids.svg";
import { ReactComponent as IconProtein } from "../../assets/icons/iconProtein.svg";

export const NutritionalDataGroup = () => {
  const data = USER_MAIN_DATA[0].keyData;
  console.log(data);
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
