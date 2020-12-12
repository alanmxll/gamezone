import styled from "styled-components/native";

export const WrapperGlobal = styled.View`
  flex: 1;
  padding: 20px;
`;

export const TextTitle = styled.Text`
  font-family: nunito-bold;
  font-size: 18px;
  color: #333;
`;

export const Input = styled.TextInput`
  font-size: 18px;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 6px;
  padding: 10px;
`;

export const ErrorText = styled.Text`
  color: crimson;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 6px;
  text-align: center;
`;

export const images = {
  ratings: {
    1: require("../../assets/rating-1.png"),
    2: require("../../assets/rating-2.png"),
    3: require("../../assets/rating-3.png"),
    4: require("../../assets/rating-4.png"),
    5: require("../../assets/rating-5.png"),
  },
};
