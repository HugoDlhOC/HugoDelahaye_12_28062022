import PropTypes from "prop-types";

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

NutritionalDataElement.prototype = {
  idIcon: PropTypes.string,
  icon: PropTypes.element.isRequired,
  data: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
