import axios from "axios";
import React, { useCallback } from "react";
import styles from "./users.module.css";
import userPhoto from "../../asers/images/user.png";
import { NavLink } from "react-router-dom";
import { userAPI, usersAPI } from "../../api/api";

let User = ({ user,followingInProgess,unfollow,follow}) => {
  return (
    <div>
          <span>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={user.photos.small != null ? user.photos.small : userPhoto}
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  disabled={followingInProgess.some((id) => id === user.id)}
                  onClick={() => {
                    unfollow(user.id);
                  }}
                >
                  unFollow
                </button>
              ) : (
                <button
                  disabled={followingInProgess.some((id) => id === user.id)}
                  onClick={() => {
                    follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
          </span>
        </div>
      )}
export default User;
