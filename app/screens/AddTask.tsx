
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTasks } from '../../contexts/TaskContext';

export default function AddTaskScreen() {
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState('');
  const { addTask } = useTasks();
  const router = useRouter();

  const handleAddTask = () => {
    if (taskName.trim().length === 0) {
      setError('Task name is required.');
      return;
    }
    if (taskName.length > 100) {
      setError('Task name must be under 100 characters.');
      return;
    }

    addTask(taskName);
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>New Task for Coco</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task name..."
        value={taskName}
        onChangeText={(text) => {
          setError('');
          setTaskName(text);
        }}
      />
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      <Button title="Save Task" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#1a1a1a',
  },
  label: {
    fontSize: 20,
    marginBottom: 12,
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});
