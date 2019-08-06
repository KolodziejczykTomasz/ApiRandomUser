        const output = document.getElementById('output');
        const buttonClick = document.getElementById('loadNew')
        const buttonClickSecond = document.getElementById('loadSecond')
        buttonClick.addEventListener('click', function () {
            loadAjaxFromUrl();
        })


        function loadAjaxFromUrl() {
            const ajax = new XMLHttpRequest();
            ajax.onreadystatechange = function () {
                if (ajax.readyState === 4 && ajax.status === 200) {

                    const json = JSON.parse(ajax.responseText);
                    const data = json.results[0];
                    let message = '<h2>' + data.name.first + ' ' + data.name.last + '</h2><img src="' + data
                        .picture.large + '">'
                    output.innerHTML = message;
                }
            }
            ajax.open('GET', 'https://randomuser.me/api/', true)
            ajax.send();
        }



        buttonClickSecond.addEventListener('click', function () {
            loadAjaxFromFile();
        });

        function loadAjaxFromFile() {
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    let uploadData = '<h2>' + xhr.responseText + '</h2>';
                    output.innerHTML = uploadData;
                }
            }

            xhr.open("GET","simple.txt",true);
            xhr.send();
        }