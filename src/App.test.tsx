import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import App from './App';
// first time doing testing 😬
test('app rendering and input working', async () => {
  const { findByTestId, findByRole, getByPlaceholderText } = render(<App/>);
  const mainContainer = await findByTestId("main-container");
  const uploadButton = await findByRole("button");
  const input = getByPlaceholderText("pattern");

  expect(mainContainer && uploadButton && input).toBeInTheDocument();
  await fireEvent.change(input, {target: {value: "hat"}});
  expect(input).toHaveValue("hat");
});
