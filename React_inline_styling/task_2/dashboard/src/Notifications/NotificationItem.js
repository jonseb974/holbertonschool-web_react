import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    defaultItem: {

    },
    urgentItem: {

    },
});
class NotificationsItem extends React.PureComponent {
    render() {
        const { type, html, value, markAsRead, id } = this.props;
        const liProps = {
            'data-notification-type': type,
            className: css(type === 'urgent' ? styles.urgentItem :  styles.defaultItem),
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
