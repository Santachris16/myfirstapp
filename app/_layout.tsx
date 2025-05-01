
import { Stack } from 'expo-router';
import { TaskProvider } from '../contexts/TaskContext';

export default function RootLayout() {
  return (
    <TaskProvider>
      <Stack />
    </TaskProvider>
  );
}
