import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.logoContainer}>
          <View style={styles.logoVertical} />
          <View style={styles.logoVertical2} />
          <View style={styles.logoHorizontal} />
          <View style={styles.logoHorizontal2} />
        </View>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>
          Let's experience the joy of telecare AI.
        </Text>
        <Text style={styles.label}>Email Address</Text>

        <View style={styles.inputContainer}>
          <Feather name="mail" size={20} color="#444" />

          <TextInput placeholder="example@gmail.com" style={styles.input} />
        </View>
        <Text style={styles.label}>Password</Text>

        <View style={styles.passwordContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#444" />

          <TextInput
            placeholder="Enter your password..."
            secureTextEntry
            style={styles.input}
          />

          <Feather name="eye-off" size={20} color="#999" />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In →</Text>
        </TouchableOpacity>
        <View style={styles.socialRow}>
          <View style={styles.socialBtn}>
            <Feather name="facebook" size={24} color="#222" />
          </View>

          <View style={styles.socialBtn}>
            <Feather name="chrome" size={24} color="#222" />
          </View>

          <View style={styles.socialBtn}>
            <Feather name="instagram" size={24} color="#222" />
          </View>
        </View>
        <Text style={styles.footer}>
          Don’t have an account? <Text style={styles.greenText}>Sign Up.</Text>
        </Text>

        <Text style={styles.forgot}>Forgot your password?</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    // borderRadius: 30,
    padding: 25,
  },
  logoContainer: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    position: 'relative',
    marginBottom: 20,
  },

  logoVertical: {
    width: 18,
    height: 40,
    backgroundColor: '#8CD600',
    borderRadius: 20,
    position: 'absolute',
    top: 0,
    left: 26,
  },

  logoVertical2: {
    width: 18,
    height: 40,
    backgroundColor: '#8CD600',
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 26,
  },

  logoHorizontal: {
    width: 40,
    height: 18,
    backgroundColor: '#8CD600',
    borderRadius: 20,
    position: 'absolute',
    left: 0,
    top: 26,
  },

  logoHorizontal2: {
    width: 40,
    height: 18,
    backgroundColor: '#8CD600',
    borderRadius: 20,
    position: 'absolute',
    right: 0,
    top: 26,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    color: '#222',
  },
  subtitle: {
    fontSize: 15,
    color: '#777',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  label: {
    fontWeight: '600',
    marginBottom: 10,
    color: '#222',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#8CD600',
    borderRadius: 18,
    paddingHorizontal: 15,
    height: 60,
    marginBottom: 25,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 18,
    paddingHorizontal: 15,
    height: 60,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#8CD600',
    height: 60,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 30,
  },

  socialBtn: {
    width: 60,
    height: 60,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 10,
  },

  greenText: {
    color: '#8CD600',
    fontWeight: '700',
  },

  forgot: {
    textAlign: 'center',
    color: '#8CD600',
    textDecorationLine: 'underline',
  },
});
