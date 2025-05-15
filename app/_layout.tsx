import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TaskProvider } from '../contexts/TaskContext';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <TaskProvider>
        <Stack />
      </TaskProvider>
    </QueryClientProvider>
  );
}
