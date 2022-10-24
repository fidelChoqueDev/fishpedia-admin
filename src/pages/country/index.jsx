import createIconSvg from "../../assets/icon/icon_create.svg";
import deleteIconSvg from "../../assets/icon/icon_delete.svg";
import updateIconSvg from "../../assets/icon/icon_update.svg";
import "./index.css";

/**
 * datos mockeados
 */

let countries = [
  {
    key: 1,
    country: "Spain",
    short: "SP",
  },
  {
    key: 2,
    country: "Turkey",
    short: "TR",
  },
  {
    key: 3,
    country: "England",
    short: "EN",
  },
  {
    key: 4,
    country: "USA",
    short: "US",
  },
  {
    key: 5,
    country: "Italy",
    short: "IT",
  },
  {
    key: 6,
    country: "France",
    short: "FR",
  },
];
/**
 * datos mockeados
 */

function clic() {
  alert("pte de implementar");
}

const CountryDetail = ({ country, short }) => {
  return (
    <div className="countryContent">
      <div>{country} </div>
      <div>{short}</div>
      <div>
        <button type="button" onClick={clic}>
          <img src={updateIconSvg} alt="update"></img>
        </button>
      </div>
      <div>
        <button type="button" onClick={clic}>
          <img src={deleteIconSvg} alt="delete"></img>
        </button>
      </div>
    </div>
  );
};

function Country() {
  return (
    <div className="page display-flex justify-content-center align-items-center">
      <div className="panel">
        <div id="countryHeader">
          <div className="">COUNTRY</div>
          <div>SHORT</div>
        </div>
        <div id="countryItems">
          {countries.map(({ country, short }) => {
            return <CountryDetail country={country} short={short} />;
          })}
        </div>
        <div id="countryFooter">
          <button id="buttonCreate" type="button" onClick={clic}>
            <img src={createIconSvg} alt="Create"></img>
            <span> Create</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Country;
