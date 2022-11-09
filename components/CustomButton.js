import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = props => {
  return (
    <TouchableOpacity
      style={{...styles.button, ...props.style}}
      onPress={props.onPress}>
      {props.icon ? (
        <Icon
          style={{alignSelf: 'center', marginRight: 7}}
          name={props.nameIcon}
          size={24}
        />
      ) : null}
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 150,
    margin: 10,
    backgroundColor: '#307ecc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'black',
    zIndex: 99,
    flexDirection: 'row',
  },
  title: {
    color: 'white',
  },
});
