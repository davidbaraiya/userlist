import React from "react";
import styled from "styled-components";
import { BsFillEyeFill, BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/feature/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const tostSettings = {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

const MainCard = ({ data }) => {
  const { id, name, email, phone } = data;

  const dispatch = useDispatch();

  const handleDelet = (userId) => {
    dispatch(deleteUser(userId));
    toast.success("data deleted", tostSettings);
  };

  return (
    <Card className="card w-100">
      <div className="d-flex mb-3 justify-content-between align-items-center">
        <span className="name">{name}</span>
        <Link to={`view/${id}`} className="btn icon" title="view details">
          <BsFillEyeFill />
        </Link>
      </div>
      <div className="bottom">
        <div className="info-div">
          <a href={`tel:${phone}`} className="phone icon-div " title="phone">
            <AiFillPhone />
            {phone}
          </a>
          <a
            href={`mailto:${email}`}
            className="email  icon-div my-2"
            title="email"
          >
            <MdEmail />
            {email}
          </a>
        </div>
        <div className="btn-wrapper mt-4 d-flex justify-content-between gap-2 flex-wrap">
          <Link to={`update/${id}`} className="btn btn-info">
            <BsFillPencilFill />
            <span className="ms-1">edit</span>
          </Link>
          <button className="btn btn-danger">
            <AiFillDelete />
            <span className="ms-1" onClick={() => handleDelet(id)}>
              delet
            </span>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default MainCard;

const Card = styled.div`
  backdrop-filter: blur(14px) saturate(200%);
  -webkit-backdrop-filter: blur(14px) saturate(200%);
  background-color: rgba(170, 170, 170, 0.22);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  border-radius: 10px;
  padding: 30px 15px;

  .email {
    text-transform: lowercase;
  }
  .icon {
    color: #fff;
    font-size: 20px;
    padding: 2px;
    border: 0;
    outline: 0;
    align-self: center;
    line-height: 0;
    color: #5454ff;
  }
  .name {
    font-size: 24px;
    font-weight: 600;
  }
  .icon-div {
    color: rgb(0, 0, 0);
    text-decoration: none;
    display: block;
    &:hover {
      text-decoration: underline;
    }
    svg {
      padding-right: 5px;
      width: 22px;
      height: 22px;
      display: inline-block;
    }
  }
  .btn-wrapper {
    .btn {
      display: flex;
      gap: 5px;
      align-items: center;
      text-transform: capitalize;
      color: #fff;
      border-color: transparent;

      &.btn-danger {
        background-color: #ff3548;
      }
    }
  }
  .bottom {
    height: 100%;
    display: flex;
    flex-direction: column;

    .info-div {
      flex: 1;
    }
  }
`;
