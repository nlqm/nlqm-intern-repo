import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';

interface ButtonProps {
    title: String;
    onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button