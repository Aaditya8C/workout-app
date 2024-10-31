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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "expo-router";

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
};

type LoginNavigationProps = {
  navigation: NavigationProp<RootStackParamList>;
};

const Login: React.FC<LoginNavigationProps> = ({ navigation }) => {
  const router = useRouter();
  const loginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required()
      .min(6, "Password must be of atleast 8 characters"),
  });

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then((res) => {
        console.log("Firebase", email, password);
        router.replace("/(tabs)/");
      });
      // await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error: any) {
      console.log(error);
      Alert.alert(
        "Oops!!",
        error.message + "\n\n What would you like to do next?",
        [
          {
            text: "Ok",
            style: "cancel",
          },
          {
            text: "Sign Up",
            onPress: () => navigation.navigate("Register"),
          },
        ]
      );
    }
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        login(values.email, values.password);
      }}
      validationSchema={loginFormSchema}
      validateOnMount={true}
    >
      {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
        <>
          <View className="flex gap-7 w-full justify-center mt-4">
            <TextInput
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoFocus={true}
              placeholder="Phone Number,username or email"
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
            <TouchableOpacity className="items-end">
              <Text className="text-violet-600">Forget Password</Text>
            </TouchableOpacity>
            <View className="mt-4">
              <Button
                title="Log in"
                onPress={handleSubmit}
                color={isValid ? "#3B1E54" : "#9B7EBD"}
              />
            </View>
            <View className="flex-row gap-x-2 justify-center">
              <Text className="">Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => router.replace("/RegisterScreen")}
              >
                <Text className="text-violet-600">Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </Formik>
  );
};

export default Login;
