function getFullYear() {
      return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
    if (!isIndex) return "Holberton School main dashboard";
    return "Holberton School";
}

function getLatestNotification() {
      return {
            __html: "<li data-priority='urgent'><strong>Urgent requirement</strong> - complete by EOD</li>"
      }
}

// export
export { getFullYear, getFooterCopy, getLatestNotification };
