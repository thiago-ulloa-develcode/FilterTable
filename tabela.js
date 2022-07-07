function filtrarNomes() {
    // Declara variáveis
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    // Cria um loop nas tabelas, e esconde aquelas que não correspodem a pesquisa
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
             tr[i].style.display = "none";
            }
        }
    }
}

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    // Define a direção da tabela como crescente
    dir = "asc";
    // Cria um loop que continuará até que nenhuma mudança seja feita
    while (switching) {
        // Começa dizendo: nenhuma mudança foi feita
        switching = false;
        rows = table.rows;
        // Cria um loop em todas linhas da tabela (exceto o header)
        for (i = 1; i < (rows.length - 1); i++) {
            // Começa dizendo que não deveria haver mudanças
            shouldSwitch = false;
            // Busca os dois elementos que você quer comparar, um da linha atual e outro da próxima
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            // Checa se as duas linhas devem trocar de lugar, baseado na direção
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // Se sim, marque como uma troca e quebra o loop
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // Se sim, marca como uma troca e quebra o loop
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            // Se uma troca foi marcada, faça a troca e marque que ela foi feita
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Cada vez que a troca for feita, acrescenta 1 a conta
            switchcount ++;
        } else {
            // Se nenhuma troca foi feita E a direção é "asc", coloca a direção como "desc" e roda o loop atual de novo
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}
