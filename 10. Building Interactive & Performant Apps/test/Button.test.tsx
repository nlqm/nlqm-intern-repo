import { render, fireEvent } from '@testing-library/react-native'
import React from 'react'
import Button from './Button';

test('render button and handle event', () => {
    const mockPress = jest.fn();
    const { getByText } = render(<Button title="Press Me" onPress={mockPress} />);

    const button = getByText('Press Me');
    fireEvent.press(button);

    expect(mockPress).toHaveBeenCalledTimes(1);
});