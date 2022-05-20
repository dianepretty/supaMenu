import React from 'react';
import {StyleSheet} from 'react-native'
import { SearchBar } from 'react-native-elements';

export default class SearchBarComponent extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
  const { search } = this.state;
    return (
      <SearchBar
        placeholder="search for your prefered restaurant"
        onChangeText={this.updateSearch}
        value={search}
       platform="android"
        lightTheme
        round
        onCancel={this.props.onCancel}
        onClear={this.props.onClear}
        containerStyle = {styles.containerStyle}
        inputContainerStyle = {styles.inContainerStyle}
        style = {styles.searchStyles}
        leftIconContainerStyle = {styles.searchIcon}
      />
    );
  }
}

const styles = StyleSheet.create({
  inContainerStyle:{
    backgroundColor:'#fff',
    borderRadius:50,
  },
  searchStyles:{
    fontSize:16,
    width:230,
    backgroundColor:"#fff"
  },
  containerStyle:{
    backgroundColor:'#f7941d',
  },
  searchIcon:{
      color:'#f7941d',
      alignItems: 'center'
  }
})