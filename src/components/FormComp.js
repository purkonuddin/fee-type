import React from "react";
import { Formik, Form } from "formik";
import TextField, { SelectOption, TextAreaField } from "./Form/TextField";
import { validateForm } from "../validation/validateForm";

class FormComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ftCode: "",
      ftName: "",
      ftDescription: "",
      ftStatus: "active",
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    // this.textNameChange = this.statusChange.bind(this);
    this.cancelUpd = this.cancelUpd.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.upd.ftCode !== state.ftCode) {
      return {
        ftCode: props.upd.ftCode,
        ftName: props.upd.ftName,
        ftDescription: props.upd.ftDescription,
        ftStatus: props.upd.ftStatus,
      };
    }

    // Return null to indicate no change to state.
    return null;
  }

  onFormSubmit(values) {
    console.log("form values ==>", values);
    console.log("form values ==>", values.ftCode);
    console.log("this.props.upd ==>", this.props.upd);

    // e.preventDefault();
    if (this.props.upd.ftCode) {
      // update component
      this.props.propUpd({
        ftCode: this.props.upd.ftCode,
        ftName: values.ftName,
        ftDescription: values.ftDescription,
        ftStatus: values.ftStatus,
      });
    } else {
      var formVal = {
        ftCode: values.ftCode,
        ftName: values.ftName,
        ftDescription: values.ftDescription,
        ftStatus: values.ftStatus,
      };
      this.props.onAdd(formVal);
    }
    this.setState({
      ftCode: "",
      ftName: "",
      ftDescription: "",
      ftStatus: "active",
    });
  }
  cancelUpd() {
    this.props.updcan();
    this.setState({
      ftCode: "",
      ftName: "",
      ftDescription: "",
      ftStatus: "active",
    });
  }

  render() {
    console.log(this.props.upd);
    return (
      <div>
        <Formik
          initialValues={{
            ftCode: this.state.ftCode,
            ftName: this.state.ftName,
            ftDescription: this.state.ftDescription,
            ftStatus: this.state.ftStatus,
          }}
          validationSchema={validateForm}
          //(values) => console.log("form values ==>", values)
          onSubmit={(values) => this.onFormSubmit(values)}
        >
          {(formik) => (
            <Form>
              <TextField
                label={"Fee Type Code"}
                name={"ftCode"}
                type={"text"}
              />
              <TextField
                label={"Fee Type Name"}
                name={"ftName"}
                type={"text"}
              />
              <TextAreaField
                label={"Description"}
                name={"ftDescription"}
                type={"text"}
              />
              <SelectOption label={"Status"} name={"ftStatus"} type={"text"} />
              <button type="submit" className="btn btn-primary mt-2">
                {this.props.upd.ftCode ? "Save changes" : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default FormComp;
