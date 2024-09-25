import UserInfo from 'profile/user';
import FormSwitch from 'login/FormSwitch';
import { useUserContext } from 'mediastore/contextHooks';

const Profile = () => {
  const { user } = useUserContext();
  console.log(user);

  return (
    <main className="p-4">
      <div className="w-full max-w-3xl mx-auto">
        {user ? <UserInfo /> : <FormSwitch />}
      </div>
    </main>
  );
};

export default Profile;