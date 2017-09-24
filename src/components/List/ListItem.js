import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableWithoutFeedback, LayoutAnimation} from 'react-native';
import {CardSection} from '../../components';
import {setSelectedLibraryId} from '../../redux';

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderDescription() {
    const {library, isSelected} = this.props;
    if (isSelected) {
      return (
        <CardSection>
          <Text style={styles.libraryDescription}>{library.description}</Text>
        </CardSection>
      )
    }
  }

  render() {
    const {library, setSelectedLibraryId, selectedLibraryId} = this.props;
    const {id, title} = library;
    const isSelected = library.id === selectedLibraryId;
    return (
      <TouchableWithoutFeedback onPress={() => setSelectedLibraryId(id)}>
        <View>
          <CardSection>
            <Text style={styles.libraryTitle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  libraryTitle: {
    fontSize: 18,
    paddingLeft: 15,
    paddingTop: 15
  },
  libraryDescription: {
    fontSize: 14,
    flex: 1,
    padding: 15
  }
}

const mapState = ({
  selectedLibraryId
}, {library}) => ({
  isSelected: selectedLibraryId === library.id
})

const mapDispatch = {
  setSelectedLibraryId
};

export default connect(mapState, mapDispatch)(ListItem);
