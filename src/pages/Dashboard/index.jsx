import PeopleList from "./components/PeopleList";
import PropTypes from "prop-types";

function Dashboard(props) {
  const { people } = props;

  const notHired = people.filter((p) => !p.hired.isHired);
  const hired = people.filter((p) => p.hired.isHired);

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={notHired} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hired} />
      </section>
    </main>
  );
}
Dashboard.propTypes = {
  people: PropTypes.array.isRequired,
};

export default Dashboard;
