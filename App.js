import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.title}>
        Welcome to{' '}
        <Text style={styles.accent}>Mobile App</Text>
      </Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    color: '#172554',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
  },
  accent: {
    color: '#2563EB',
  },
});
