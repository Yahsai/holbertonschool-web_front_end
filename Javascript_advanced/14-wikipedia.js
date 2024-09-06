function createElement(data) {
    const p = document.createElement('p');

    p.innerText = data;
    document.body.appendChild(p);
}

function queryWikipedia(callback) {
    const stackoverflowRequest = new XMLHttpRequest();
    stackoverflowRequest.onload = function () {
        callback(
            JSON.parse(
                stackoverflowRequest.responseText
            ).query.pages[21721040].extract
        );
    }
    stackoverflowRequest.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
    stackoverflowRequest.send();
}

queryWikipedia(createElement);