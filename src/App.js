import React from "react";
import "./App.css";
import "./App.sass";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import {
  House,
  BriefcaseFill,
  QuestionCircle,
  Bell,
  Download,
  Printer,
  FileEarmarkPlusFill,
  Search,
  PencilFill,
  EyeFill,
  Trash2Fill,
  ChevronDoubleDown,
} from "react-bootstrap-icons";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Badge from "react-bootstrap/Badge";
import InputGroup from "react-bootstrap/InputGroup";
import user from "./images/user.png";
import logo from "./images/logo.png";
import FormComp from "./components/FormComp";

//jQuery libraries
import "jquery/dist/jquery.min.js";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

import $ from "jquery";
$(document).ready(function () {
  $("#fttable").DataTable({
    // dom: 'rt<"bottom"lip><"clear">',
    destroy: true,
    searchPanes: {
        layout: 'columns-2'
    },
    dom:  "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-12 col-md-4'l><'col-sm-12 col-md-4'i><'col-sm-12 col-md-4'p>>",
    columnDefs: [
        {
            searchPanes: {
                show: true
            },
            targets: [0, 2]
        }
    ],
    buttons: [
        {
            extend: 'print',
            text: '<em>P</em>rint',
            key: {
                key: 'p',
                altkey: true
            }
        }
    ]
  });
});



function App() {
  return (
    <Container fluid>
      <Row>
        <Col
          xs={12}
          sm={1}
          className="text-white pt-3"
          style={{ height: "100vh", maxWidth: "80px" }}
          id="left-section"
        >
          <VerticalStackComp />
        </Col>
        <Col xs={12} sm={11}>
          <Row className="mb-3 pb-3 pt-3 border-bottom">
            <Col>
              <HeaderComp />
            </Col>
          </Row>
          <Row>
            <BreadcrumbComp />
          </Row>
          <Row className="mb-5">
            <Col>
              <h2>Fee Type</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <DatatableComp />
            </Col>
          </Row>
        </Col>
        <Col>
          <div id="displayTable"></div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

const BreadcrumbComp = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Master Data Management</Breadcrumb.Item>
      <Breadcrumb.Item active>Fee Type</Breadcrumb.Item>
    </Breadcrumb>
  );
};

function VerticalStackComp() {
  return (
    <Stack gap={2} className="col-md-10 mx-auto">
      <Button variant="link">
        <House color="#fff" />
      </Button>
      <Button variant="warning" className="bg-warning border border-warning ">
        <BriefcaseFill color="#fff" />
      </Button>
    </Stack>
  );
}

function HeaderComp() {
  return (
    <Stack direction="horizontal" gap={1}>
      <div className="bg-light">
        <img src={logo} className="mx-auto d-block" height={60} alt="..."></img>
      </div>
      <div className="ms-auto">
        <Button
          className="bg-transparent border-0"
          variant="light"
          style={{ paddingInline: "2px" }}
        >
          <QuestionCircle color="#000" />
        </Button>
      </div>
      <div className="">
        <Button
          className="bg-transparent border-0"
          variant="light"
          style={{ paddingInline: "2px" }}
        >
          <Bell color="#000" />
          <Badge
            pill
            bg="danger"
            style={{
              fontSize: "7px",
              top: "-7px",
              position: "relative",
              left: "-7px",
            }}
          >
            {"0"}
          </Badge>
        </Button>
      </div>
      <div className="rounded-circle d-flex justify-content-center text-nowrap">
        <ProfileBtnComp />
      </div>
    </Stack>
  );
}

const NewFreeBtnComp = ({ children }) => {
  const [show, setShow] = React.useState(false);
  const toggleModal = () => setShow(!show);

  return (
    <>
      <Button
        variant="warning"
        className="border rounded text-white"
        onClick={toggleModal}
        id="me-btn-primary"
      >
        <FileEarmarkPlusFill color="#fff" /> Fee Type
      </Button>
      <ModalComp show={show} toggleModal={toggleModal}>
        {children}
      </ModalComp>
    </>
  );
};

