import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "./Dashboard.css";
import { ToastContainer, toast } from "react-toastify";
import {
  fetchUserList,
  fetchTranxID,
} from "../../Common/redux/slices/geoSlice";
import {
  MOBILE_GET_URL,
  DEALER_GET_URL,
  CREATE_GET_URL,
} from "../../Common/Url/ServerConfig";
import {
  createUser,
  clearUserData,
} from "../../Common/redux/slices/usersSlice";
// import chola from "../../Common/asset/images/Cholamandalam_logo.svg";
import "../../Common/asset/css/index.css";
import "../../Common/asset/css/app.css";
import { EnterMobile_ROUTE, LOGIN_ROUTE } from "../../Common/Route/Routes";
// MOBILE_GET_URL
const Dashboard = () => {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const usergetList = useSelector((state) => state.geo.UserListData);

  const dealerList = useSelector((state) => state.geo.fetchTranxIDList);
  const posts = useSelector((state) => state.users.data);
  const dispatch = useDispatch();
  const [subBUtton, setSubBUtton] = useState(true);
  const [dropDealer, setDropDealer] = useState([]);

  const [selectedval, setSelectedval] = useState("");

  const [choosedataDec, setChoosedataDec] = useState("");

  const formik = useFormik({
    initialValues: {
      mobileNumber: localStorage.getItem("mobile"),
      employeeId: localStorage.getItem("emp_code"),
      zone: usergetList.length > 0 ? usergetList[0].ZONE : "",
      region: usergetList.length > 0 ? usergetList[0].REGION : "",
      area: usergetList.length > 0 ? usergetList[0].AREA : "",
      branch: usergetList.length > 0 ? usergetList[0].LOCATION : "",
      dealerCode: "",
      dealerDescription: "",
      natureofVisit: "",
      reasonForVisit: "",
      comments: "",
      checkIn: true,
      lat: location?.latitude,
      long: location?.longitude,
    },
    enableReinitialize: true, // This allows initialValues to be updated
    validate: (values) => {
      // Your validation logic
    },
    onSubmit: (values) => {
      //  console.log('Form values:', values);

      const QueryPayload = {
        ...values,
        lat: location?.latitude,
        long: location?.longitude,
      };

      const userData = {
        payload: QueryPayload,
        endPoint: CREATE_GET_URL,
      };

      dispatch(createUser(userData));
    },
  });

  useEffect(() => {
    // Update form values when usergetList changes
    if (usergetList.length > 0) {
      formik.setValues({
        ...formik.values,
        employeeId: usergetList.length > 0 ? usergetList[0].EMPLOYEE_CODE : "",
        zone: usergetList.length > 0 ? usergetList[0].ZONE : "",
        region: usergetList.length > 0 ? usergetList[0].REGION : "",
        area: usergetList.length > 0 ? usergetList[0].AREA : "",
        branch: usergetList.length > 0 ? usergetList[0].LOCATION : "",
      });
      setSubBUtton(false);
    } else {
      setSubBUtton(true);
      // toast.error("invalied Mobile Number", {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
    }
  }, [usergetList]);

  const handleChange = (e) => {
    // You can handle additional logic here if needed
    formik.handleChange(e);
    console.log(formik.values, "formikformik");
    // Add any extra logic here...
  };

  // const formik = useFormik({
  //   initialValues: {
  //     mobileNumber: '',
  //     employeeId: '',
  //     zone: '',
  //     egion: '',
  //     area: '',
  //     branch: '',
  //     dealerCode: '',
  //     dealerDescription: '',
  //     reasonForVisit: '',
  //     comments: '',
  //     checkIn: false,
  //   },
  //   onSubmit: (values) => {
  //     // Handle form submission here, e.g., make an API call
  //     console.log('Form values:', values);

  //   },
  // });

  const [MobNum, setMobileNum] = useState("");

  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/user-master");
  // };
  // console.log(formik.errors.employeeId,'formik.errors.employeeId')
  // const handleSearchChange = (event) => {
  //   // onChange={handleChange}
  //   handleChange(event.target.value)
  //   const num = event.target.value;
  //   // console.log(num.length,'ssmdnskdn')
  //   if (num.length === 10) {
  //     setMobileNum(num);
  //     // console.log(num.length,'ssmdnskdn')
  //     const mobileNUm = `(MOBILE_NUMBER,eq,${num})`
  //     // dispatch(fetchUserList(MOBILE_GET_URL + ? `where=${(mobileNUm)}`)
  //     const url = MOBILE_GET_URL + `?where=${mobileNUm}`;
  //     // fetchRegion(GET_INWARD_BRANCH_ENDPOINT + `?productType=${e.yolo}`)
  //     // console.log(url,'urlurl')
  //     dispatch(fetchUserList(url));
  //     dispatch(fetchTranxID(DEALER_GET_URL));

  //   }

  //   // const mobileNum = "123456789"; // Replace with the actual mobile number
  //   // const url = MOBILE_GET_URL + `?where=${encodeURIComponent(mobileNum)}`;

  //   // dispatch(fetchUserList(url));

  // };

  const handleSearchChange = (event) => {
    formik.handleChange(event); // Ensure this line is present to update the formik state
    const num = event.target.value;

    // if (num.length === 10) {
    //   setMobileNum(num);
    //   const mobileNUm = `(MOBILE_NUMBER,eq,${num})`;
    //   const url = MOBILE_GET_URL + `?where=${mobileNUm}`;
    //   dispatch(fetchUserList(url));
    //   dispatch(fetchTranxID(DEALER_GET_URL));
    // }
  };

  const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(fetchTranxID(DEALER_GET_URL));
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Successfully obtained the current location
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
          },
          (err) => {
            // Handle location error
            setError(err.message);
          }
        );
      } else {
        setError("Geolocation is not supported by your browser");
      }
    };

    getLocation();
  }, []);

  useEffect(() => {
    setDropDealer(dealerList.data);
  }, [dealerList.data]);

  // const handleChangeGrant = (e) => {
  //   // setValues({ ...values, n_grant: e.target.value });
  //   formik.handleChange(e);
  //   // console.log(dropDealer, 'dealerList')
  //   setSelectedval(e.target.value)
  //   const filteredDropped = dropDealer.filter((element) => element.supplierID == e.target.value);
  //   // console.log(filteredDropped.supplierDesc,'filteredDropped')
  //   setChoosedataDec(filteredDropped[0].supplierDesc);
  //   formik.setFieldValue('dealerDescription', filteredDropped.supplierDesc);
  //   // formik.handleChange(ilteredDropped[0].supplierDesc);
  // };

  const handleChangeGrant = (e) => {
    formik.handleChange(e);

    const filteredDropped = dropDealer.find(
      (element) => element.supplierID === e.target.value
    );
    if (filteredDropped) {
      setChoosedataDec(filteredDropped.supplierDesc);
      formik.setFieldValue("dealerDescription", filteredDropped.supplierDesc);
    }
  };
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    // console.log(data.status,'ssldkmsdata')
    if (posts?.status == "success") {
      toast.success(posts?.message, {
        position: "top-right",
      });

      setTimeout(() => {
        // navigate('/CongratsPage')
        // dispatch(clearUserData())
        // dispatch(clearUserPullData())
        // setSearchQuery('')
        formik.setValues({
          ...formik.values,
          mobileNumber: "",
          employeeId: "",
          zone: "",
          egion: "",
          area: "",
          branch: "",
          dealerCode: "",
          dealerDescription: "",
          natureofVisit: "",
          reasonForVisit: "",
          comments: "",
          checkIn: true,
          lat: location?.latitude,
          long: location?.longitude,
        });
      }, 1000);
    }
  }, [posts]);
  // console.log(location.latitude,'location')
  // console.log(posts.message,'posts')
  return (
    <>
      <ToastContainer />
      <div className=" p-0">
        <div className="bgImgdash">
          <div className="center_logo">
            <span className="center_content">Ballot Spot</span>
          </div>
          <div className="center_slogan">
            <span className="stop">VOTE, ENGAGE, EMPOWER</span>

            <span className="slow">Your Voice, Your Future</span>
          </div>
          <div className="sign_btn">
            <button className="signbtn " onClick={() => { navigate(LOGIN_ROUTE); }}>Sign in - </button>
            <button className="signbtn2 " onClick={() => { navigate(LOGIN_ROUTE); }}>Guest Signin - </button>
            <span className="register" onClick={() => { navigate(EnterMobile_ROUTE); }}>Register For an account</span>
          </div>
        </div>
      </div>

    </>
  );
};

export default Dashboard;
