import React, { useEffect, useState } from "react";
import "./AddAgents.css";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useFormik } from "formik";
import {
  ADD_AGENT_SEARCH_URL,
  ADD_AGENT_URL,
} from "../../Common/Url/ServerConfig";
import { useDispatch, useSelector } from "react-redux";
import { agentSearch, createAgent } from "../../Common/redux/slices/agentSlice";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const AddAgents = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.agent.agentCreateData);
  const searchData = useSelector((state) => state.agent.agentSearchData);

  console.log("adasda", searchData?.data?.list)
  const initialValues = {
    agent_type: "",
    voter_id: "",
    name: "",
    father_name: "",
    gender: "",
    address: "",
    mobile_no: "",
    alternate_no: "",
    mail_id: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [phoneNumber, setPhoneNumber] = useState("");

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


  const {
    handleSubmit,
    handleChange,
    setValues,
    values,
    handleBlur,
    errors,
    touched,
    resetForm,
    setFieldError,
    setFieldValue,
  } = useFormik({
    initialValues: {
      ...formValues,
    },

    validationSchema: Yup.object({
      // mobile_no: Yup.number()
      //   .required("Mobile no is required")
      //   .min(10, "Enter the valid Mobile Number"),


      mobile_no: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
      // .equals(["admin"], "Invalid username"),
      agent_type: Yup.string()
        .required("Agent type is required"),
      name: Yup.string()
        .required("Name is required"),
      gender: Yup.string()
        .required("Gender is required")
    }),



    onSubmit: (values) => {




      // const UserPayload = {
      //   ...values,
      //   voter_id: searchData?.data?.list?.[0]?.voter_id,
      //   name: searchData?.data?.list?.[0]?.name,
      //   father_name: searchData?.data?.list?.[0]?.father_name,
      //   gender: searchData?.data?.list?.[0]?.gender,
      //   address: searchData?.data?.list?.[0]?.address,
      //   mobile_no: searchData?.data?.list?.[0]?.mobile_no,
      //   alternate_no: searchData?.data?.list?.[0]?.alternate_no,
      //   mail_id: searchData?.data?.list?.[0]?.mail_id,
      // };

      const basePayload = {
        ...values,
        mobile_no: parseInt(values?.mobile_no),
        alternate_no: parseInt(values?.alternate_no),
        ref_mobile_no: parseInt(localStorage.getItem("mobile"))
      };

      const userData = {
        payload: basePayload,
        endPoint: ADD_AGENT_URL,
      };

      dispatch(createAgent(userData)).then((res) => {
        if (res?.payload?.message == "success") {

          toast.success(res?.payload?.data?.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          navigate("/MainDashboard")
        }

      })
    },
  });

  useEffect(() => {
    // Check if the phone number has 10 digits before making the API call
    if (phoneNumber.length === 10) {

      console.log("dsads",)
      const userData = {
        payload: {
          name: phoneNumber,
        },
        endPoint: ADD_AGENT_SEARCH_URL,
      };
      dispatch(agentSearch(userData));
    }
  }, [phoneNumber]);
  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    const truncatedPhoneNumber = inputPhoneNumber.slice(0, 10); // Limit to 10 digits
    setPhoneNumber(truncatedPhoneNumber);
    setFieldValue("mobile_no", truncatedPhoneNumber);
  };

  useEffect(() => {

    if (searchData?.data?.list?.length > 0) {
      toast.error("Already agent created with this mobile Number", {
        position: "top-right",

      });
      setFieldValue("mobile_no", "")
    }

  }, [searchData])
  return (
    <div className="container p-0">
      <Header />

      <div className="agentadd_datas">
        <div className="addAgent_datapoints">
          <label for="exampleFormControlInput1" class="form-label">
            Mobile Number
          </label>
          <input
            name="mobile_no"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Mobile Number"
            // onChange={handleChange}
            value={values?.mobile_no}
            type="number"
            max="10"
            onChange={handlePhoneNumberChange}
          />
          {errors.mobile_no ? (
            <div style={{ marginLeft: "20px" }} className="text-danger">
              {errors.mobile_no}
            </div>
          ) : null}
        </div>
        <div className="addAgent_datapoints">
          <label for="exampleFormControlInput1" class="form-label">
            Agent Type
          </label>
          <select
            name="agent_type"
            className="form-select menu-select "
            aria-label="Default select example"
            placeholder="Please Select"
            onChange={handleChange}
            value={
              !searchData?.data?.list
                ? values.agent_type
                : searchData?.data?.list?.[0]?.agent_type
            }
          >
            <option className="border-none" value="" selected disabled>
              Please select
            </option>

            <option value={"agent"}>{"agent"}</option>
            <option value={"non_agent"}>{"non-agent"}</option>
          </select>
          {errors.agent_type ? (
            <div style={{ marginLeft: "20px" }} className="text-danger">
              {errors.agent_type}
            </div>
          ) : null}
        </div>
        <div className="addAgent_datapoints">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Name"
            onChange={handleChange}
            value={values?.name}
          />
          {errors.name ? (
            <div style={{ marginLeft: "20px" }} className="text-danger">
              {errors.name}
            </div>
          ) : null}
        </div>
        <div className="addAgent_datapoints">
          <label for="exampleFormControlInput1" class="form-label">
            Father’s Name
          </label>
          <input
            name="father_name"
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Father’s Name"
            onChange={handleChange}
            value={
              !searchData?.data?.list
                ? values.father_name
                : searchData?.data?.list?.[0]?.father_name
            }
          />
        </div>
        <div class="addAgent_datapoints dropdown">
          <label for="exampleFormControlInput1" class="form-label">
            Gender
          </label>
          <select
            name="gender"
            className="form-select menu-select "
            aria-label="Default select example"
            placeholder="Please Select"
            onChange={handleChange}
            value={
              !searchData?.data?.list
                ? values?.gender
                : searchData?.data?.list?.[0]?.gender
            }
          >
            <option className="border-none" value="" selected disabled>
              Please select
            </option>

            <option value={"male"}>{"male"}</option>
            <option value={"female"}>{"female"}</option>
          </select>
          {errors.gender ? (
            <div style={{ marginLeft: "20px" }} className="text-danger">
              {errors.gender}
            </div>
          ) : null}
        </div>
        <div className="addAgent_datapoints">
          <label for="exampleFormControlInput1" class="form-label">
            Address
          </label>
          <input
            type="text"
            name="address"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Address"
            onChange={handleChange}
            value={
              !searchData?.data?.list
                ? values.address
                : searchData?.data?.list?.[0]?.address
            }
          />
        </div>
        <div className="addAgent_datapoints">
          <label for="exampleFormControlInput1" class="form-label">
            Voter ID
          </label>
          <input
            name="voter_id"
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Voter ID"
            onChange={handleChange}
            value={
              searchData?.data?.list
                ? values.voter_id
                : searchData?.data?.list?.[0]?.voter_id
            }
          />
        </div>
        <div className="addAgent_datapoints">
          <label for="exampleFormControlInput1" class="form-label">
            Alternate Mobile Number
          </label>
          <input
            name="alternate_no"
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Alternate Mobile Number"
            onChange={handleChange}
            value={
              !searchData?.data?.list
                ? values.alternate_no
                : searchData?.data?.list?.[0]?.alternate_no
            }
          />
        </div>
        <div className="addAgent_datapoints">
          <label for="exampleFormControlInput1" class="form-label">
            EMail ID
          </label>
          <input
            name="mail_id"
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="  EMail ID"
            onChange={handleChange}
            value={
              !searchData?.data?.list
                ? values.mail_id
                : searchData?.data?.list?.[0]?.mail_id
            }
          />
        </div>

      </div>
      <button className="submit_btn " onClick={handleSubmit}>
        Submit
      </button>
      <Footer />
    </div>
  );
};

export default AddAgents;
