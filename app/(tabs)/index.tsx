
import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTasks } from '../../contexts/TaskContext';

export default function HomeScreen() {
  const router = useRouter();
  const { tasks } = useTasks();

  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => router.push({
            pathname: '/screens/TaskDetail',
            params: { id: item.id, title: item.title, completed: item.completed.toString() },
          })}
        >
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 18,
    color: 'Black',
  },
});
