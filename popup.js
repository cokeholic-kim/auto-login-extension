document.getElementById('saveButton').addEventListener('click', () => {
    const url = document.getElementById('url').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const usernameFieldId = document.getElementById('usernameFieldId').value;
    const passwordFieldId = document.getElementById('passwordFieldId').value;

    // 새로운 데이터 생성
    const newData = {
        url,
        username,
        password,
        usernameFieldId,
        passwordFieldId
    };

    // 기존 데이터를 읽어옴
    chrome.storage.local.get({ credentials: [] }, (result) => {
        // 기존 데이터에 새로운 데이터를 추가
        const credentials = result.credentials;
        credentials.push(newData);

        // 병합된 데이터를 저장
        chrome.storage.local.set({ credentials: credentials }, () => {
            alert('Credentials saved!');
        });
    });
});
