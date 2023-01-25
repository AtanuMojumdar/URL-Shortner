let cng = document.getElementById('cng')
let ss = "";
let inn = document.getElementById('inn')
let conn = document.getElementById('conn')

let UrlShort = async (url) => {
  let options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input: `${url}` })
  }
  let p = await fetch("https://gotiny.cc/api", options);
  let response = p.json()
  return response
}

let mainn = async () => {
  try {
    let url = inn.value;
    let x1 = await UrlShort(url)
    console.log(x1)
    console.log(x1[0].long)
    console.log(x1[0].code)
    let cc = "gotiny.cc/" + `${x1[0].code}`;
    ss = cc;
    cng.innerHTML = `<h2 class="text-center" id="cng">${ss}</h2>`;
    cng.style.display = "block";
    console.log(cc)
  }
  catch (err) {
    cng.style.display = "none";
    conn.insertAdjacentHTML('beforeend', `<div id='xd' class="alert alert-danger text-center" role="alert">
  Invalid Input!
</div>`)
    setTimeout(() => {
      let xd = document.getElementById('xd');
      xd.remove();
    }, 2000)

  }

}
// mainn()
