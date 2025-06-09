import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DropDown from '../index';

describe('DropDown Component', () => {
  const defaultProps = {
    data: ['Option 1', 'Option 2', 'Option 3']
  };

  it('renders with default text', () => {
    render(<DropDown {...defaultProps} />);
    expect(screen.getByText('Please Select')).toBeInTheDocument();
  });

  it('shows options when clicked', async () => {
    render(<DropDown {...defaultProps} />);
    
    await userEvent.click(screen.getByText('Please Select'));
    
    defaultProps.data.forEach(option => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it('selects an option when clicked', async () => {
    render(<DropDown {...defaultProps} />);
    
    await userEvent.click(screen.getByText('Please Select'));
    await userEvent.click(screen.getByText('Option 2'));
    
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.queryByText('Please Select')).not.toBeInTheDocument();
  });

  it('handles empty data array', () => {
    render(<DropDown data={[]} />);
    
    expect(screen.getByText('Please Select')).toBeInTheDocument();
  });

  it('closes dropdown after selection', async () => {
    render(<DropDown {...defaultProps} />);
    
    await userEvent.click(screen.getByText('Please Select'));
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    
    await userEvent.click(screen.getByText('Option 1'));
    expect(screen.queryByText('Option 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Option 3')).not.toBeInTheDocument();
  });
}); 