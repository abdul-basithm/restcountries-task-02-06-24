var res = fetch("https://restcountries.com/v3.1/all");
res.then((data) => data.json()).then((data1) => foo(data1))

var container = document.createElement("div");
container.className = "container";

var row = document.createElement("div");
row.className = "row";

function foo(data1) {
    console.log(data1[10])
    for (var i = 0; i < data1.length; i++) {
        var col = document.createElement("div");
        col.className = "col-lg-4";
        col.innerHTML = `<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header" style="text-align: center; background-color: black;"> ${data1[i].name.common} </div>
        <div class="card-body">
          <h5 class="card-title"></h5>
          <img src=${data1[i].flags.png} class="card-img-top" style="height: 150px; width: 250px;" alt="...">
          <p style="text-align: center; margin:15px">Capital: ${data1[i].capital}</p>
          <p style="text-align: center;">Region: ${data1[i].region}</p>
          <p style="text-align: center;">Country code: ${data1[i].altSpellings[0]}</p>
          <button style="margin: 0px 50px; color: white; width: 150px; background-color: slategray; text-color: white">click for weather</button>
        </div>
      </div>`
        row.append(col);
        container.append(row)
        document.body.append(container);
    }

}