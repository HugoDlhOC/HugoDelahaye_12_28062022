export const NutritionalDataElement = ({ idIcon, icon, data, type }) => {
  return (
    <div className={"nutritionaldata--element"}>
      <div id={idIcon} className={"nutritionaldata--element--icon"}>
        {icon}
      </div>
      <div className={"nutritionaldata--element--data"}>
        <strong>{data}</strong>
        <span>{type}</span>
      </div>
    </div>
  );
};
