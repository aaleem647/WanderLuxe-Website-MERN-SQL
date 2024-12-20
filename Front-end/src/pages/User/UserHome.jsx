import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ProgressBar,
} from "react-bootstrap";

export default function UserHome() {
  return (
    <>
      {/* Hero Header Section */}
      <div className="container-fluid hero-header bg-primary py-5 mb-4 text-light">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-3 fw-bold mb-4 animate__animated animate__slideInDown">
                Welcome to Wanderluxe – Your Gateway to Extraordinary
                Adventures!
              </h1>
              <p className="lead mb-4 animate__animated animate__slideInDown">
                At Wanderluxe, we believe every journey should be more than just
                a trip; it should be a story waiting to unfold.
              </p>
              <a
                href="/packages"
                className="btn btn-lg btn-outline-light px-5 py-3 animate__animated animate__slideInUp"
              >
                Explore Packages
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center py-5">
        <div className="row animate__animated animate__fadeIn">
          <div className="col-12">
            <div className="card border-0 shadow-lg mb-4">
              <div className="card-body py-4 bg-primary text-white rounded">
                <div className="row">
                  <div className="col-md-3 col-sm-6 mb-3 mb-md-0">
                    <div className="feature-box">
                      <i className="fa fa-map-marker-alt fa-2x mb-3"></i>
                      <h5>50+ Destinations</h5>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3 mb-md-0">
                    <div className="feature-box">
                      <i className="fa fa-tags fa-2x mb-3"></i>
                      <h5>Best Price Guaranteed</h5>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 mb-3 mb-md-0">
                    <div className="feature-box">
                      <i className="fa fa-leaf fa-2x mb-3"></i>
                      <h5>Eco Friendly Tourism</h5>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="feature-box">
                      <i className="fa fa-rocket fa-2x mb-3"></i>
                      <h5>Super Fast Booking</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="mb-4">Pakistan’s Leading Tourism Company</h1>
            <p className="lead">
              Discover breathtaking and amazing Pakistan with one of the best
              Travel and Tourism Companies in Pakistan. We are offering valued
              touristy plans with complete travel services in affordable
              <a href="#" className="text-primary font-weight-bold">
                tour packages
              </a>{" "}
              from Lahore, Islamabad, and Karachi. Our tour managers and guides
              organize thrilling and adventurous journeys to bring unforgettable
              holidays to life. So, pack your bags and travel with Pakistan
              Travel Places (PTP) to turn your travel dreams into reality.
            </p>
          </div>
        </div>
      </div>
      
      
          
      {/* Service and Process Section Start */}
      <section className="container-xxl py-5 services-process bg-light">
        <div className="container">
          {/* Service Section Start */}
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Services
            </h6>
            <h1 className="mb-5">Our Services</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-map-marker-alt text-primary mb-4" />
                  <h5>City and Country Exploration</h5>
                  <p>
                    Users can browse cities within a country, view available
                    hotels, and explore popular travel locations.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-hotel text-primary mb-4" />
                  <h5>Hotel Selection by City</h5>
                  <p>
                    Users can select a city to view available hotels and filter
                    based on preferences like price, amenities, and room types.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-plane text-primary mb-4" />
                  <h5>Custom Travel Packages</h5>
                  <p>
                    Users can create their own travel package by selecting a
                    country, cities, hotels, locations, and an optional tour
                    guide.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-user text-primary mb-4" />
                  <h5>Tour Guide Selection</h5>
                  <p>
                    Users can select one guide for the entire trip or opt to
                    proceed without a guide. Guides charge based on service
                    days.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-user-circle text-primary mb-4" />
                  <h5>User Account Management</h5>
                  <p>
                    Travelers can create accounts, store preferences, and manage
                    bookings.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-credit-card text-primary mb-4" />
                  <h5>Payment System</h5>
                  <p>
                    Users can book and pay for the entire package, including
                    hotels, locations, and guides, via a secure payment gateway.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-tasks text-primary mb-4" />
                  <h5>Custom Itinerary Management</h5>
                  <p>
                    The created package will include a detailed itinerary that
                    users can manage and update if needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Process Section Start */}
          <div className="text-center wow fadeInUp mt-5" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Booking Process
            </h6>
            <h2 className="mb-4">How to Book Your Dream Trip</h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="process-step rounded shadow p-4 text-center">
                <div className="process-icon bg-primary text-white px-2 py-2 rounded rounded-lg mb-4 d-flex align-items-center justify-content-center">
                  <i className="fa fa-2x fa-globe"></i>
                </div>
                <h5>Select Country</h5>
                <p>Begin by selecting the country you want to explore.</p>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="process-step rounded shadow p-4 text-center">
                <div className="process-icon bg-primary text-white px-2 py-2 rounded rounded-lg mb-4 d-flex align-items-center justify-content-center">
                  <i className="fa fa-2x fa-city"></i>
                </div>
                <h5>Select City</h5>
                <p>Choose the cities within the selected country to visit.</p>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="process-step rounded shadow p-4 text-center">
                <div className="process-icon bg-primary text-white px-2 py-2 rounded rounded-lg mb-4 d-flex align-items-center justify-content-center">
                  <i className="fa fa-2x fa-user-tie"></i>
                </div>
                <h5>Optional Tour Guide</h5>
                <p>
                  Opt to select a tour guide for your trip or proceed without
                  one.
                </p>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
              <div className="process-step rounded shadow p-4 text-center">
                <div className="process-icon bg-primary text-white px-2 py-2 rounded rounded-lg mb-4 d-flex align-items-center justify-content-center">
                  <i className="fa fa-2x fa-hotel"></i>
                </div>
                <h5>Select Hotels and Locations</h5>
                <p>
                  Pick from available hotels and select popular travel locations
                  to visit.
                </p>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.9s">
              <div className="process-step rounded shadow p-4 text-center">
                <div className="process-icon bg-primary text-white px-2 py-2 rounded rounded-lg mb-4 d-flex align-items-center justify-content-center">
                  <i className="fa fa-2x fa-user-circle"></i>
                </div>
                <h5>Create Account</h5>
                <p>
                  Create an account to store preferences and manage your
                  bookings easily.
                </p>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="1.1s">
              <div className="process-step rounded shadow p-4 text-center">
                <div className="process-icon bg-primary text-white px-2 py-2 rounded rounded-lg mb-4 d-flex align-items-center justify-content-center">
                  <i className="fa fa-2x fa-credit-card"></i>
                </div>
                <h5>Make Payment</h5>
                <p>
                  Book and pay for the entire package, including hotels,
                  locations, and guides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
