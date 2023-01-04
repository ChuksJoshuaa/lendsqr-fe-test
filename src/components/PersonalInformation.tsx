import { TbCurrencyNaira } from "react-icons/tb";
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
            <h3 className="email">{singleData?.email}</h3>
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
      <div className="personal-information-head">
        <h3>Education and Employment</h3>

        <div className="personal-information-head-body">
          <div className="personal-information-head-body-main mb-2">
            <h5>Level of Education</h5>
            <h3>{singleData?.education?.level}</h3>
          </div>

          <div className="personal-information-head-body-main mx-2 mb-2">
            <h5>Employment Status</h5>
            <h3>{singleData?.education?.employmentStatus}</h3>
          </div>
          <div className="personal-information-head-body-main mb-2">
            <h5>Sector of Employment</h5>
            <h3>{singleData?.education?.sector}</h3>
          </div>
          <div className="personal-information-head-body-main mx-2 mb-2">
            <h5>Duration of Employment</h5>
            <h3>{singleData?.education?.duration}</h3>
          </div>
          <div className="personal-information-head-body-main mb-2">
            <h5>Office email</h5>
            <h3 className="email">{singleData?.education?.officeEmail}</h3>
          </div>
          <div className="personal-information-head-body-main mx-2 mb-2">
            <h5>Monthly income</h5>
            <h3>
              <TbCurrencyNaira />
              {singleData?.education.monthlyIncome[0]} - <TbCurrencyNaira />
              {singleData?.education.monthlyIncome[1]}
            </h3>
          </div>
          <div className="personal-information-head-body-main mb-2">
            <h5>loan repayment</h5>
            <h3>
              <TbCurrencyNaira />
              {singleData?.education?.loanRepayment}
            </h3>
          </div>
        </div>
      </div>

      <div className="personal-information-head">
        <h3>Socials</h3>

        <div className="personal-information-head-body">
          <div className="personal-information-head-body-main mb-2">
            <h5>Twitter</h5>
            <h3>{singleData?.socials?.twitter}</h3>
          </div>
          <div className="personal-information-head-body-main mx-2 mb-2">
            <h5>facebook</h5>
            <h3>{singleData?.socials?.facebook}</h3>
          </div>
          <div className="personal-information-head-body-main mb-2">
            <h5>instagram</h5>
            <h3 className="email">{singleData?.socials?.instagram}</h3>
          </div>
        </div>
      </div>

      <div className="personal-information-head">
        <h3>Guarantor</h3>

        <div className="personal-information-head-body">
          <div className="personal-information-head-body-main mb-2">
            <h5>Full name</h5>
            <h3>
              {singleData?.guarantor?.firstName}{" "}
              {singleData?.guarantor?.lastName}
            </h3>
          </div>
          <div className="personal-information-head-body-main mx-2 mb-2">
            <h5>phone number</h5>
            <h3>{singleData?.guarantor?.phoneNumber}</h3>
          </div>
          <div className="personal-information-head-body-main mb-2">
            <h5>Email address</h5>
            <h3 className="email">{singleData?.guarantor?.address}</h3>
          </div>
          <div className="personal-information-head-body-main mx-2 mb-2">
            <h5>Relationship</h5>
            <h3>sister</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
