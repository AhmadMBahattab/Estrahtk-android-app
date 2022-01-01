import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const SortBy = ({ items, setItems, value, setValue, sortPostsBy }) => {
  return (
    <>
      <DropDownPicker
        open={open}
        setOpen={setOpen}
        value={value}
        items={items}
        setValue={setValue}
        setItems={setItems}
        placeholder="Sort by"
        // onChangeValue={(option) => sortPostsBy(option)}
      />
    </>
  );
};
const styles = StyleSheet.create({});

export default SortBy;
