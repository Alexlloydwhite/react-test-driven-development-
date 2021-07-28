import React from 'react';
import Counter from '../Counter';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test("header renders with correct test", () => {
    const component = render(<Counter />);
    const headerEl = component.getByTestId('header');

    expect(headerEl.textContent).toBe('My Counter');
});