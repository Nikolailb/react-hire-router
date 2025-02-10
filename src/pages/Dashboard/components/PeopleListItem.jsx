import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function PeopleListItem(props) {
  const { person } = props;

  return (
    <li>
      <h3>
        <Link to={`view/${person.id}`}>
          {person.name.first} {person.name.last}
        </Link>
      </h3>
      {person.hired.isHired && <p>Wage: £{person.hired.wage}</p>}
    </li>
  );
}
PeopleListItem.propTypes = {
  person: PropTypes.object.isRequired,
};

export default PeopleListItem;
