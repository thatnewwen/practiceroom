$(document).ready(function(){
  $(".practicer").each((index, butterfly) => {
    $(butterfly).css({top:  Math.floor(Math.random() * 80) + "%", left:  Math.floor(Math.random() * 80) + "%", position:'absolute'});
  })

  axios({
    method: "GET",
    url: `https://api.baserow.io/api/database/rows/table/633132/?order_by=field_5164395`,
    headers: {
      Authorization: "Token LaOsuKFtTZM9kfwwd3Kmh7ewYW1cwtu9"
    }
  }).then(function(response){
    events = response.data.results
    console.log(events)
    var now = new Date();
    var pastEvents = [];
    var futureEvents = [];
    events.forEach(element => {
      if (new Date(element.field_5164395) < now) {
        pastEvents.push(element)
      } else {
        futureEvents.push(element)
      }
    });
      const tableBody = document.querySelector('#event-table');

      // Loop through the rows (starting from row 1 to skip headers)
      for (let i = 0; i < futureEvents.length; i++) {
          const row = document.createElement('tr');
          // Loop through each cell in the row and create a table cell for each
          const cellElement = document.createElement('td');
          
          cellElement.innerHTML =  
          `
          <div class="title">${futureEvents[i].field_5164329}</div>
          `;
          row.appendChild(cellElement);
          
          const cellElement3 = document.createElement('td');
          cellElement3.textContent = futureEvents[i].field_5164393[0].value;
          row.appendChild(cellElement3);

          const cellElement6 = document.createElement('td');
          cellElement6.textContent = new Date(futureEvents[i].field_5164395).toLocaleString();
          row.appendChild(cellElement6);
          
          const cellElement4 = document.createElement('td');
          cellElement4.textContent = futureEvents[i].field_5164399[0].value;
          row.appendChild(cellElement4);
          
          const cellElement5 = document.createElement('td');
          if (futureEvents[i].field_5164403[0]) {
            image = futureEvents[i].field_5164403[0]?.url;
            cellElement5.innerHTML =  
            `
            <img class="card" src=${image}>
            `;
          } else {
            cellElement5.innerHTML =  
            `
            <img class="card" src="./assets/pr-logo.png">
            `;
          }
          row.appendChild(cellElement5);
          
          const cellElement2 = document.createElement('td');
          cellElement2.innerHTML =  
          `
          <p>${futureEvents[i].field_5164330}</p>
          `;
          row.appendChild(cellElement2);
          // Append the row to the table
          tableBody.appendChild(row);
      }
  })
}); 