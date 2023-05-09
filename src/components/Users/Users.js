import React from "react";
import Paginator from "../common/preloader/Paginator/Paginator";
import User from "./User";

let Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      {users.map((u) => (
        <User
          user={u}
          followingInProgess={props.followingInProgess}
          unfollow={props.unfollow}
          follow={props.follow}
          key={u.id}
        />
      ))}
    </div>
  );
};
export default Users;
