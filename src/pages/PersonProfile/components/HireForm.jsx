import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function HireForm(props) {
  const [wage, setWage] = useState(0);
  const navigate = useNavigate();

  const { person, hirePerson } = props;

  function handleSubmit(event) {
    event.preventDefault();
    hirePerson(person, wage);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={(e) => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  );
}
HireForm.propTypes = {
  person: PropTypes.object.isRequired,
  hirePerson: PropTypes.func.isRequired,
};

export default HireForm;
