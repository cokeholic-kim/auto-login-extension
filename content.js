chrome.storage.local.get(['url', 'username', 'password', 'usernameFieldId', 'passwordFieldId'], (result) => {
    if (window.location.href.includes(result.url)) {
        document.getElementById(result.usernameFieldId).value = result.username;
        document.getElementById(result.passwordFieldId).value = result.password;
    }
});
