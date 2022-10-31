import React, { useState } from "react";
import ReadMoreIcon from "../../assets/icon/read-more.png";
import CreateIcon from "../../assets/icon/🦆 icon _create_.png";
import DeleteIcon from "../../assets/icon/🦆 icon _delete_.png";
import "./index.css";
let fishData = {};
const CrudFish = () => {
  const clearForm = () => {
    document.getElementById("fishForm").reset();
  };
  const [mockData, setMockData] = useState([
    {
      id: 0,
      commonName: "name",
      scienticName: "ScienticName",
      familyName: "family",
      form: "form",
    },
  ]);
  const deleteFish = (id) => {
    setMockData(mockData.filter((fish) => fish.id !== id));
  };
  const addFish = () => {
    fishData.id = mockData.length;
    setMockData((data) => [...data, fishData]);
    fishData = {};
    clearForm();
  };
  const changeHandler = (event) => {
    fishData[event.target.id] = event.target.value;
  };

  return (
    <div className="page display-flex justify-content-center align-items-center">
      <div className="crud-card panel">
        <form id="fishForm">
          <div className="crud-fish">
            <div className="crud-fish-left display-flex flex-flow">
              <div className="form-group col-4 ">
                <label htmlFor="">Common Name</label>
                <input id="commonName" onChange={changeHandler} />
              </div>
              <div className="form-group col-4">
                <label htmlFor="">Scientific Name</label>
                <input id="scienticName" onChange={changeHandler} />
              </div>

              <div className="form-group col-3 ">
                <label htmlFor="">Form</label>
                <input id="form" onChange={changeHandler} />
              </div>

              <div className="form-group col-1 ">
                <label htmlFor="">Min Size</label>
                <input id="minSize" onChange={changeHandler} />
              </div>

              <div className="form-group col-1 ">
                <label htmlFor="">Max Size</label>
                <input id="minSize" onChange={changeHandler} />
              </div>
              <div className="form-group col-3 ">
                <label htmlFor="">Type Water</label>
                <input id="waterType" onChange={changeHandler} />
              </div>
              <div className="form-group col-8">
                <label htmlFor="">Image URL</label>
                <input id="imgSrc" onChange={changeHandler} />
              </div>

              <div className="form-group col-4">
                <label htmlFor="">Region</label>
                <input id="region" onChange={changeHandler} />
              </div>

              <div className="form-group col-4">
                <label htmlFor="">Country</label>
                <input id="country" onChange={changeHandler} />
              </div>
            </div>
            <div className="crud-fish-right display-flex flex-flow">
              <div className="form-group col-8">
                <label htmlFor="">Family</label>
                <input id="familyName" onChange={changeHandler} />
              </div>
              <div className="form-group col-4">
                <input
                  id="isProhibited"
                  type="checkbox"
                  onChange={changeHandler}
                />
                <label htmlFor="">Prohibited Fishing</label>
              </div>
              <div className="form-group col-4">
                <input id="isDanger" type="checkbox" onChange={changeHandler} />
                <label htmlFor="">Danger</label>
              </div>
              <div className="form-group col-8">
                <img src={fishData.imgSrc} alt="" className="fish-img" />
              </div>
            </div>
          </div>
        </form>
        <button className="create-button" onClick={addFish}>
          <img src={CreateIcon} alt="create-icon" />
          <h4>Create</h4>
        </button>

        <hr className="hr" />

        <table className="crud-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Scientfic Name</th>
              <th>Family</th>
              <th>Options</th>
            </tr>
          </thead>

          <tbody>
            {mockData.map(({ id, commonName, scienticName, familyName }) => (
              <tr key={id}>
                <td>{commonName}</td>
                <td>{scienticName}</td>
                <td>{familyName}</td>
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
      </div>
    </div>
  );
};

export default CrudFish;
