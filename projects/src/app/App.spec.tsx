import * as React from 'react';
import { render } from '@testing-library/react-native';

import ProjectsApp from './ProjectsApp';

test('renders correctly', () => {
  const { getByTestId } = render(<ProjectsApp />);
  expect(getByTestId('heading')).toHaveTextContent('Welcome');
});
