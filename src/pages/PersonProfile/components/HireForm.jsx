import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function HireForm(props) {
  const [wage, setWage] = useState(0);
  const navigate = useNavigate();

  const { person, hirePerson, firePerson } = props;
  useEffect(() => {
    if (person.hired.isHired) setWage(person.hired.wage);
  }, [person.hired]);

  function handleSubmit(event) {
    event.preventDefault();
    hirePerson(person, wage);
    navigate("/");
  }

  const handleFire = (event) => {
    event.preventDefault();
    firePerson(person);
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="wage">Wage Offer</label>
        <input
          type="text"
          id="wage"
          name="wage"
          onChange={(e) => setWage(e.target.value)}
          value={wage}
        />
        <button type="submit">
          {person.hired.isHired ? "New wage" : "Hire"}
        </button>
      </form>
      {person.hired.isHired && (
        <button onClick={handleFire}>Fire person</button>
      )}
    </>
  );
}
HireForm.propTypes = {
  person: PropTypes.object.isRequired,
  hirePerson: PropTypes.func.isRequired,
  firePerson: PropTypes.func.isRequired,
};

export default HireForm;
