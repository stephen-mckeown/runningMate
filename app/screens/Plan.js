
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create(global.styles);




class PlanScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plan: [],
    }
  }


  componentDidMount() {
    this.setState({
      plan: [
        { title: 'Week 1', data: [{ Day: "Monday", Time: 5 }, { Day: "Tuesday", Time: 6 }, { Day: "Wednesday", Time: 7 }, { Day: "Thursday", Time: 0 }, { Day: "Friday", Time: 5 }, { Day: "Saturday", Time: 10 }, { Day: "Sunday", Time: 0 }] },
        { title: 'Week 8', data: [{ Day: "Monday", Time: 5 }, { Day: "Tuesday", Time: 6 }, { Day: "Wednesday", Time: 7 }, { Day: "Thursday", Time: 0 }, { Day: "Friday", Time: 5 }, { Day: "Saturday", Time: 10 }, { Day: "Sunday", Time: 0 }] },
        { title: 'Week 2', data: [{ Day: "Monday", Time: 5 }, { Day: "Tuesday", Time: 6 }, { Day: "Wednesday", Time: 7 }, { Day: "Thursday", Time: 0 }, { Day: "Friday", Time: 5 }, { Day: "Saturday", Time: 10 }, { Day: "Sunday", Time: 0 }] },
        { title: 'Week 3', data: [{ Day: "Monday", Time: 5 }, { Day: "Tuesday", Time: 6 }, { Day: "Wednesday", Time: 7 }, { Day: "Thursday", Time: 0 }, { Day: "Friday", Time: 5 }, { Day: "Saturday", Time: 10 }, { Day: "Sunday", Time: 0 }] },
        { title: 'Week 4', data: [{ Day: "Monday", Time: 5 }, { Day: "Tuesday", Time: 6 }, { Day: "Wednesday", Time: 7 }, { Day: "Thursday", Time: 0 }, { Day: "Friday", Time: 5 }, { Day: "Saturday", Time: 10 }, { Day: "Sunday", Time: 0 }] },
        { title: 'Week 5', data: [{ Day: "Monday", Time: 5 }, { Day: "Tuesday", Time: 6 }, { Day: "Wednesday", Time: 7 }, { Day: "Thursday", Time: 0 }, { Day: "Friday", Time: 5 }, { Day: "Saturday", Time: 10 }, { Day: "Sunday", Time: 0 }] },
        { title: 'Week 6', data: [{ Day: "Monday", Time: 5 }, { Day: "Tuesday", Time: 6 }, { Day: "Wednesday", Time: 7 }, { Day: "Thursday", Time: 0 }, { Day: "Friday", Time: 5 }, { Day: "Saturday", Time: 10 }, { Day: "Sunday", Time: 0 }] },
        { title: 'Week 7', data: [{ Day: "Monday", Time: 5 }, { Day: "Tuesday", Time: 6 }, { Day: "Wednesday", Time: 7 }, { Day: "Thursday", Time: 0 }, { Day: "Friday", Time: 5 }, { Day: "Saturday", Time: 10 }, { Day: "Sunday", Time: 0 }] },
        { title: 'Week 8', data: [{ Day: "Monday", Time: 5 }, { Day: "Tuesday", Time: 6 }, { Day: "Wednesday", Time: 7 }, { Day: "Thursday", Time: 0 }, { Day: "Friday", Time: 5 }, { Day: "Saturday", Time: 10 }, { Day: "Sunday", Time: 0 }] },
      ]
    })
  }

  // _keyExtractor = (item, index) => item.id;


  renderItem(item) {
    return (
      <TouchableHighlight
        onPress={() => this.props.navigation.navigate('DailyPlan', { item: item })}
        style={styles.rowSelect}
      >
        <View style={styles.rowSchedule}>
          <Text>{item.Day}</Text>
        </View>
      </TouchableHighlight>
    );
  }


  renderSectionHeader({ section }) {
    return (
      <View>
        <Text style={styles.SectionHeaderStyle}> {section.title} </Text>
      </View>
    )
  }

  onPress = () => {
    console.log('selection pressed')
  }



  render() {
    return (
      <View style={styles.containerSchedule}>
        <Text style={styles.planTitle}>Training Plan</Text>
        <SectionList
          sections={this.state.plan}
          renderItem={({ item }) => this.renderItem(item)}
          renderSectionHeader={this.renderSectionHeader}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

export default PlanScreen;
