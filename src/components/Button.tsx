import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { JSX } from "react"

interface Props {
  label: string
  onPress: () => void;
}

const Button = (props: Props): JSX.Element => {
  const { label, onPress } = props
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#468FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 24
  }
})

export default Button
