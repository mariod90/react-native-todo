import React, { Component } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import TodoList from '../../components/TodoList';
import { addTodo, deleteTodo, getTodos, updateTodo } from '../../data/todos';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 30
    },
    addRow: {
        flexDirection: 'row',
        width: '80%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    text: {
        flex: 1,
        width: '80%',
        borderBottomWidth: 1,
        padding: 5
    }
});

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            newTodo: null
        };
    }

    componentDidMount() {
        this.setState({
            todos: getTodos()
        });
    }

    handleAdd = () => {
        const { todos, newTodo } = this.state;
        const newList = addTodo(todos, { text: newTodo });
        this.setState({ todos: newList, newTodo: null });
    };

    handleUpdate = (todo) => {
        const { todos } = this.state;
        const newList = updateTodo(todos, todo);
        this.setState({ todos: newList });
    };

    handleDelete = (todo) => {
        const { todos } = this.state;
        const newList = deleteTodo(todos, todo);
        this.setState({ todos: newList });
    };

    render() {
        const { todos, newTodo } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <Text selectable style={styles.title}>
                    ToDO List App
                </Text>
                <View style={styles.addRow}>
                    <TextInput
                        style={styles.text}
                        value={newTodo}
                        onChangeText={(todo) => this.setState({ newTodo: todo })}
                        placeholder='Nuevo ToDo'
                        autoCapitalize='words'
                        clearButtonMode='always'
                        returnKeyDone='done'
                    />
                    <Button title='Añadir' onPress={this.handleAdd} />
                </View>
                <TodoList todos={todos} onUpdate={this.handleUpdate} onDelete={this.handleDelete}></TodoList>
            </SafeAreaView>
        );
    }
}

export default MainScreen;
