import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default function Customswitch({
    option1,
    option2,
    onSelectSwitch,
    selectionMode,
}) {

    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updateSwitchData = (value) => {
        setSelectionMode(value);
        onSelectSwitch(value);
    }

  return (
    <View style={styles.container}>
    <View style={styles.content}>
        <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 1 ? '#fff' : '#BCBCBC',
          borderRadius: 5,
          borderWidth: 2,
          borderColor:'#BCBCBC',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
            <Text style={{color: getSelectionMode == 1 ? '#0E4766' : '#808080',
    fontSize: 14, fontWeight: '900'}}>{option1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{flex: 1,
          backgroundColor: getSelectionMode == 2 ? '#fff' : '#BCBCBC',
          borderRadius: 5,
          borderWidth: 2,
          borderColor:'#BCBCBC',
          justifyContent: 'center',
          alignItems: 'center',}}
        >
            <Text style={{color: getSelectionMode == 2 ? '#0E4766' : '#808080',
    fontSize: 14, fontWeight: '900'}}>{option2}</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    height: 44,
    width: 400,
    backgroundColor:'#BCBCBC',
    borderColor: 'red',
    flexDirection:'row',
    justifyContent: 'center',
  },
});
