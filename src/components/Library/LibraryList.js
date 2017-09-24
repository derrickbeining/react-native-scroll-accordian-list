import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, ListView} from 'react-native';
import {ListItem} from '../../components';

class LibraryList extends Component {

  componentWillMount () {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });

    this.dataSource = dataSource.cloneWithRows(this.props.libraries);

  }

  renderRow (library) {
    return <ListItem library={library} />
  }

  render () {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const mapState = ({libraries}) => ({
  libraries,
})

export default connect(mapState)(LibraryList);
