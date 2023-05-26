import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


class NotificationsItem extends React.PureComponent {
    render() {
        const styles =  StyleSheet.create({
        
            .Notifications {
                border: 2px dotted var(--holberton-red);
                padding: 1rem .5rem 0 .5rem;
                float: right;
            }
            li[data-notification-type="default"] {
                color: darkblue;
            }
            li[data-notification-type="urgent"] {
                color: red;
            }
            .menuItem {
                text-align: rig
            }
        });

        const { type, html, value, markAsRead, id } = this.props;
        const liProps = {
            'data-notification-type': type,
        };
        if (html) liProps.dangerouslySetInnerHTML = html;
        return (
            <li {...liProps} onClick={() => (markAsRead(id))}>{value}</li>
        );
    }
}

NotificationsItem.propTypes = {
    id: PropTypes.number,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    type: PropTypes.string,
    value: PropTypes.string,
    markAsRead: PropTypes.func,
};

NotificationsItem.defaultProps = {
    type: 'default',
    markAsRead: () => {},
};

export default NotificationsItem;
