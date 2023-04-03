
class SyncfusionGridHandler {
    constructor(tableId, title, ajaxUrl,param) {
        this.tableId = tableId;
        this.title = title;
        this.ajaxUrl = ajaxUrl;
        this.param = param;
    }
    GenerateDataTable() {

        var title = this.title;
        var tableId = this.tableId;
        var ajaxUrl = this.ajaxUrl;
        var param = this.param;
        $.getJSON(ajaxUrl, function (r) {
            GetGrid(r.users, tableId, param,title)
        }).fail(function () { toastr.error('Something went wrong with this page.Please try again later or contact to the concern team....', 'Error Alert'); });

        function GetGrid(Datasource, tableId, param,title) {
            var grid = new ej.grids.Grid({
                dataSource: Datasource,
                columns: funbinddata(param.tblnm),
                enableResponsiveRow: true,
                isResponsive: true,
                enableResponsiveRow: true,
                allowExcelExport: true,
                allowPdfExport: false,
                allowPaging: true,
                allowFiltering: true,
                filterSettings: { type: 'Excel' },
                pageSettings: { pageCount: 8, pageSize: 10 },
                beforeDataBound: () => { grid.showSpinner(); },
                dataBound: function () {
                    grid.hideSpinner();
                },
                toolbar: ["Excel Export", "Clear Filter"],
                excelExportComplete: () => {
                    removeLoader();
                }
            });
            $("#" + tableId).empty();
            grid.appendTo("#" + tableId);
          
            grid.toolbarClick = function (args) {
                if (args.item.id === tableId + "_Excel Export") {
                    AddSPinner(tableId)
                    JsonToExcel(Datasource, title)
                    removeLoader();
                }
                if (args.item.id === tableId + "_Clear Filter") {
                    grid.clearFiltering();
                }
            };
        function JsonToExcel(data, Filename) {
            AddSPinner(tableId);
            /* this line is only needed if you are not adding a script tag reference */
            if (typeof XLSX == 'undefined') XLSX = require('xlsx');
            /* make the worksheet */
            var ws = XLSX.utils.json_to_sheet(data);
            /* add to workbook */
            var wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
            /* write workbook (use type 'binary') */
            var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
            /* generate a download */
            function s2ab(s) {
                var buf = new ArrayBuffer(s.length);
                var view = new Uint8Array(buf);
                for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
                return buf;
            }
            saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), Filename + ".xlsx");
            removeLoader();
        }
            function funbinddata(tblnm) {
                var column = [];
                if (tblnm == "Users") {
                    column = [
                        { field: 'id', headerText: 'Id', visible: false },
                        { field: 'firstName', headerText: 'First Name', visible: false },
                        { field: 'lastName', headerText: 'Last Name', visible: false },
                        { field: 'password', headerText: 'Password', visible: false },
                        { field: 'name', headerText: 'Name' /*customAttributes: { class: 'orientationcss' },*/ },
                        {
                            field: 'email', headerText: 'Email'
                        },
                        { field: 'userName', headerText: 'User Name' },
                        { field: 'department', headerText: 'Department' },
                        { field: 'roles', headerText: 'Roles' },
                        { field: 'Edit', headerText: 'Edit', width: 100, allowFiltering: false, template: "#template" },
                        { field: 'Delete', headerText: 'Delete', width: 120, allowFiltering: false, template: "#template1" }
                    ]
                }
                else if (tblnm == "Roles") {
                    column = [
                        { field: 'id', headerText: 'Id', visible: false },
                        { field: 'name', headerText: 'Name' },
                        { field: 'description', headerText: 'Description' },
                        { field: 'Edit', headerText: 'Edit', width: 100, allowFiltering: false, template: "#template" },
                        { field: 'Delete', headerText: 'Delete', width: 120, allowFiltering: false, template: "#template1" }
                    ]

                }
                else if (tblnm == "Policy") {
                    column = [
                        { field: 'id', headerText: 'Id', visible: false },
                        { field: 'name', headerText: 'Name' },
                        { field: 'description', headerText: 'Description' },
                        { field: 'Edit', headerText: 'Edit', width: 100, allowFiltering: false, template: "#template" },
                        { field: 'Delete', headerText: 'Delete', width: 120, allowFiltering: false, template: "#template1" }
                    ]
                }
                return column;
            }
            function AddSPinner(tableId) {
                $("#" + tableId).append('<div id="dvLoader" class="preload" style="margin:auto;z-index:1;position:absolute;left:50%;top:50%;"></div>');
            }
            function removeLoader() {
              
                    $(".preload").remove();

            }
        }
    }
       
    
}



