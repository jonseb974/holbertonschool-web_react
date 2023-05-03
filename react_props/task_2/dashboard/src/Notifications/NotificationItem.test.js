import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('renders without crashing', () => {
    render(<NotificationItem />);
  });

  it('renders the correct html for type and value props', () => {
    const type = 'default';
    const value = 'test';
    const { getByTestId } = render(<NotificationItem type={type} value={value} />);
    const notificationItem = getByTestId('notification-item');
    expect(notificationItem).toHaveTextContent(value);
    expect(notificationItem).toHaveClass(`notification-${type}`);
  });

  it('renders the correct html for html prop', () => {
    const html = { __html: '<u>test</u>' };
    const { getByTestId } = render(<NotificationItem html={html} />);
    const notificationItem = getByTestId('notification-item');
    expect(notificationItem.innerHTML).toContain(html.__html);
  });
});

