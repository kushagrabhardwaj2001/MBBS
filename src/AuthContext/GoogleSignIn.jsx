// import React from 'react'

// function GoogleSignIn({ profileDetails, login, logout }) {
//   console.log(profileDetails)
//   return (
//     <>
//       {/* <h1>React Google Login</h1> */}
//       <div className='profile-container'>
//         {
//           profileDetails.length != 0 ? (
//             <div className="profile-details">
//               <img src={profileDetails.picture} alt="" className='profile-avathar' />
//               <div className="profile-content">
//                 <h3>{profileDetails.name}</h3>
//                 <h5>{profileDetails.email}</h5>
//               </div>
//               <button className='profile-button' onClick={logout}>Logout</button>
//             </div>
//           ) :
//             (
//               <>
//                 <div className="landing-container">
//                   <div className="landing-icon">
//                   </div>
//                   <h4>Sign in to create profile!</h4>
//                   <button onClick={login}>Sign in with google</button>
//                 </div>
//               </>
//             )
//         }
//       </div>
//     </>
//   )
// }

// export default GoogleSignIn

// // import React from 'react';
// // import { useGoogleLogin } from '@react-oauth/google';

// // const GoogleSignIn = () => {
// //   const { signIn, loading } = useGoogleLogin({
// //     clientId: '92776901661-te23u7n8hucjsi408fllvrtqakpbnv6i.apps.googleusercontent.com',
// //     onSuccess: (user) => {
// //       console.log('Logged in successfully!', user);
// //       // Handle successful login here
// //     },
// //     onError: (error) => {
// //       console.error('Error during login:', error);
// //       // Handle error during login here
// //     },
// //   });

// //   return (
// //     <button onClick={signIn} disabled={loading}>
// //       {loading ? 'Loading...' : 'Sign in with Google'}
// //     </button>
// //   );
// // };

// // export default GoogleSignIn;
