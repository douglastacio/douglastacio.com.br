// Função para incluir componentes HTML
function includeHTML() {
    var elements, i, file, xhttp;
    elements = document.querySelectorAll("[id^='header'], [id^='footer']");
    
    for (i = 0; i < elements.length; i++) {
        file = elements[i].id + ".html";
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                elements[i].innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", file, true);
        xhttp.send();
    }
}

// Chama a função para incluir os componentes ao carregar a página
window.onload = includeHTML;

xhttp.open("GET", "components/header.html", true);
