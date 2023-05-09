var diagram1;
$(document).ready(showCanvas());

function loadDia() {
   diagram1.loadDiagram($("#jsontxt").val());
    //if (diagram1.nodes.length > 0) {
    //    //iterate a node
    //    for (var i = 0; i < diagram1.nodes.length; i++) {
    //        var node = diagram1.nodes[i];
    //        //alert(node.id); 
    //    }
    //}
    diagram1.appendTo('#element');
}


//...Populating BuildingID Combobox
$.get('/Building/getBids',
    function (response) {
        var listObj = new ej.dropdowns.ComboBox({
            dataSource: response, placeholder: 'Select Building ID', change: fnGetFIDs});
        listObj.appendTo('#cmbBID');
    });


function fnGetFIDs() {
    var bid = $('#cmbBID').val();
    //alert(bid);
    $.get('/Floor/getFids?bid='+bid,
        function (response) {          
            var listObj = new ej.dropdowns.ComboBox({
                dataSource: response, placeholder: 'Select Floor ID'
            });
            listObj.appendTo('#cmbFID');
        });
}

function saveDia() {
    var rcode = $('#txtRCode').val();
    var rname = $('#txtRName').val();
    var rdesc = $('#txtRDesc').val();
    var floorid = $('#cmbFID').val();
    var suser = "naveed";
    var diaJson = diagram1.saveDiagram();
    $("#jsontxt").html(diaJson);
    $.post({
        url: '/Room/SaveRoom/',
        data: {
            RCode: rcode,
            RName: rname,
            RDesc: rdesc,
            fkFID: floorid,
            sUser: suser,
            djson: diaJson
        },
        success: function (response) {
            if (response == 'success') {
                msgPopup('success', 'Room Saved Successfully');
            }
            else {
                msgPopup('error', response);
            }
        },
        error: function (err) {
            msgPopup('error', 'Error occured');
        }
    });
}

function fnClicked(args) {//write code here to do something if something in the diagram is clicked
}

function fnDropped(args) {//write code here to do something if something in the diagram is dragged and dropped
}

function showCanvas() {
    diagram1 = new ej.diagrams.Diagram({
        width: '100%',
        height: '600px',
        drop: fnDropped,
        click:fnClicked,
        constraints: ej.diagrams.DiagramConstraints.Default | ej.diagrams.DiagramConstraints.Tooltip,
    });
    diagram1.appendTo('#element');

    //....The below code is for the Palette
    var basicShapes = [{
        id: 'Rectangle',
        shape: {
            type: 'Basic',
            shape: 'Rectangle'
        }
    },
    {
        id: 'Ellipse',
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'Desk', style: { fill: 'none' },
        shape: {
            type: 'Native',
            content: '<g fill="#000000" stroke="none"><path d="M127.8 647.5M537.3 625.45c21.3-16.8 21.3-54.6 0-71.4l-10.2-8.05-199.2 0-199.5 0-9.9 11.55c-5.7 6.65-11.1 16.45-12.3 21.7-3.3 15.05 4.5 36.75 16.5 46.2l10.2 8.05 197.1 0 197.1 0 10.2-8.05zm-141.3-109.2 0-12.25-66 0-66 0 0 12.25 0 12.25 66 0 66 0 0-12.25zm28.5-29.75c47.1-7.7 91.8-46.55 113.4-98 15-36.05 18-63 16.5-148.75-1.2-60.9-2.4-72.8-8.1-92.75-17.4-58.45-57.6-101.5-109.8-117.25-25.5-7.7-186.3-7.7-214.2 0-55.5 15.4-99.9 67.9-113.1 133.35-6.6 33.95-4.8 177.45 2.7 200.9 9.3 28.35 18.3 46.55 33.3 65.45 24.9 31.85 52.8 50.05 86.7 56.7 21.9 4.2 167.1 4.55 192.6.35zm-369-124.25 7.5-8.4 0-95.9c0-91.7-.3-96.25-6.3-105.35-7.8-11.55-21-12.25-29.7-1.4-5.7 7.35-6 11.9-6 105l0 97.65 7.5 8.4c3.9 4.9 10.2 8.75 13.5 8.75 3.6 0 9.6-3.85 13.5-8.75zm576 0 7.5-8.4 0-95.9c0-91.7-.3-96.25-6.3-105.35-7.5-11.2-19.2-11.9-28.8-1.4-6.9 7.35-6.9 7.7-6.9 105l0 97.65 7.5 8.4c3.9 4.9 10.2 8.75 13.5 8.75 3.6 0 9.6-3.85 13.5-8.75zm-539.1-114.45-.9-36.05-8.1-1.05-8.4-1.05 0 36.75 0 37.1 9 0 9.3 0-.9-35.7zm492 0-.9-36.05-8.1-1.05-8.4-1.05 0 36.75 0 37.1 9 0 9.3 0-.9-35.7z"/></g>',
        }
    }
    ];
    //Initializes the symbol palette
    var palette = new ej.diagrams.SymbolPalette({
        expandMode: 'Multiple',
        palettes: [{
            id: 'basic',
            expanded: true,
            symbols: basicShapes,
            title: 'Please use these objects to Draw your room and Place the Chairs',
            iconCss: 'e-ddb-icons e-basic'
        }],
        symbolHeight: 80,
        symbolWidth: 80,
        getSymbolInfo: (symbol) => {
            if (symbol['text'] !== undefined) {
                return {
                    width: 75,
                    height: 40,
                    description: {
                        text: symbol['text'],
                        overflow: 'Wrap'
                    }
                };
            }
            return {
                width: 75,
                height: 40,
                description: {
                    text: symbol.shape['shape']
                }
            };
        }
    });
    palette.appendTo('#symbolpalette');
}

function msgPopup(icons, titles) {
    if (icons == 'error') {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            timer: 3000,
            showCancelButton: false,
            showConfirmButton: false
        });
        Toast.fire({ icon: icons, title: titles })
    }
    else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            timer: 3000,
            showCancelButton: false,
            showConfirmButton: false
        });
        Toast.fire({ icon: icons, title: titles })
    }
}