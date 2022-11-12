import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const ZoneMap = () => {
  const GOOGLE_MAPS_APIKEY = 'AIzaSyBZwDjtsgA4D6wXDWIApEp9IZqtjUCEyhk';
  const [state, setState] = useState({
    currCords: {
      latitude: 49.084721,
      longitude: -123.068609,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    destCords: {
      latitude: 49.0601,
      longitude: -123.048909,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });
  const {currCords, destCords} = state;
  return (
    <View style={styles.container}>
      <MapView
        style={{minHeight: '100%', minWidth: '100%'}}
        initialRegion={currCords}>
        <Marker coordinate={currCords} />
        <Marker coordinate={destCords} />
        <MapViewDirections
          origin={currCords}
          destination={destCords}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4}
          strokeColor="hotpink"
        />
      </MapView>
    </View>
  );
};

export default ZoneMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
