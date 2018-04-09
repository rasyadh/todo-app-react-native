import React from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  ToolbarAndroid,
  StatusBar
} from 'react-native';
import List from './List';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // state declare
    this.state = {
      text: '',
      todos: []
    };

    // bind function
    this.onPressSave = this.onPressSave.bind(this);
  }

  onPressSave() {
    const txt = this.state.text;
    Alert.alert(txt);
  }

  add = () => {
    // get value from state
    const { text, todos } = this.state;

    // validate if empty
    if (!text) return

    // add text to todos
    todos.push(text)

    // set state
    this.setState({
      todos: todos,
      text: ''
    });
  }

  remove = (todo) => {
    const { todos } = this.state;

    // find index of todo
    todoWillDelete = todos.indexOf(todo);

    // alert text
    Alert.alert(todo + ' deleted from todos')

    // delete todo
    todos.splice(todoWillDelete, 1);

    // set state
    this.setState({
      todos: todos,
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent
          animated
        />
        {Platform.OS === 'android' && Platform.Version >= 20 ?
          <View
            style={{
              height: 24,
              backgroundColor: "#3F51B5",
            }}
          />
          : null
        }
        <ToolbarAndroid
          title='Todo App'
          style={styles.toolbar}
          titleColor='#fff'
        />

        <View style={styles.container}>
          <Text>Input Todo : {this.state.text}</Text>

          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />

          <View style={{ padding: 10 }}>
            <Button
              onPress={this.add}
              title='Save Input'
              color='#3F51B5'
              accessibilityLabel='Learn more about this purple button'
            />
          </View>

          <View style={styles.spacer}></View>

          {this.state.todos.length > 0 &&
            <List items={this.state.todos} onRemove={this.remove}></List>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  toolbar: {
    backgroundColor: '#3F51B5',
    height: 56,
    elevation: 4,
  },
  textInput: {
    height: 40,
    padding: 10,
    width: '100%',
    marginTop: 10,
  },
  spacer: {
    left: 0,
    right: 0,
    height: 10,
  },
});
