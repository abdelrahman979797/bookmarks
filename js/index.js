var siteName = document.getElementById('webSiteName');
var siteURL = document.getElementById('webSiteURL');
var nameAlert = document.getElementById('nameAlert');
var urlAlert = document.getElementById('urlAlert');
var siteList = [];

if (localStorage.getItem("datalist") != null) {
    siteList = JSON.parse(localStorage.getItem("datalist"))
    dataShow()
}

function addSite() {
    var site = {
        siteNam: siteName.value,
        siteLink: siteURL.value,
    }
    siteList.push(site)
    dataShow()
    clrProduct()
    localStorage.setItem("datalist", JSON.stringify(siteList))
}

function dataShow() {
    var results = "";
    for (var i = 0; i < siteList.length; i++) {
        results += `<tr>
        <td>`+ i + `</td>
        <td>`+ siteList[i].siteNam + `</td>
        <td><a class="btn btn-secondary" href="https://`+ siteList[i].siteLink + `" target="_blank" rel="noopener noreferrer">visit</a></td>
        <td><button class="btn btn-warning">Update</button></td>
        <td><button class="btn btn-danger" onclick="deleteProduct(`+ i + `)">delete</button></td>
    </tr>`
    }
    document.getElementById("tableData").innerHTML = results
}
function clrProduct(){
    siteName.value = ""
    siteURL.value = ""
    
}

function deleteProduct(x) {
    siteList.splice(x, 1)
    dataShow()
    localStorage.setItem("datalist", JSON.stringify(siteList))
}
siteName.addEventListener('keyup', function(){
var regex = /^[A-Z][a-z]{1,10}[0-9]{0,4}$/
if(regex.test(siteName.value) == true){
    siteName.classList.add('is-valid')
siteName.classList.remove('is-invalid')
nameAlert.classList.add('d-none')
}
else{siteName.classList.add('is-invalid')
siteName.classList.remove('is-valid')
nameAlert.classList.remove('d-none')
nameAlert.classList.add('d-block')
;
}
})

siteURL.addEventListener('change', function(){
    var regex = /^(https?|ftp|http)?:?\/?\/?(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;
    if(regex.test(siteURL.value) == true){
siteURL.classList.add('is-valid')
siteURL.classList.remove('is-invalid')

}
else{siteURL.classList.add('is-invalid')
siteURL.classList.remove('is-valid')
urlAlert.classList.remove('d-none')
urlAlert.classList.add('d-block')
;}
})
