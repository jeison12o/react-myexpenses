import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = "http://localhost:3001/api/buy/";

const CompShowBuys = () => {
  const [buys, setBuy] = useState([]);
  useEffect(() => {
    getBuys();
  }, []);

  const getBuys = async () => {
    const res = await axios.get(URI);
    setBuy(res.data);
  };

  const deleteBuy = async (id) => {
    await axios.delete(`${URI}${id}`);
    getBuys();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/create" className="btn btn-primary mt-2 mb-2">
            <i className="fas fa-plus">new buy</i>
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>name</th>
                <th>description</th>
                <th>value</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {buys.map((buy) => (
                <tr key={buy.id}>
                  <td> {buy.name} </td>
                  <td> {buy.description} </td>
                  <td> {buy.value} </td>
                  <td>
                    <Link to={`/edit/${buy.id}`} className="btn btn-info">
                      <i className="fas fa-edit">edit</i>
                    </Link>
                    <button
                      onClick={() => deleteBuy(buy.id)}
                      className="btn btn-danger m-2">
                      <i className="fas fa-trash-alt">delete</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompShowBuys;
