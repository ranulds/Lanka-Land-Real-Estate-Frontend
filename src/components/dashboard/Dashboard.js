import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";

import { logoutUser } from "../../actions/authActions";
import InnerPageBanner from "../layout/InnerPageBanner";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inquiries: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/inquiries")
      .then((response) => {
        this.setState({ inquiries: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onDeleteClick(id) {
    axios
      .delete("/api/inquiry/" + id)
      .then((res) => {
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log("Error from delete" + err);
      });
  }

  componentDidUpdate() {
    axios
      .get("/api/inquiries")
      .then((response) => {
        this.setState({ inquiries: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // onLogoutClick = e => {
  //   e.preventDefault();
  //   this.props.logoutUser();
  // };

  render() {
    // const { user } = this.props.auth;
    const { inquiries } = this.state;
    return (
      <div>
        <InnerPageBanner />
        <div className="container mt-5 mb-5">
          <table
            className="table table-hover text-center"
            style={{ tableLayout: "fixed" }}
          >
            <thead>
              <tr style={{ backgroundColor: "#2dde98" }}>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Email</th>
                <th scope="col">Subject</th>
                <th scope="col">Message</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {inquiries &&
                inquiries.map((inquiry, i) => {
                  return (
                    <tr key={i}>
                      <td>{inquiry.firstname}</td>
                      <td>{inquiry.lastname}</td>
                      <td>{inquiry.email}</td>
                      <td>{inquiry.subject}</td>
                      <td>{inquiry.message}</td>
                      <td>
                        <i
                          className="far fa-trash-alt"
                          style={{ color: "red" }}
                          onClick={this.onDeleteClick.bind(this, inquiry._id)}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
