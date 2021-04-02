//page routing
function loadChildren(pageName, id)
{
    // debugger;
    $(".leftMenuHighlight").removeClass("leftMenuHighlight");
    $("#"+id+" li").addClass("leftMenuHighlight");
 localStorage.setItem("currentPage", pageName);
 localStorage.setItem("leftMenuItem", id);
 $("#ChildrenDiv").load(pageName);
}
// for reload envents
//clear localStorage
function clearAllLocalStorage()
{
    localStorage.removeItem('currentPage');
    localStorage.removeItem("leftMenuItem");
}
$(document).ready(function () {
    // debugger;
    if(localStorage.getItem("currentPage"))
    {
        $("#"+localStorage.getItem("leftMenuItem")+" li").addClass("leftMenuHighlight");
        $("#ChildrenDiv").load(localStorage.getItem("currentPage"));
        // highlet LeftMenu
    }
    else
    {
        $("#dashboard li").addClass("leftMenuHighlight");
        $("#ChildrenDiv").load('dashboard.html');
    }
});
//data table
$(document).ready(function () {
    $('#dtBasicExample').DataTable();
    $('.dataTables_length').addClass('bs-select');
});
//-----------side bar and chart-----------------//
// --------Sidebar And Header------------ //
const $button  = document.querySelector('#sidebar-toggle');
const $wrapper = document.querySelector('#wrapper');

$button.addEventListener('click', (e) => {
  e.preventDefault();
  $wrapper.classList.toggle('toggled');
});

//  ----------- Chart.js-------- //

//ratings function//
function add(ths, sno) {
    for (var i = 1; i <= 5; i++) {
        var cur = document.getElementById("star" + i)
        cur.className = "fa fa-star"
    }

    for (var i = 1; i <= sno; i++) {
        var cur = document.getElementById("star" + i)
        if (cur.className == "fa fa-star") {
            cur.className = "fa fa-star checked"
        }
    }
}