$(document).ready(function () {
    Bindtable();
});

function Bindtable() {
    $.ajax({
        type: "Get",
        url: "/Room/GetRoomsList",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (response) {
            Getgrid(response.data, "RoomGridDiv");
        },
        error: function (response) { }
    });
}

function Getgrid(Datasource, Tblid) {
    var grid = new ej.grids.Grid({
        dataSource: Datasource,
        allowSelection: true,
        allowFiltering: true,
        allowSorting: true,
        allowPaging: true,
        gridLines: 'Both',
        allowTextWrap: true,
        textWrapSettings: { wrapMode: 'Content' },
        filterSettings: { type: 'Excel' },
        selectionSettings: { persistSelection: true, type: "Multiple", checkboxOnly: true },
        pageSettings: { pageCount: 8, pageSize: 20 },
        queryCellInfo: activeCellColour,
        IsResponsive: true,
        verticalGridLines: {
            lineColor: "red",
            lineDashArray: "2 2"
        },
        columns: [
            { field: "rid", headerText: "Room ID", textAlign: "Center", width: 100 },
            { field: "rCode", headerText: "Room Code", textAlign: "Center", width: 100 },
            { field: "rName", headerText: "Room Name", textAlign: "Center", width: 100 },
            { field: "rDesc", headerText: "Description", textAlign: "Center", width: 150 },
            { field: "fkFID", headerText: "Floor ID", textAlign: "Center", width: 100 },
            { field: "sUser", headerText: "Created By", textAlign: "Center", width: 120 },
            {
                headerText: "Detail",
                template: "<a class='EditError editbtn' id='${rid}'><i class='fa fa-eye' aria-hidden='true' id='${rid}'></i></a>",
                textAlign: "Center",
                width: 70,
                headerTextAlign: "Center",
            }
        ],
        width: "auto",
        height: "auto"
    });
    grid.appendTo("#RoomGridDiv");

    function activeCellColour(args) {
        //debugger;
        var data = args.data;
        if (data.isActive == false) {
            // args.cell.style.backgroundColor = '#f54242';
            args.cell.style.color = '#f54242';
        }
    }
}

$(document).on('click', '.editbtn', function (event) {
    var rid = event.target.id;
    //alert(event.target.id);
    location.href = '/Room/ViewRoomDetails/' + rid;
});