import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:3001/api/buy/";

const CompEditBuy = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  //procedimiento para actualizar
  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      name: name,
      description: description,
      value: value,
    });
    navigate("/");
  };

  useEffect(() => {
    getBuyById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBuyById = async () => {
    const res = await axios.get(URI + id);
    setName(res.data.name);
    setDescription(res.data.description);
    setValue(res.data.value);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        <div className="col">
          <div className="card bg-dark">
            <div className="card-body">
              <h3>Create</h3>
              <form onSubmit={update}>
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
                <button type="submit" className="btn btn-primary">
                  Save Buy
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompEditBuy;
