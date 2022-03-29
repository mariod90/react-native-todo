import React, { Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    listItem: { borderWidth: 1, width: '80%', margin: 5, flexDirection: 'row', alignItems: 'center' },
    text: { padding: 5, fontWeight: 'bold' },
    textDone: { color: '#aaa', textDecorationLine: 'line-through', fontWeight: 'normal' }
});

const TodoList = ({ todos }) => {
    <Fragment>
        {todos.map((todo) => (
            <View style={styles.listItem} key={todo.text}>
                <Text style={styles.text}>-</Text>
                <Text style={[styles.text, todo.done && styles.textDone]}>{todo.text}</Text>
            </View>
        ))}
    </Fragment>;
};

export default TodoList;
