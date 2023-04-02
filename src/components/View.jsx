import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const View = () => {
  const param = useParams();
  const userView = useSelector((state) => state.userData.userData);

  const existingUserUser = userView.filter((user) => user.id === param.id);
  const [{ id, name, email, phone }] = existingUserUser;

  const navigate = useNavigate();

  return (
    <Section className="container my-5">
      <div className="row">
        <div className="col-md-6 col-12 mx-auto">
          <div className="card p-3">
            <div className="d-flex gap-5 mb-2">
              <label htmlFor="">ID :</label>
              <div>{id}</div>
            </div>
            <div className="d-flex gap-5 mb-2">
              <label htmlFor="">Name :</label>
              <div className="name">{name}</div>
            </div>
            <div className="d-flex gap-5 mb-2">
              <label htmlFor="">Email :</label>
              <div>{email}</div>
            </div>
            <div className="d-flex gap-5 mb-2">
              <label htmlFor="">Number :</label>
              <div>{phone}</div>
            </div>
          </div>
          <div>
            <button className="btn btn-info mt-3" onClick={() => navigate("/")}>
              go back
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default View;

const Section = styled.section`
  .card {
    box-shadow: 0px 5px 7px 0px rgb(0 0 0 / 6%);

    label {
      font-size: 18px;
      color: orange;
      font-weight: 600;
      flex: 0 1 110px;
      text-transform: capitalize;
    }
    .name {
      text-transform: capitalize;
    }
    div {
      flex: 1;
      text-transform: lowercase;
    }
  }
`;
