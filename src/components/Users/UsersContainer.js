import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  unfollow,
  toggleFollowingProgress,
  requestUsers,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import { compose } from "redux";
import {
  getCurrentPage,
  getTotalUsersCount,
  getPageSize,
  getIsFetching,
  getFollowingInProgress,
  getUsers,
} from "../../redux/users-selector";

class UsersContainer extends React.Component {
  componentDidMount() {
    const {currentPage,pageSize} = this.props;
    this.props.requestUsers(currentPage, pageSize);
  }
  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props;
    this.props.setCurrentPage(pageNumber);
    this.props.requestUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgess={this.props.followingInProgess}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgess: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
  })
)(UsersContainer);
