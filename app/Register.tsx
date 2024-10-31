import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import classNames from "classnames";
import Validator from "email-validator";
import { NavigationProp } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useRouter } from "expo-router";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

type RegisterNavigationProps = {
  navigation: NavigationProp<RootStackParamList>;
};
const Register: React.FC<RegisterNavigationProps> = ({ navigation }) => {
  const router = useRouter();
  const registerFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    username: Yup.string().required().min(2, "A username is required"),
    password: Yup.string()
      .required()
      .min(6, "Password must be of atleast 6 characters"),
  });

  const getRandomProfilePicture = async () => {
    try {
      const response = await fetch("https://randomuser.me/api");
      const data = await response.json();
      return data.results[0].picture.large;
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (
    email: string,
    username: string,
    password: string
  ) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async (authUser) => {
          //adding user to firestore with email as their unique id
          await setDoc(doc(db, "users", authUser.user.email), {
            owner_uid: authUser.user.uid,
            username: username,
            email: authUser.user.email,
            // profile_picture: getRandomProfilePicture() || null,
          });
          router.replace("/(tabs)/");
        })
        .then(() => router.replace("/(tabs)/"));
    } catch (error: any) {
      console.log("ERRORROROROROR");
      console.log(error.message);
      Alert.alert(error.message);
    }
  };
  return (
    <Formik
      initialValues={{ email: "", username: "", password: "" }}
      onSubmit={(values) => {
        register(values.email, values.username, values.password);
      }}
      validationSchema={registerFormSchema}
      validateOnMount={true}
    >
      {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
        <>
          <View className="flex gap-7 w-full justify-center mt-2">
            <TextInput
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              className={classNames(
                "px-3 py-4  border-2  rounded-xl",
                values.email.length < 1 || Validator.validate(values.email)
                  ? "border-violet-400"
                  : "border-red-500"
              )}
            />
            <TextInput
              autoCapitalize="none"
              textContentType="username"
              placeholder="Username"
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              className={classNames(
                "px-3 py-4  border-2  rounded-xl",
                values.username.length < 1 || values.username.length >= 2
                  ? "border-violet-400"
                  : "border-red-500"
              )}
            />
            <TextInput
              autoCapitalize="none"
              textContentType="password"
              autoFocus={false}
              autoCorrect={false}
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              className={classNames(
                "px-3 py-4  border-2  rounded-xl",
                values.password.length < 1 || values.password.length >= 6
                  ? "border-violet-400"
                  : "border-red-500"
              )}
            />
            <View className="mt-4">
              <Button
                title="Sign Up"
                onPress={handleSubmit}
                color={isValid ? "#3B1E54" : "#9B7EBD"}
              />
            </View>
            <View className="flex-row gap-x-2 justify-center">
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={() => router.replace("/")}>
                <Text className="text-violet-600">Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </Formik>
  );
};

export default Register;
