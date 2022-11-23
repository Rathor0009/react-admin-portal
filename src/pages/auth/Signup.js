import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from "yup";
import { Routes } from "../../routes";
import "./style.scss";
import BgImage from "../../assets/img/illustrations/signin.svg";


export default () => {
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("*Must be a valid email address")
    .max(100, "*Email must be less than 100 characters")
    .required("*Email is required"),
  password: Yup.string()
    .required("*Password is required")
    .min(8, "*Password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
});

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
      console.log(values);
      // When button submits form and form is in the process of submitting, submit button is disabled
      setSubmitting(true);

      // Resets form after submission is complete
      resetForm();

      // Sets setSubmitting to false after form is reset
      setSubmitting(false);
    };

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          {/* <p className="text-center">
            <Card.Link as={Link} to={Routes.DashboardOverview.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link>
          </p> */}
          <Row
            className="justify-content-center form-bg-image"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Create an account</h3>
                </div>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    confirmPassword: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <Form className="mt-4" onSubmit={handleSubmit}>
                      <Form.Group id="email" className="mb-4">
                        <Form.Label>Your Email</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faEnvelope} />
                          </InputGroup.Text>
                          <Form.Control
                            autoFocus
                            required
                            type="email"
                            placeholder="Email"
                            onBlur={handleBlur}
                            value={values.email}
                            className={
                              touched.email && errors.email ? "error" : null
                            }
                            id="email"
                            onChange={handleChange}
                          />
                        </InputGroup>
                        {touched.email && errors.email ? (
                          <div className="error-message">{errors.email}</div>
                        ) : null}
                      </Form.Group>
                      <Form.Group id="password" className="mb-4">
                        <Form.Label>Your Password</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faUnlockAlt} />
                          </InputGroup.Text>
                          <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            onBlur={handleBlur}
                            value={values.password}
                            id="password"
                            onChange={handleChange}
                            className={
                              touched.password && errors.password
                                ? "error"
                                : null
                            }
                          />
                        </InputGroup>
                        {touched.password && errors.password ? (
                          <div className="error-message">{errors.password}</div>
                        ) : null}
                      </Form.Group>
                      <Form.Group id="confirmPassword" className="mb-4">
                        <Form.Label>Confirm Password</Form.Label>
                        <InputGroup>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faUnlockAlt} />
                          </InputGroup.Text>
                          <Form.Control
                            required
                            type="password"
                            placeholder="Confirm Password"
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                            id="confirmPassword"
                            onChange={handleChange}
                            className={
                              touched.confirmPassword && errors.confirmPassword
                                ? "error"
                                : null
                            }
                          />
                        </InputGroup>
                        {touched.confirmPassword && errors.confirmPassword ? (
                          <div className="error-message">
                            {errors.confirmPassword}
                          </div>
                        ) : null}
                      </Form.Group>
                      <FormCheck type="checkbox" className="d-flex mb-4">
                        <FormCheck.Input required id="terms" className="me-2" />
                        <FormCheck.Label htmlFor="terms">
                          I agree to the{" "}
                          <Card.Link>terms and conditions</Card.Link>
                        </FormCheck.Label>
                      </FormCheck>

                      <Button
                        variant="primary"
                        type="submit"
                        className="w-100"
                        disabled={isSubmitting}
                      >
                        Sign up
                      </Button>
                    </Form>
                  )}
                </Formik>
                <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or</span>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pill text-facebook me-2"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pill text-twitter me-2"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                  <Button
                    variant="outline-light"
                    className="btn-icon-only btn-pil text-dark"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link
                      as={Link}
                      to={Routes.Signin.path}
                      className="fw-bold"
                    >
                      {` Login here `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
