export const Dashboard = ({ nameUser }) => {
  return (
    <div className={"dashboard-content"}>
      <h2 className={"dashboard-content--message"}>
        Bonjour <span className={"dashboard-content--name"}>{nameUser}</span>
      </h2>
    </div>
  );
};
