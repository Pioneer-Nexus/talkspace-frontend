import Profile from "./types/Profile"
import myProfileData from '@/mock-data/my-profile.json'
import Response from "./types/Response"
import UpdateProfile from "./types/UpdateProfile";
import UpdatePassword from "./types/UpdatePass";

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

  const updatePassword = (data: UpdatePassword): Promise<Response> => {
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
