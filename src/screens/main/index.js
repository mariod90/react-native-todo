import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import TodoList from '../../components/TodoList';
import { getTodos } from '../../data/todos';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 30
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    }
});

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        this.setState({
            todos: getTodos()
        });
    }

    render() {
        const { todos } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <Text selectable style={styles.title}>
                    ToDO List App
                </Text>
                <TodoList todos={todos}></TodoList>
            </SafeAreaView>
        );
    }
}

export default MainScreen;
