import React, { useState, useEffect, useContext } from "react";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Header.css";

const Adminheader = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [navbarClass, setNavbarClass] = useState("navbar-darkgrey-translucent");
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      setNavbarClass(
        window.scrollY > 0 ? "navbar-black" : "navbar-darkgrey-translucent"
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShowRegister = () => setShowRegisterModal(true);
  const handleCloseRegister = () => setShowRegisterModal(false);
  const handleLoginRedirect = () => {
    handleCloseRegister();
    navigate("/login");
  };
  const handleCheckboxChange = (e) => {
    setAgreeTerms(e.target.checked);
  };

  return (
    <div>
      {/* Navbar Start */}
      <div className="container-fluid position-relative p-0">
        <nav
          className={`navbar navbar-expand-lg fixed-top px-4 py-3 ${navbarClass}`}
          style={{ background: "rgba(33, 37, 41, 0.85)" }}
        >
          <Link to="/" className="navbar-brand p-0">
            <h1 className="text-white m-0">Admin Wander Luxe</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars text-white" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/Users" className="nav-item nav-link text-white">
                Users
              </Link>
              <Link to="/AdminGuides" className="nav-item nav-link text-white">
                Guides
              </Link>
              <Link to="/AdminCountries" className="nav-item nav-link text-white">
                Countries
              </Link>
              <Link to="/AdminCities" className="nav-item nav-link text-white">
                City
              </Link>
              <Link to="/AdminLocations" className="nav-item nav-link text-white">
                Location
              </Link>
              <Link to="/AdminHotels" className="nav-item nav-link text-white">
                Hotels
              </Link>
            </div>
            {user ? (
              <div className="d-flex align-items-center ms-3">
                <Dropdown align="end">
                  <Dropdown.Toggle
                    variant="light"
                    id="dropdown-basic"
                    className="d-flex align-items-center px-3 py-2 bg-white text-dark border rounded shadow-sm"
                    style={{ cursor: "pointer" }}
                  >
                    <span className="fw-bold">{user.name}</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="shadow">
                    <Dropdown.Item
                      onClick={() => navigate("/dashboard")}
                      className="d-flex align-items-center"
                    >
                      <FaUser className="me-2" /> View Profile
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      onClick={handleLogout}
                      className="d-flex align-items-center text-danger"
                    >
                      <FaSignOutAlt className="me-2" /> Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ) : (
              <>
                <Button
                  variant="warning"
                  className="rounded-pill py-2 px-4 ms-3"
                  onClick={handleShowRegister}
                >
                  Register
                </Button>
                <Link
                  to="/Login"
                  className="btn btn-outline-light rounded-pill py-2 px-4 ms-3"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
      {/* Navbar End */}

      {/* Register Modal */}
      <Modal
        show={showRegisterModal}
        onHide={handleCloseRegister}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign in / Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center mb-4">
            <h2 className="fw-bold">Your Adventure Starts Now</h2>
            <p className="text-muted">
              Receive our exclusive travel deals now!
            </p>
          </div>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                className="p-3 border-0 shadow-sm"
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                className="p-3 border-0 shadow-sm"
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                className="p-3 border-0 shadow-sm"
              />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword" className="mb-3">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                className="p-3 border-0 shadow-sm"
              />
            </Form.Group>
            <Button
              variant="primary"
              className="w-100 py-3 mb-4 fw-bold shadow"
            >
              Submit
            </Button>
          </Form>
          <div className="text-center mt-4">
            <p className="fw-bold">
              Already have an account?{" "}
              <span
                className="text-primary"
                style={{ cursor: "pointer" }}
                onClick={handleLoginRedirect}
              >
                Login here
              </span>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Adminheader;