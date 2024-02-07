import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Assign2 = () => {
    return (
        <div>
            <Header />
            <div className='agentadd_datas'>
                <div class="addAgent_datapoints dropdown">
                    <label for="exampleFormControlInput1" class="form-label">
                        State
                    </label>
                    <button
                        class="addAgent_datapointsdropdown  dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="inside"
                        aria-expanded="false"
                        id="State"
                    >
                        State
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="#">
                                Action
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                Another action
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                Something else here
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="addAgent_datapoints dropdown">
                    <label for="exampleFormControlInput1" class="form-label">
                        Constituency
                    </label>
                    <button
                        class="addAgent_datapointsdropdown  dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="inside"
                        aria-expanded="false"
                        id="Constituency"
                    >
                        Constituency
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="#">
                                Action
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                Another action
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                Something else here
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="addAgent_datapoints dropdown">
                    <label for="exampleFormControlInput1" class="form-label">
                        Division
                    </label>
                    <button
                        class="addAgent_datapointsdropdown  dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="inside"
                        aria-expanded="false"
                        id="Division"
                    >
                        Division
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="#">
                                Action
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                Another action
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                Something else here
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="addAgent_datapoints dropdown">
                    <label for="exampleFormControlInput1" class="form-label">
                        Booth
                    </label>
                    <button
                        class="addAgent_datapointsdropdown  dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="inside"
                        aria-expanded="false"
                        id="Booth"
                    >
                        Booth
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="#">
                                Action
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                Another action
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">
                                Something else here
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="search_agent_inside ">
                    <div className="d-flex " style={{ flexBasis: "90%" }}>
                        <form className="searchagentform" role="search">
                            <input
                                className="form-control searchagentinput "
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            // value={searchQuery}
                            // onChange={(e) => setBarCode(e.target.value)}
                            />
                        </form>
                    </div>
                    <div style={{ flexBasis: "10%" }}>
                        <button
                            className="search_agent_btn  "
                        // onClick={() => handleClick(searchLeadID)}
                        >
                            {" "}
                            <h4
                                className="text-white bi bi-search mb-0"
                            // src={search_new_img}
                            ></h4>
                        </button>
                    </div>
                </div>
                <div className="addAgent_datapoints">
                    <label for="exampleFormControlInput1" class="form-label">
                       Vote From No.
                    </label>
                    <input
                        type="email"
                        class="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="User ID"
                    />
                </div>
                <div className="addAgent_datapoints">
                    <label for="exampleFormControlInput1" class="form-label">
                       Vote To No.
                    </label>
                    <input
                        type="email"
                        class="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="User ID"
                    />
                </div>
                <button className="wb_login mt-4 mb-4">Filter</button>
            </div>
            <Footer />
        </div>
    )
}

export default Assign2