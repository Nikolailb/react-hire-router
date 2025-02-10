import PeopleListItem from "./PeopleListItem";
import PropTypes from "prop-types";

function PeopleList(props) {
  const { people } = props;

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} />
      ))}
    </ul>
  );
}
PeopleList.propTypes = {
  people: PropTypes.array.isRequired,
};

export default PeopleList;
