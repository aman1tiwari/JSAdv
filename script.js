var cart = [];
function add() {
  var id = document.getElementById("ID").value;
  var name = document.getElementById("name").value;
  var salary = document.getElementById("salary").value;
  var upsal=document.getElementById("up").value;
  

  mytable =
    "<table><tr><th>ID</th><th>Nmae</th><th>Salary</th><th>Updated Salary</th><th>Action</th></tr>";

  var product = {
    ID: id,
    Name: name,
    Salary: salary,
    Updated_sal:upsal,
  };
  cart.push(product);

  display();
}

function display(){
    mytable =
    "<table><tr><th>ID</th><th>Name</th><th>Salary</th><th>Action</th></tr>";

  cart.forEach((element) => {
    mytable +=
      "<tr><td>" +
      element.ID +
      "</td><td>" +
      element.Name +
      "</td><td>" +
      element.Salary +
      "</td><td>" +
      "<button>Delete</button>"
    "</td></tr>";
  });
  mytable += "</table>";
  // console.log(mytable);
  document.getElementById("table1").innerHTML = mytable;
}

class Emp {
    employee (){
        var Emp_id=document.getElementById("ID").value;
        var Emp_name=document.getElementById("name").value;
        var Emp_salary=document.getElementById("salary").value;
        
        var Emp_ob = {
        Emp_ID: 'Emp_id',
        Emp_Name: 'Emp_name',
        Emp_Salary: 'Emp_salary',
      };
       var st=JSON.stringify(Emp_ob);
      cart.push(Emp_ob);
      add();
      display();
    }
    
}



    





