import React, { useState } from "react";

import ReviewForm from "./reviewForm";

import { FlatList, TouchableOpacity, Keyboard } from "react-native";

import { WrapperGlobal, TextTitle } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";

import Card from "../components/Card";
import CustomModal from "../components/Modal";
import CustomAddIcon from "../components/AddIcon";
import CustomCloseIcon from "../components/CloseIcon";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: 1,
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: 2,
    },
    { title: "Not So 'Final' Fantasy", rating: 3, body: "lorem ipsum", key: 3 },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  return (
    <WrapperGlobal>
      <CustomModal
        visible={modalOpen}
        animationType="slide"
        closeOnPress={Keyboard.dismiss}
      >
        {
          <>
            <CustomCloseIcon>
              <MaterialIcons
                name="close"
                size={24}
                onPress={() => setModalOpen(false)}
              />
            </CustomCloseIcon>
            <ReviewForm addReview={addReview} />
          </>
        }
      </CustomModal>

      <CustomAddIcon>
        <MaterialIcons
          name="add"
          size={24}
          onPress={() => setModalOpen(true)}
        />
      </CustomAddIcon>

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.key}
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <TextTitle>{item.title}</TextTitle>
            </Card>
          </TouchableOpacity>
        )}
      />
    </WrapperGlobal>
  );
}
