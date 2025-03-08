import { View, Text } from 'react-native'
import React from 'react'
import { render, waitFor } from '@testing-library/react-native';
import User from './User';

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ name: "John Doe" }),
    })
) as jest.Mock;

test('fetches and displays user name', async () => {
    const { getByText } = render(<User />);

    await waitFor(() => expect(getByText('John Doe')).toBeTruthy);
})