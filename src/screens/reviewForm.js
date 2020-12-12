import React from "react";
import { View, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import Button from "../components/Button";

import { WrapperGlobal, Input, ErrorText } from "../styles/global";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1 - 5", (value) => {
      return parseInt(value) < 6 && parseInt(value) > 0;
    }),
});

export default function RevireForm({ addReview }) {
  return (
    <WrapperGlobal>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(props) => (
          <View>
            <Input
              placeholder="Review title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            <ErrorText>{props.touched.title && props.errors.title}</ErrorText>

            <Input
              multiline
              minHeight={60}
              placeholder="Review body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />
            <ErrorText>{props.touched.body && props.errors.body}</ErrorText>

            <Input
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              onBlur={props.handleBlur("rating")}
              keyboardType="numeric"
            />
            <ErrorText>{props.touched.rating && props.errors.rating}</ErrorText>

            <Button text="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </WrapperGlobal>
  );
}
