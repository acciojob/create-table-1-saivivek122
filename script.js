let table=document.getElementById("sampleTable");


function insert_Row() {
    //Write your code here
	let row=table.insertRow(0);

	let td1=row.insertCell(0);
	let td2=row.insertCell(1);

	td1.textContent="New Cell1";
	td2.textContent="New Cell2";

  
  
}
