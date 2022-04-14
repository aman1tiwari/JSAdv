var cart = [];
function add() {
  var id = document.getElementById("id").value;
  var name = document.getElementById("name").value;
  var salary = document.getElementById("salary").value;
  var upsal = (document.getElementById("salary").value)*(1.10)

  mytable =
    "<table><tr><th>ID</th><th>Nmae</th><th>Salary</th><th>Updated Salary</th><th>Action</th></tr>";

  var product = {
    ID: id,
    Name: name,
    Salary: salary,
    Updated_sal: upsal,
  };
  cart.push(product);

  display();
}

function display() {
  mytable =
    "<table><tr><th>ID</th><th>Name</th><th>Salary</th><th>Updated Salary</th><th>Action</th></tr>";

  cart.forEach((element) => {
    mytable +=
      "<tr><td>" +
      element.ID +
      "</td><td>" +
      element.Name +
      "</td><td>" +
      element.Salary +
      "</td><td>" +
      element.Updated_sal +
      "</td><td>" +
      "<button>Delete</button>";
    ("</td></tr>");
  });
  mytable += "</table>";
  // console.log(mytable);
  document.getElementById("table1").innerHTML = mytable;
}

class employee {
  empfun() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var sal = document.getElementById("salary").value;

    var data = {
      Id: `${id}`,
      Name: `${name}`,
      Sal: `${sal}`,
    };
    cart.push(data);
    console.log(person);

    var e1 = new employee();
    function addperson() {
      e1.empfun();
      e1.display();
    }
  }
}

try {
  col=""
  cart.forEach((element) => {
  var val =element.Updated_sal*1.10
  col += `  <tr>
  <td>${element.ID}</td>
  <td>${element.Name}</td>
  <td>${element.Salary}</td>
  <td>${val}</td>
  </tr>`;
  });
  document.getElementById("table").innerHTML = table + col;
  document.getElementById("id").value = "";
  document.getElementById("Name").value = "";
  document.getElementById("salary").value = "";
} catch (error) {
  console.log(error);
}
