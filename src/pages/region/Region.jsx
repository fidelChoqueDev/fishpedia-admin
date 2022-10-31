import React, { useState } from "react";
import ReadMoreIcon from "../../assets/icon/read-more.png";
import CreateIcon from "../../assets/icon/🦆 icon _create_.png";
import DeleteIcon from "../../assets/icon/🦆 icon _delete_.png";
import "./region.css";

const Region = () => {
  const [mockData, setMockData] = useState([
    {
      id: 1,
      name: "Europe",
      scienticName: "EU",
      family: "family",
    },
    {
      id: 2,
      name: "Africa",
      scienticName: "AF",
      family: "family2",
    },
    {
      id: 3,
      name: "Antartida",
      scienticName: "AN",
      family: "family3",
    },
  ]);
  const deleteFish = (id) => {
    setMockData(mockData.filter((fish) => fish.id !== id));
  };

  return (
    <div className="page display-flex justify-content-center align-items-center">
      <div className=" panel" id="regionPanel">
        <div className="region">
          <table className="crud-table">
            <thead>
              <tr>
                <th>REGION</th>
                <th>SHORT</th>
                {/*}<th>Family</th>
              <th>Options</th>{*/}
              </tr>
            </thead>
            <tbody>
              {mockData.map(({ id, name, scienticName, family }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{scienticName}</td>
                  {/*}<td>{family}</td>{*/}
                  <td className="curd-option">
                    <button className="options-button">
                      <img src={ReadMoreIcon} alt="read-more-icon" />
                    </button>
                    <button className="options-button">
                      <img src={CreateIcon} alt="create-icon" />
                    </button>
                    <button
                      onClick={() => {
                        deleteFish(id);
                      }}
                      className="options-button"
                    >
                      <img src={DeleteIcon} alt="delete-icon" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="footerRegion">
            <button className="create-button">
              <img src={CreateIcon} alt="create-icon" />
              <h4>Create</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Region;
