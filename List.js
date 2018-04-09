import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';

const List = ({ items, onRemove }) => {
    return (
        <View>
            {
                items.map((todo, id) =>
                    <TouchableHighlight
                        key={id}
                        onPress={() => onRemove(todo)}
                    >
                        <Text style={styles.todo}>
                            {id + 1}. {todo}
                        </Text>
                    </TouchableHighlight>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        marginBottom: 5,
        padding: 5,    
    }
})

export default List;