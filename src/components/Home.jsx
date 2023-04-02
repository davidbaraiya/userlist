import React from "react";
import MainCard from "./Card";
import { IoIosCreate } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Home = () => {
  const user = useSelector((state) => state.userData.userData);

  return (
    <>
      <Header>
        <div className="container">
          <div className="head">
            <div className="d-flex justify-content-between align-items-center title text-white">
              <h2>add users details</h2>
              <Link to="create" className="create-icon text-white">
                <IoIosCreate />
              </Link>
            </div>
          </div>
        </div>
      </Header>
      <Section>
        <div className="container">
          <div className="row gy-3">
            {user.map((data) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex" key={data.id}>
                <MainCard data={data} />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;

const Header = styled.header`
  margin-bottom: 40px;
  padding: 10px 0;
  box-shadow: 0 2px 30px 10px rgb(0 0 0 / 10%);
  background: orange;

  .create-icon {
    display: block;
    font-size: 28px;
    line-height: 0;
  }
`;
const Section = styled.section`
  /* background-color: #888; */
`;
