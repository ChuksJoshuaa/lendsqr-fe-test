import { UserProps } from "../utils/types";

interface IProps {
  singleData: UserProps;
}

const PersonalInformation = ({ singleData }: IProps) => {
  return (
    <div className="personal-information">
      <div className="personal-information-head">
        <h3>Personal Information</h3>

        <div className="personal-information-head-body">
          <div className="personal-information-head-body-main mb-2">
            <h5>Full name</h5>
            <h3>
              {singleData?.profile?.firstName} {singleData?.profile?.lastName}
            </h3>
          </div>

          <div className="personal-information-head-body-main mx-2 mb-2">
            <h5>Phone Number</h5>
            <h3>{singleData?.profile?.phoneNumber}</h3>
          </div>
          <div className="personal-information-head-body-main mb-2">
            <h5>Email Address</h5>
            <h3>{singleData?.email}</h3>
          </div>
          <div className="personal-information-head-body-main mx-2 mb-2">
            <h5>Bvn</h5>
            <h3>{singleData?.profile?.bvn}</h3>
          </div>
          <div className="personal-information-head-body-main mb-2">
            <h5>Gender</h5>
            <h3>{singleData?.profile?.gender}</h3>
          </div>
          <div className="personal-information-head-body-main mx-2 mb-2">
            <h5>Marital Status</h5>
            <h3>Single</h3>
          </div>
          <div className="personal-information-head-body-main mb-2">
            <h5>Children</h5>
            <h3>None</h3>
          </div>
          <div className="personal-information-head-body-main mb-2">
            <h5>Type of residence</h5>
            <h3>Parent's Apartment</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
