import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const InputSelect = props => {
  return (
    <View style={{...styles.container, ...props.style}}>
      <Dropdown
        style={[styles.dropdown, props.isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={props.data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!props.isFocus ? 'Select Type' : '...'}
        value={props.value}
        onFocus={() => props.setIsFocus(true)}
        onBlur={() => props.setIsFocus(false)}
        onChange={item => {
          props.setValue(item.value);
          props.setIsFocus(false);
        }}
      />
    </View>
  );
};

export default InputSelect;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e6e6',
    width: '75%',
    borderRadius: 10,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
