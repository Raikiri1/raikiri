import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainor";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { initialzeApp } from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";

const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainor"));

class App extends Component {
  componentDidMount() {
    this.props.initialzeApp();
  }

  render() {
    if (!this.props.initialzed) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />

        <div className="app-wrapper-content">
        <Suspense fallback={<div><Preloader /></div>}>
						<Routes>
							<Route path="/profile/:userID" element={<ProfileContainer />} />
							<Route path="/profile" element={<ProfileContainer />} />
							<Route exact path="/dialogs" element={<DialogsContainer />} />
							{/* <Route path="/news" element={<News />} /> */}
							{/* <Route path="/music" element={<Music />} /> */}
							<Route path="/users" element={<UsersContainer />} />
							{/* <Route path="/settings" element={<Settings />} /> */}
							<Route path="/login" element={<Login />} />
						</Routes>
					</Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialzed: state.app.initialzed,
});

export default compose(connect(mapStateToProps, { initialzeApp }))(App);
