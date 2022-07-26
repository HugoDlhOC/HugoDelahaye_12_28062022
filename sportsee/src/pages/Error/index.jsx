import { Header } from "../../components/Header";
import { LogoSportSee } from "../../components/LogoSportSee";

export const Error = () => {
  return (
    <Header>
      <LogoSportSee
        width={"57px"}
        height={"57px"}
        fillBackground={"#FF0101"}
        fillBody={"#020203"}
        fillHead={"#020203"}
      />
      <p>Error</p>
    </Header>
  );
};
