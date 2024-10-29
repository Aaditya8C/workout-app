// import React, { useEffect, useState } from "react";
// import { SignedInStack, SignedOutStack } from "./navigation";
// // import { getAuth, onAuthStateChanged, User } from "firebase/auth";

// const AuthNavigation = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // This is firebase listener, that always listen at a global level
//   //   const userHandler = (user: User) => {
//   //     user ? setIsLoggedIn(true) : setIsLoggedIn(false);
//   //   };
//   //   useEffect(() => {
//   //     const auth = getAuth();
//   //     onAuthStateChanged(auth, (user) => userHandler(user)); // Here App will be running
//   //   }, []);

//   return <>{isLoggedIn ? <SignedInStack /> : <SignedOutStack />}</>;
// };

// export default AuthNavigation;
