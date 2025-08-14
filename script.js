let table=document.getElementById("sampleTable");


function insert_Row() {
    //Write your code here
	let row=document.createElement("tr");
	let td1=document.createElement("td");
	td1.textContent="New Cell1";
	let td2=document.createElement("td");
	td2.textContent="New Cell2";
	row.appendChild(td1);
	row.appendChild(td2);
	table.insertBefore(row,table.rows[0])

  
  
}
