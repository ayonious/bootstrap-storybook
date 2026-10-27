import { expect } from 'storybook/test';
import DropDown from ".";

export default {
  title: 'Components/DropDown',
  component: DropDown,
};

export const Simple = {
  args: {
    data: ["ami", "tumi", "she", "ich", "du", "wir"]
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByText("Please Select"));
    await userEvent.click(canvas.getByText("tumi"));
    await expect(canvas.getByText("tumi")).toBeVisible();
    await expect(canvas.queryByText("ami")).not.toBeInTheDocument();
  },
};
