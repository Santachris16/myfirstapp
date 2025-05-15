
import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet, View, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useTasksQuery } from '../../hooks/useTasksQuery';

export default function HomeScreen() {
  const router = useRouter();
  const { data, isLoading, isError } = useTasksQuery();

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Error loading tasks</Text>;

  return (
    <View style={{ flex: 1 }}>
      <Button title="Add New Task" onPress={() => router.push('/screens/AddTask')} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              router.push({
                pathname: '/screens/TaskDetail',
                params: {
                  id: item.id,
                  title: item.title,
                  completed: item.completed.toString(),
                },
              })
            }
          >
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
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
