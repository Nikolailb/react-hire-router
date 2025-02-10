import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";
import HireEdit from "./components/HireEdit";

function PersonProfile(props) {
  const [person, setPerson] = useState(null);

  const { people, hirePerson, firePerson } = props;
  const { id } = useParams();

  useEffect(() => {
    if (people && id) {
      setPerson(people.find((p) => p.id == id));
    }
  }, [people, id]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      {person.hired.isHired ? (
        <HireEdit
          person={person}
          hirePerson={hirePerson}
          firePerson={firePerson}
        />
      ) : (
        <HireForm person={person} hirePerson={hirePerson} />
      )}
    </article>
  );
}
PersonProfile.propTypes = {
  people: PropTypes.array.isRequired,
  hirePerson: PropTypes.func.isRequired,
  firePerson: PropTypes.func.isRequired,
};

export default PersonProfile;
