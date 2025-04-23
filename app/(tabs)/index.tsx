import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const initialTasks = [
  { id: '1', title: ' Walk Coco', completed: false },
  { id: '2', title: ' Feed Coco', completed: false },
  { id: '3', title: ' Give Coco a bath', completed: false },
  { id: '4', title: ' Brush his fur', completed: false },
  { id: '5', title: ' Vet check-up', completed: false },
];

export default function HomeScreen() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/coco.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={{ marginBottom: 16 }}>
          Coco's To-Do List
        </ThemedText>

        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => toggleTask(item.id)}>
              <Text
                style={[
                  styles.taskItem,
                  item.completed && styles.completedTask,
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  taskItem: {
    fontSize: 18,
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: 'white',
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
