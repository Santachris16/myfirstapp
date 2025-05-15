
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useTasksQuery = () =>
  useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const cached = await AsyncStorage.getItem('tasks');
      if (cached) return JSON.parse(cached);

      const { data, error } = await supabase.from('tasks').select('*');
      if (error) throw error;

      await AsyncStorage.setItem('tasks', JSON.stringify(data));
      return data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10,
  });
