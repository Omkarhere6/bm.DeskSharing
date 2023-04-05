var diagram1;
$(document).ready(showCanvas());

function loadDia() {
    diagram1.loadDiagram($("#jsontxt").val());
    //...parse through all the nodes of teh diagram
    //diagram1 = document.getElementById("element").ej2_instances[0];
    if (diagram1.nodes.length > 0) {
        //iterate a node
        for (var i = 0; i < diagram.nodes.length; i++) {
            var node = diagram.nodes[i];
            //set a tooltip content for each node
            node.tooltip.content = "xzsdssx";
            //alert(node.id);
           // diagram.dataBind();
        }
    }
}

function saveDia() {
    var save = diagram1.saveDiagram();
    $("#jsontxt").html(save);
    alert(save);

}

function fnDropped(args) {
    var node = args.element;
    var tooltip = new ej.popups.Tooltip({
        width: '150px',
        height: '40px',
        content: 'Tooltip with specific width and height'
    });
    tooltip.appendTo(node);
}

//function fnMouseOver(args) {
//    var node=args.element;
//    //if(node.shape.type)
//    //node.tooltip.content="h";
//    node.tooltip.content = "h";
//    alert(node.id);
//}

//function clicked(args) {
//    var node = args.element;
//    node.tooltip.content = "h";
//    //diagram.dataBind();

//}

function showCanvas() {
    diagram1 = new ej.diagrams.Diagram({
        width: '100%',
        height: '600px',
       // snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
        drop: fnDropped,
        constraints: ej.diagrams.DiagramConstraints.Default | ej.diagrams.DiagramConstraints.Tooltip,
    });
    diagram1.appendTo('#element');


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
            //content: '<g fill="#000000" stroke="none"><path d="M426 1850 c-34 -11 -82 -54 -102 -92 -39 -75 2 -193 79 -229 36 -16 68 -19 235 -19 l192 0 0 -34 c0 -33 -1 -34 -51 -40 -123 -17 -273 -101 -349 -197 -74 -94 -120 -215 -120 -321 0 -58 0 -58 -30 -58 l-30 0 0 86 c0 84 -1 87 -34 120 -37 37 -82 45 -131 22 -52 -24 -55 -42 -55 -361 0 -280 1 -296 20 -320 29 -37 81 -52 126 -37 50 17 74 60 74 133 0 57 0 58 27 55 25 -3 28 -8 39 -76 34 -202 185 -371 389 -435 66 -21 88 -22 390 -22 275 0 329 2 384 18 210 58 370 233 403 441 12 74 14 77 38 74 23 -3 25 -7 30 -69 6 -76 22 -102 76 -119 47 -16 100 3 125 44 18 29 19 53 19 324 l0 294 -34 34 c-26 26 -42 34 -70 34 -87 0 -116 -40 -116 -160 l0 -80 -30 0 c-30 0 -30 1 -30 53 0 248 -217 489 -472 523 -46 7 -48 8 -48 40 l0 34 189 0 c202 0 228 5 274 48 40 38 57 74 57 122 0 81 -54 154 -126 171 -50 11 -1299 10 -1338 -1z m1365 -63 c71 -48 71 -156 0 -204 l-34 -23 -664 0 -665 0 -33 33 c-19 19 -37 47 -41 62 -11 43 15 105 55 132 l34 23 657 0 657 0 34 -23z m-471 -312 l0 -35 -220 0 -220 0 0 35 0 35 220 0 220 0 0 -35z m95 -85 c157 -22 306 -133 378 -280 50 -103 60 -180 55 -425 -4 -174 -8 -208 -27 -265 -58 -167 -192 -290 -366 -335 -85 -22 -621 -22 -714 0 -185 44 -333 194 -377 381 -22 97 -16 507 9 574 31 81 61 133 111 187 83 91 176 143 289 162 73 12 557 13 642 1z m-1230 -355 l25 -24 0 -274 c0 -262 -1 -275 -21 -301 -26 -33 -70 -35 -99 -4 -19 21 -20 34 -20 300 l0 279 25 24 c13 14 34 25 45 25 12 0 32 -11 45 -25z m1920 0 l25 -24 0 -274 c0 -262 -1 -275 -21 -301 -25 -32 -64 -34 -96 -4 -23 21 -23 22 -23 300 l0 279 25 24 c13 14 34 25 45 25 12 0 32 -11 45 -25z m-1797 -327 l-3 -103 -27 -3 -28 -3 0 105 0 106 30 0 31 0 -3 -102z m1640 0 l-3 -103 -27 -3 -28 -3 0 105 0 106 30 0 31 0 -3 -102z"/></g>',
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
