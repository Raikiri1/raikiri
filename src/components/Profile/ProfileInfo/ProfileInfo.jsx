import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile,status,updateStatus}) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img src="https://avatars.mds.yandex.net/i?id=f087e3f9bee955bc71551edd050c977080875cb6-8280929-images-thumbs&n=13" />
      </div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};
export default ProfileInfo;
