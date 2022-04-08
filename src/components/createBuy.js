import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/createBuy.css";

const URI = "http://localhost:3001/api/buy/";

const CompCreateBuy = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  //procedimiento guardar
  const saveBuy = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      name: name,
      description: description,
      value: value,
    });
    navigate("/");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        <div className="col">
          <div className="card ancho bg-primary" >
            <div className="card-body">
              <h3>Create</h3>
              <form onSubmit={saveBuy}>
                <div className="mb-3">
                  <label className="form-label">name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">value</label>
                  <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="number"
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn btn-info">
                <i className="fas fa-plus">
                  Save Buy
                  </i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompCreateBuy;
