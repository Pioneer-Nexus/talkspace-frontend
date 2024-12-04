import Profile from "../../pages/profile/types/Profile"
import myProfileData from '@/mock-data/my-profile.json'
import Response from "../../pages/profile/types/Response"
import UpdateProfile from "../../pages/profile/types/UpdateProfile";
import { ChangePassword } from "@/pages/profile/account-setting/AccountSetting";

const getProfileService = (): Promise<Profile> => {
    return new Promise((resolve, reject) => {
      try {
        return resolve(myProfileData)
      } catch (error) {
        reject({
          error: error,
        })
      }
    })
  }

  const updateProfile = (data: UpdateProfile): Promise<Response> => {
    return new Promise((resolve) => {
  
      // const jsonData = JSON.stringify(data, null, 2);
      resolve({
        statusCode: 200,
        data: {
          message: 'Update successfully!',
        },
      });
      // fs.writeFile("../../../mock-data/my-profile.json", jsonData, 'utf8', (err) => {
      //   if (err) {
      //     reject({
      //       statusCode: 400,
      //       data: {
      //         message: 'Can not update profile',
      //       },
      //     });
      //   } else {
      //     resolve({
      //       statusCode: 200,
      //       data: {
      //         message: 'Update successfully!',
      //       },
      //     });
      //   }
      // });
    });
  };

  const updatePassword = (data: ChangePassword): Promise<Response> => {
    return new Promise((resolve) => {
      resolve({
        statusCode: 200,
        data: {
          message: 'Update successfully!',
        },
      });
    });
  };
 


  export {
    getProfileService,
    updateProfile,
    updatePassword
  }
