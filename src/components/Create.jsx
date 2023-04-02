import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../redux/feature/userSlice";
import { v4 as uuid } from "uuid";
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

const Create = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  navigation = useNavigate();
  const dispatch = useDispatch();
  const uniqueId = uuid();
  const smallId = uniqueId.slice(0, 8);

  const createData = () => {
    // Validate email
    if (values.name || values.email || values.phone) {
      const emailRegex = /\S+@\S+\.\S+/;
      if (values.email && !emailRegex.test(values.email)) {
        toast.error("Please enter a valid email address", tostSettings);
        return;
      }

      // Validate phone number
      if (values.phone && values.phone.length !== 10) {
        toast.error("Phone number must be 10 digits long", tostSettings);
        return;
      }
      dispatch(
        createUser({
          id: smallId,
          name: values.name,
          email: values.email,
          phone: values.phone,
        })
      );
      setValues({ name: "", email: "", phone: "" });
      navigation("/");
      toast.success("added new data", tostSettings);
    } else {
      toast.error("Please fill in at least one field.", tostSettings);
    }
  };

  return (
    <div className="container my-5">
      <form className="row g-3" onSubmit={(e) => e.preventDefault()}>
        <div className="col-lg-6 col-12 mx-auto">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="phone"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={createData}
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
