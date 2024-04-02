import '../Styles/settings.css';

export default function Settings(){
  return(
    <div className="settings">
      <div className="settings_wrapper">
        <h2 className="settings_title">Settings</h2>

        <div className="settings_top">
          <button className="setting_btn">My Details</button>
          <button className="setting_btn active_btn">Profile</button>
          <button className="setting_btn">Notification</button>
        </div>

        <div className="details_form">
          <h2 className="profile_title">Profile</h2>
          <p className="profile_desc">
            Update your photo and personal details here
          </p>
          <form>
            <div className="form_group">
              <div>
                <label>Live in</label>
                <input type="text" placeholder="San Salvador, El Salvador" />
              </div>

              <div>
                <label>Street</label>
                <input type="text" placeholder="San Salvador" />
              </div>
            </div>

            <div className="form_group">
              <div>
                <label>Email</label>
                <input type="email" placeholder="example@gmail.com" />
              </div>

              <div>
                <label>Phone Number</label>
                <input type="text" placeholder="+503 ********" />
              </div>
            </div>

            <div className="form_group">
              <div>
                <label>Date of Birth</label>
                <input type="date" placeholder="dd/mm/yyyy" />
              </div>

              <div>
                <label>Gender</label>
                <select>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="form_group">
              <div>
                <label>Your Photo</label>
                <p className="profile-img_desc">
                  This will be displayed in your profile
                </p>
                <input type="file" placeholder="choose file" />
              </div>

              <div className="profile_img-btns">
                <button className="update_btn">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}