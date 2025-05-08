
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useTasks } from '../../contexts/TaskContext';

export default function TaskDetailScreen() {
  const { id, title, completed } = useLocalSearchParams();
  const { toggleTask } = useTasks();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.status}>
        Status: {completed === 'true' ? ' Completed' : ' Pending'}
      </Text>
      <Button title="Toggle Complete" onPress={() => toggleTask(id as string)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 12,
  },
  status: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 20,
  },
});
