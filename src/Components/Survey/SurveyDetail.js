import React, { useEffect, useState } from "react";
import "./../Agents/AddAgents.css";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useFormik } from "formik";
import * as Yup from 'yup';
import {
    ADD_AGENT_SEARCH_URL,
    ADD_AGENT_URL,
} from "../../Common/Url/ServerConfig";
import { useDispatch, useSelector } from "react-redux";
import { agentSearch, createAgent } from "../../Common/redux/slices/agentSlice";
import { useNavigate } from "react-router-dom";


const SurveyDetail = ({ data }) => {

    console.log(data?.item, "datatatta")


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.agent.agentCreateData);
    const searchData = useSelector((state) => state.agent.agentSearchData);

    const initialValues = {
        voter_id: "",
        name: "",
        mobile_no: "",
    };

    const [formValues, setFormValues] = useState(initialValues);

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
        initialValues: data?.item ? {
            ...formValues,
            voter_id: data?.item?.epicNo,
            name: data?.item?.fmNameEn,
            mobile_no: data?.item?.mobile_no,
        } :
            {
                ...formValues,
            },

        validationSchema: Yup.object({
            voter_id: Yup.string()
                .required("Voter-id is required"),

            name: Yup.string()
                .required("Name is required"),

            mobile_no: Yup.number()
                .required("Mobile No. is required"),

        }),


        onSubmit: (values) => {
            const finaldata =
                data?.item ?
                    {
                        ...values,
                        voter_id: data?.item?.epicNo,
                        name: data?.item?.fmNameEn,
                        mobile_no: values.mobile_no,
                    } :
                    values





            navigate("/Survey", {
                state: {
                    data: {
                        label: "submit",
                        finaldata
                    }
                },
            });

        },
    });



    return (
        <div className="container p-0">


            <div className="survey_datas">
                <div className="addAgent_datapoints">
                    <label for="exampleFormControlInput1" class="form-label">
                        Mobile Number
                    </label>
                    <input
                        name="mobile_no"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Mobile Number"
                        onChange={handleChange}
                        value={values?.mobile_no}
                        type="tel"
                    // max="10"

                    />
                    {errors.mobile_no && touched.mobile_no ? <div style={{ color: "red" }}>{errors.mobile_no}</div> : null}
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
                        value={values.voter_id}
                    />
                    {errors.voter_id && touched.voter_id ? <div style={{ color: "red" }}>{errors.voter_id}</div> : null}
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
                    {errors.name && touched.name ? <div style={{ color: "red" }}>{errors.name}</div> : null}
                </div>

            </div>
            <div className="" >
                <button className="submit_btn " onClick={handleSubmit}>
                    Next
                </button>
            </div>


        </div>
    );
};

export default SurveyDetail;