const ModalComp = ({ children, show, toggleModal }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={toggleModal}
        backdrop="static"
        keyboard={false}
        id="ftmodal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Fee Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

const PrintBtnComp = ({ children }) => {
  const [toggleShow] = React.useState(true);

  return (
    <>
      <Button
        variant="light"
        className="border rounded-circle text-black"
        onClick={() => toggleShow(true)}
        id="me-btn-secondary"
      >
        {" "}
        <Printer color="#000" />{" "}
      </Button>
    </>
  );
};

const DownloadBtnComp = ({ children }) => {
  const [toggleShow] = React.useState(true);

  return (
    <>
      <Button
        variant="light"
        className="border rounded-circle text-black me-btn-secondary"
        onClick={() => toggleShow(true)}
        title="print-btn"
        id="me-btn-secondary"
      >
        {" "}
        <Download color="#000" />{" "}
      </Button>
    </>
  );
};

const ProfileBtnComp = () => {
  const [toggleShow] = React.useState(true);
  return (
    <>
      <Button
        variant="light"
        className="rounded-circle d-flex justify-content-center text-nowrap p-1"
        onClick={() => toggleShow(true)}
      >
        {" "}
        <img
          src={user}
          className="mx-auto d-block bg-profile"
          width={40}
          height={40}
          alt="..."
        ></img>
      </Button>
    </>
  );
};

class DatatableComp extends React.Component {
  constructor(props, context) {
    super(props);

    this.state = {
      TRs: [
        {
          ftCode: 1,
          ftName: "rock",
          ftDescription:
            "A form of solid matter that can break the head whoever hits",
          ftStatus: "active",
        },
      ],
      UPD: [],
      show: false,
    };
    this.onAddForm = this.onAddForm.bind(this);
    this.updateRow = this.updateRow.bind(this);
    this.cancelUpd = this.cancelUpd.bind(this);
    this.propcessUpd = this.propcessUpd.bind(this);
  }

  toggleModal = () => {
    this.setState({ show: !this.state.show });
  };

  updateRow(x) {
    var array = this.state.TRs;
    var index = array.findIndex((e) => e.ftCode === x);
    this.setState({
      UPD: this.state.TRs[index],
    });
    console.log(index, x);
    // $("#ftmodal").modal("show");
    this.toggleModal();
  }

  cancelUpd() {
    this.setState({ UPD: [] });
  }

  onAddForm(formVal) {
    console.log(1000000, formVal);
    var ctr = this.state.TRs.length + 1;
    var Ndata = {
      ftCode: ctr,
      ftName: formVal.ftName,
      ftDescription: formVal.ftDescription,
      ftStatus: formVal.ftStatus,
    };
    this.setState({ TRs: this.state.TRs.concat([Ndata]), UPD: {} });
  } // end add form function

  propcessUpd(formVal) {
    var obj = this.state.TRs;
    var index = obj.findIndex((e) => e.ftCode === formVal.ftCode);
    obj[index] = formVal;
    this.setState({ TRs: obj, UPD: [] });
  }

  handleAllCbox = () => {
    var cnt = $("#fttable").find("input:checkbox[name=allcbox]:checked");
    // console.log(cnt.length);
    if (cnt.length) {
      $("input:checkbox[name=cbox]").prop("checked", true);
    } else {
      $("input:checkbox[name=cbox]").prop("checked", false);
    }
    // this.props.canHan();
  };

  // delete multiple data
  deleteRow = (z) => {
    var array = this.state.TRs;
    var index = array.findIndex((e) => e.ftCode === z);
    array.splice(index, 1);
    this.setState({ TRs: array });
    console.log(index);
  };

  delNrow = () => {
    var cnt = $("#fttable").find("input:checkbox[name=cbox]:checked");
    if (cnt.length) {
      // eslint-disable-next-line no-restricted-globals
      var cof = confirm("are you sure !!");
      if (cof) {
        const tbox = $("#fttable").find("input:checkbox[name=cbox]:checked");
        console.log(tbox);
        var arr = [];
        tbox.each(function () {
          arr.push(parseInt($(this).val()));
        });
        for (var i = 0; i < arr.length; i++) {
          this.deleteRow(arr[i]);
        }
        $("#del_rowBtn").hide();
      }
    } else {
      alert("select field first !!");
    }
  };

  componentDidMount() {

  }

  render() {
    const tRow = this.state.TRs.map((tr) => (
      <TableBody
        onUpd={this.updateRow}
        TRs={tr}
        key={tr.ftCode}
        canHan={this.cancelUpd}
        onDell={this.delNrow}
      />
    ));
    return (
      <>
        <div>
          <ModalComp show={this.state.show} toggleModal={this.toggleModal}>
            <FormComp
              onAdd={this.onAddForm}
              upd={this.state.UPD}
              updcan={this.cancelUpd}
              propUpd={this.propcessUpd}
            />
          </ModalComp>
        </div>
        <div id="example_wrapper" className="dataTables_wrapper">
          <Stack direction="horizontal" gap={3} className="mb-1">
            <div>
              <InputGroup>
                <Form.Control
                  className="me-auto border-end-0"
                  placeholder="search fee type here..."
                  style={{ borderColor: "#dee2e6" }}
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  style={{ borderColor: "#dee2e6" }}
                  className="border-start-0"
                >
                  <Search />
                </Button>
              </InputGroup>
            </div>
            <div>
              <AdvancedOptComp id="del_rowBtn" onClick={this.delNrow} />
            </div>
            <div className="ms-auto">
              <DownloadBtnComp />
            </div>
            <div>
              <PrintBtnComp />
            </div>
            <div>
              <NewFreeBtnComp>
                <FormComp
                  onAdd={this.onAddForm}
                  upd={this.state.UPD}
                  updcan={this.cancelUpd}
                  propUpd={this.propcessUpd}
                />
              </NewFreeBtnComp>
            </div>
          </Stack>
          <Table id="fttable" hover size="sm">
            <thead className="bg-dark text-bg-dark" style={{}}>
              <tr>
                <th style={{ borderRadius: "7px 0 0 0" }}> </th>
                <th>
                  <Form.Check
                    type="checkbox"
                    label=""
                    name="allcbox"
                    onChange={this.handleAllCbox}
                  />
                </th>
                <th>Fee Type Code</th>
                <th>Fee Type Name</th>
                <th>Description</th>
                <th>Status</th>
                <th style={{ borderRadius: "0 7px 0 0" }}>Action</th>
              </tr>
            </thead>
            <tbody>{tRow}</tbody>
            <tfoot><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tfoot>
          </Table>
          {/* <Stack direction="horizontal" gap={3}>
            <div
              className="dataTables_info"
              id="example_info"
              role="status"
              aria-live="polite"
            >
              <Form.Select aria-label="Default select example">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </Form.Select>
            </div>
            <div> Showing 1 to 10 of 57 entries</div>
            <div
              className="dataTables_paginate paging_simple_numbers ms-auto"
              id="example_paginate"
            >
              <a
                className="paginate_button previous disabled"
                aria-controls="example"
                data-dt-idx="previous"
                id="example_previous"
                href="# "
              >
                Previous
              </a>
              <span>
                <a
                  className="paginate_button current"
                  aria-controls="example"
                  data-dt-idx="0"
                  tabIndex="0"
                  href="# "
                >
                  1
                </a>
                <a
                  className="paginate_button "
                  aria-controls="example"
                  data-dt-idx="1"
                  tabIndex="0"
                  href="# "
                >
                  2
                </a>
                <a
                  className="paginate_button "
                  aria-controls="example"
                  data-dt-idx="2"
                  tabIndex="0"
                  href="# "
                >
                  3
                </a>
              </span>
              <a
                className="paginate_button next"
                aria-controls="example"
                data-dt-idx="next"
                id="example_next"
                href="# "
              >
                Next
              </a>
            </div>
          </Stack> */}
        </div>
      </>
    );
  }
}

const AdvancedOptComp = (props) => {
  return (
    <>
      <a
        href="# "
        className="text-decoration-none me-advanced-btn"
        id={props.id}
        onClick={props.onClick}
      >
        Advanced Option <ChevronDoubleDown color="black" fill="bold" />
      </a>
    </>
  );
};

class TableBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
  }

  updateBtn = (value) => {
    console.log(value);
    this.props.onUpd(value);
  };

  delNrow = () => {
    // console.log(e);
    this.props.onDell();
  };

  handleCbox = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
    var cnt = $("#fttable").find("input:checkbox[name=cbox]:checked");
    if (cnt.length) {
      $("#del_rowBtn").show();
    } else {
      $("#del_rowBtn").hide();
    }
    this.props.canHan();
  };

  render() {
    const divStyle = {
      margin: 0,
    };

    return (
      <tr id={"tr-" + this.props.TRs.ftCode.toString()}>
        <td>::</td>
        <td>
          <div className="checkbox" style={divStyle}>
            <label>
              <input
                name="cbox"
                onChange={this.handleCbox}
                type="checkbox"
                id={"check_bx" + this.props.TRs.ftCode}
                value={this.props.TRs.ftCode}
              />
              {/* &nbsp;{this.props.TRs.ftCode} */}
            </label>
          </div>
        </td>
        <td>{this.props.TRs.ftCode}</td>
        <td>{this.props.TRs.ftName}</td>
        <td>{this.props.TRs.ftDescription}</td>
        <td>{this.props.TRs.ftStatus}</td>
        <td>
          <Stack direction="horizontal" gap={1}>
            <div>
              <button
                onClick={() => this.updateBtn(this.props.TRs.ftCode)}
                value={this.props.TRs.ftCode}
                data-item={this.props.TRs.ftCode}
                variant="light"
                className="btn bg-transparent border-0 p-0"
                id={this.props.TRs.ftCode}
              >
                <PencilFill />
              </button>
              {/* )} */}
            </div>
            <div>
              <Button onClick={() => this.updateBtn(this.props.TRs.ftCode)} variant="light" className="bg-transparent border-0 p-0">
                <EyeFill color="blue" />
              </Button>
            </div>
            <div>
              <Button
                onClick={this.delNrow}
                variant="light"
                className="bg-transparent border-0 p-0"
              >
                <Trash2Fill color="blue" />
              </Button>
            </div>
          </Stack>
        </td>
      </tr>
    );
  }
}