import React from "react";
import { Field, reduxForm } from "redux-form";

class Form extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="invalid-feedback">
          <div>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta, type }) => {
    const className = `form-group`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} className="form-control" type={type} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="username"
          component={this.renderInput}
          label="Username"
          type="text"
        />
        <Field
          name="password"
          component={this.renderInput}
          label="Enter Description"
          className="form-control"
          type="password"
        />
        <button className="btn btn-primary">
          <span className="spinner-border spinner-border-sm mr-1"></span>
          Login
        </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.username) {
    errors.username = "Username is required";
  }

  if (!formValues.password) {
    errors.password = "Password is required";
  }

  return errors;
};

export default reduxForm({
  form: "Form",
  validate,
})(Form);
