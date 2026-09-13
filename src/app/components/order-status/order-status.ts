import { Component } from '@angular/core';

@Component({
  selector: 'app-order-status',
  imports: [],
  templateUrl: './order-status.html',
  styleUrl: './order-status.scss',
})
export class OrderStatus {
//<script>
//  function consultarPedidos()
//  {
//    var numeroPedido = document.getElementById("numeroPedido").value;
//
//    fetch('http://localhost:8080/pedidos/' + numeroPedido,
//      {
//        method: 'GET',
//        headers:
//          {
//            'Content-Type': 'application/json'
//          }
//      })
//      .then(response => response.json())
//      .then(data => {exibirResultadoConsulta(data);})
//      .catch(error => {console.error('Erro ao consultar pedidos:', error);});
//  }
//
//  function exibirResultadoConsulta(data)
//  {
//    var resultadoDiv = document.getElementById("resultadoConsulta");
//    resultadoDiv.innerHTML = '';
//
//    if (data.length === 0)
//    {
//      resultadoDiv.innerHTML = 'Nenhum pedido encontrado.';
//      return;
//    }
//
//    var table = document.createElement('table');
//    table.classList.add('tabela');
//    var headerRow = table.insertRow(0);
//
//    Object.keys(data[0]).forEach(function(key)
//    {
//      var th = document.createElement('th');
//      th.textContent = key;
//      headerRow.appendChild(th);
//    });
//
//    data.forEach(function(rowData)
//    {
//      var row = table.insertRow(-1);
//
//      Object.values(rowData).forEach(function(value)
//      {
//        var cell = row.insertCell(-1);
//        cell.textContent = value;
//      });
//    });
//
//    resultadoDiv.appendChild(table);
//  }
//</script>
}
