// function one_point () {
//     let board = JXG.JSXGraph.initBoard('point', {boundingbox: [-25, 25, 25, -25], axis:true, showCopyright:false});
//     board.create('point', [4.5,4.5], { name:'A',size:5 });
// };

// function two_point () {
//   let street = JXG.JSXGraph.initBoard('twoPoint', {boundingbox: [-25, 25, 25, -25], axis:true, showCopyright:false});
//   street.create('point',[-15,10], {name:'A',size:4});
//   street.create('point',[20,5], {name:'B',size:4});
//   street.create('line',["A","B"], {strokeColor:'#208',strokeWidth:2, straightFirst:false, straightLast:false,});
// };

// function midpoint() {
//   let mid_point = JXG.JSXGraph.initBoard('midPoint', {boundingbox: [-25, 25, 25, -25], axis:true, showCopyright:false});
//   const point = [];
//   point[0] = mid_point.create('point',[-10,5], {name:'A',size:4});
//   point[1] = mid_point.create('point',[20,5], {name:'B',size:4});
//   point[2] = mid_point.create('point',[5,-5], {name:'N',size:4});
//   point[3] = mid_point.create('midpoint', [point[0], point[1]], {name:'M',size:4});
//   mid_point.create('text', [8, 6, "Trung điểm"]);

// function line_point (x, y, color='#208', sF = false, sL = false) {
//     mid_point.create('line',[x, y], {strokeColor: color,strokeWidth:2, straightFirst:sF, straightLast:sL,});
//   }
//   line_point("A","B");
//   line_point("A","N","rgb(238, 117, 3)");
//   line_point("B","N","rgb(238, 117, 3)");
//   line_point("M","N","rgb(11, 238, 3)", true, true);
// };

// function threedot () {
//   let three_dot = JXG.JSXGraph.initBoard("threeDot", {boundingbox: [-25, 25, 25, -25], axis:true, showCopyright:false});
//   const point = [];
//   point[0] = three_dot.create('point',[-15,10], {name:'A',size:4});
//   point[1] = three_dot.create('point',[0,8], {name:'B',size:4});
//   point[2] = three_dot.create('point',[20,5], {name:'C',size:4});

//   point[3] = three_dot.create('point',[-18,3], {name:'D',size:4});
//   point[4] = three_dot.create('point',[-5,-10], {name:'E',size:4});
//   point[5] = three_dot.create('point',[15,-5], {name:'F',size:4});


//   three_dot.create('line',["A", "C"], {strokeColor: "#208",strokeWidth:2, straightFirst:false, straightLast:false,});
//   three_dot.create('line',["D", "E"], {strokeColor: "#208",strokeWidth:2, straightFirst:false, straightLast:false,});
//   three_dot.create('line',["D", "F"], {strokeColor: "#208",strokeWidth:2, straightFirst:false, straightLast:false,});
//   three_dot.create('line',["E", "F"], {strokeColor: "#208",strokeWidth:2, straightFirst:false, straightLast:false,});

// }

// function triangle (id, x1, y1, x2, y2, x3, y3) {
//   let board = JXG.JSXGraph.initBoard(id, {axis:false,boundingbox:[-25, 25, 25, -25], axis:true, showCopyright:false});
//   const point = [];
//   point[1] = board.create('point', [x1, y1]);
//   point[2] = board.create('point', [x2, y2]);
//   point[3] = board.create('point', [x3, y3]);
  
// const triArr1 = [point[3],point[2],point[1]];
// board.create('polygon',triArr1, {strokeWidth:2, strokeColor:'#dd00dd',highlight:false});
  
// const arc1 = board.create('angle',triArr1,{radius:4,name:'&theta;2'});
// const triArr2 = [point[2],point[1],point[3]];
// const arc2 = board.create('angle',triArr2,{radius:4,name:'&theta;1'});
// const triArr3 = [point[1],point[3],point[2]];
// const arc3 = board.create('angle',triArr3,{radius:4,name:'&theta;3'});

// const updateG = function() {
// 	board.suspendUpdate();
// 	if( arc1.Value() > Math.PI) {
// 		board.removeObject(arc1);
// 		triArr1 = [triArr1[2], triArr1[1], triArr1[0]];	
// 		arc1 = board.create('angle',triArr1,{radius:1,name:'&theta;2'});			
// 		board.removeObject(arc2);
// 		triArr2 = [triArr2[2], triArr2[1], triArr2[0]];
// 		arc2 = board.create('angle',triArr2,{radius:1,name:'&theta;1'});			
// 		board.removeObject(arc3);
// 		triArr3 = [triArr3[2], triArr3[1], triArr3[0]];
// 		arc3 = board.create('angle',triArr3,{radius:1,name:'&theta;3'});				
// 	}		
// 	board.unsuspendUpdate();
// }
//   point[1].on('drag',function(){
//     updateG();
//   });
//   point[2].on('drag',function(){
//     updateG();
//   });
//   point[3].on('drag',function(){
//     updateG();
//   }); 

// board.create('text', [-22, 10, function () {
//   return `<p>&theta;_1 = ${(arc2.Value() * 180 / Math.PI).toFixed(1)} '&deg;</p> 
//   <p>&theta;_2 = ${(arc1.Value() * 180 / Math.PI).toFixed(1)} &deg;</p>
//   <p>&theta;_3 = ${(arc3.Value() * 180 / Math.PI).toFixed(1)} &deg;</p>
//   <p>&theta;_1 + &theta;_2 + &theta;_3 = 180&deg;</p>`;
//   }],{highlight:false,fixed:true});
// };

// function high_road (id,x1, y1, x2, y2, x3, y3, x4=0, y4=0) {
//   let three_dot = JXG.JSXGraph.initBoard(id, {boundingbox: [-25, 25, 25, -25], axis:true, showCopyright:false});
//   const point = [];
//   point[0] = three_dot.create('point',[x1, y1], {name:'A',size:4});
//   point[1] = three_dot.create('point',[x2, y2], {name:'B',size:4});
//   point[2] = three_dot.create('point',[x3, y3], {name:'C',size:4});
//   point[3] = three_dot.create('point',[x4, y4], {name:'H',size:4});
//   let A = three_dot.create('line',["A", "B"], {strokeColor: "#208",strokeWidth:2, straightFirst:false, straightLast:false,});
//   let B = three_dot.create('line',["A", "C"], {strokeColor: "#208",strokeWidth:2, straightFirst:false, straightLast:false,});
//   let C = three_dot.create('line',["B", "C"], {strokeColor: "#208",strokeWidth:2, straightFirst:false, straightLast:false,});
//   let H_ = three_dot.create('line',["H", "B"], {strokeColor: "#208",dash:2, straightFirst:false, straightLast:false,});
//   let H = three_dot.create('line',["A", "H"], {strokeColor: "rgb(194, 6, 6)",dash:2, straightFirst:false, straightLast:false,});
//   three_dot.create('angle', [point[2],point[3],point[0]], {type:'sector', orthoType:'square', orthoSensitivity:2, radius:2});

//   three_dot.update();

// };

// function pitago () {
//   let board = JXG.JSXGraph.initBoard('pitago', {boundingbox: [-25, 25, 25, -25], axis:true, showCopyright:false});
//   const point = [];
//   point[0] = board.create('point',[-15,-15], {name:'A',size:4});
//   point[1] = board.create('point',[-15,15], {name:'B',size:4});
//   point[2] = board.create('point',[15,-15], {name:'C',size:4});
//   point[3] = board.create('midpoint', [point[1], point[2]], {name:'H',size:4});

//   board.create('text', [-10, 10, "Hình chiếu"]);
//   board.create('text', [-21, 3, "Đường xiên"]);
//   board.create('text', [-10, -9, "Đường cao"]);
//   board.create('text', [-4, -14, "Kề"]);
//   board.create('text', [3, 3, "Huyền"]);
//   board.create('text', [-18.4, -5, "Đối"]);
//   board.create('text', [7, 13, "BC^2 = BA^2 + AC^2"], {strokeColor:'red'});
//   function line_point (x, y, color='#208') {
//     board.create('line',[x, y], {strokeColor: color,strokeWidth:2, straightFirst:false, straightLast:false,});
//   }
//   line_point("A","B");
//   line_point("A","C");
//   line_point("B","C");
//   line_point("A","H");
//   board.create('angle', [point[2],point[0],point[1]], {type:'sector', orthoType:'square', orthoSensitivity:2, radius:2});
//   board.create('angle', [point[0],point[3],point[2]], {type:'sector', orthoType:'square', orthoSensitivity:2, radius:2});

//   board.update();

// };

// function trigonometric () {
//   let board = JXG.JSXGraph.initBoard('trigonometric', {boundingbox: [-25, 25, 25, -25], axis:true, showCopyright:false});
//   point[0] = board.create('point',[15,-5], {name:'A',size:4});
//   point[1] = board.create('point',[5,10], {name:'B',size:4});
//   point[2] = board.create('point',[-18.5,-5], {name:'C',size:4});
//   point[3] = board.create('point',[5,-5], {name:'H',size:4});

//   function line_point (x, y, color='#208') {
//     board.create('line',[x, y], {strokeColor: color,strokeWidth:2, straightFirst:false, straightLast:false,});
//   }
//   line_point("A","B");
//   line_point("A","C");
//   line_point("B","C");
//   line_point("B","H");

//   board.create('angle', [point[2],point[1],point[0]], {type:'sector', orthoType:'square', orthoSensitivity:2, radius:2});
//   board.create('angle', [point[1],point[3],point[2]], {type:'sector', orthoType:'square', orthoSensitivity:2, radius:2});
//   board.create('text', [14, 4, "Đường xiên"]);
//   board.create('text', [2, 2, "Đường cao"]);
//   board.create('text', [4, -8, "Hình chiếu"]);
//   board.create('text', [-10, -6, "a'"], {strokeColor:'red'});
//   board.create('text', [10, -6, "c'"], {strokeColor:'red'});
//   board.create('text', [-20, 18, "1/BH^2 = 1/BA^2 + 1/BC^2"], {strokeColor:'red'});
//   board.create('text', [-20, 16, "BH^2 = HC.HA = a'.c'"], {strokeColor:'red'});
//   board.create('text', [-20, 14, "AB^2 = AH.AC"], {strokeColor:'red'});
//   board.create('text', [-20, 12, "BC^2 = CH.CA"], {strokeColor:'red'});

//   board.update();

// };

// function acreage () {
//   let board = JXG.JSXGraph.initBoard('acreage', {boundingbox: [-25, 25, 25, -25], axis:true, showCopyright:false});
//   point[0] = board.create('point',[0,15], {name:'A',size:4});
//   point[1] = board.create('point',[-15,0], {name:'B',size:4});
//   point[2] = board.create('point',[15,0], {name:'C',size:4});

//   function line_point (x, y, color='rgb(43, 42, 42)') {
//     board.create('line',[x, y], {strokeColor: color,strokeWidth:2, straightFirst:false, straightLast:false,});
//   }
//   line_point("A","B", "red");
//   line_point("A","C");
//   line_point("B","C", "red");

//   board.create('angle', [point[2],point[1],point[0]], {type:'sector', orthoType:'square', orthoSensitivity:2, radius:4});
//   board.create('text', [10, 10, "AC = ???"]);
//   board.create('text', [-20, 22, "S = 1/2 CA.BH = 1/2 BC.BA (đường cao X cạnh đáy)"], {strokeColor:'red'});
//   board.create('text', [-20, 18, "S = 1/2 BA.BC.sinB (1/2 tích hai cạnh X sin góc kẹt giữa)"], {strokeColor:'red'});

//   board.update();

// };

// function acreage_2 () {
//   let board = JXG.JSXGraph.initBoard('acreage_2', {boundingbox: [-25, 25, 25, -25], axis:true, showCopyright:false});
//   point[0] = board.create('point',[0,15], {name:'A',size:4});
//   point[1] = board.create('point',[-15,0], {name:'B',size:4});
//   point[2] = board.create('point',[15,0], {name:'C',size:4});

//   let b1 = board.create('segment',['A','B'],{name:''});
//   let b2 = board.create('segment',['A','C'],{name:''});
//   let b3 = board.create('segment',['C','B'],{name:''});

//   let l1 = board.create('bisector',['B','A','C'],{name:'',visible:false}); // alpha
//   let l2 = board.create('bisector',['C','B','A'],{name:'',visible:false}); // beta
//   let i1 = board.create('intersection',[l1,l2,0],{name:'',visible:false});

//   let pp1 = board.create('perpendicularpoint',[i1,b1],{name:"C'",fillColor:'blue'});
//   let pp2 = board.create('perpendicularpoint',[i1,b2],{name:"B'",fillColor:'blue'});
//   let pp3 = board.create('perpendicularpoint',[i1,b3],{name:"A'",fillColor:'blue'});

//   board.create('circumcircle',[pp1,pp2,pp3],{name:'', strokeColor: '#3CB371', point: {visible: false}});

//   board.create('circle',[point[0], point[1], point[2]], {strokeColor:'rgb(202, 0, 151)',strokeWidth:2});

//   function line_point (x, y, color='rgb(61, 0, 202)') {
//     board.create('line',[x, y], {strokeColor: color,strokeWidth:2, straightFirst:false, straightLast:false,});
//   }
//   line_point("A","B");
//   line_point("A","C");
//   line_point("B","C");

//   board.create('text', [3, -2.5, "a"], {strokeColor:'red'});
//   board.create('text', [8.37, 9.86, "b"], {strokeColor:'red'});
//   board.create('text', [-9, 8.8, "c"], {strokeColor:'red'});
//   board.create('text', [-20, 21, "S = abc/4R"], {strokeColor:'red'});
//   board.create('text', [-20, 18, "S = p.r"], {strokeColor:'red'});
//   board.create('text', [9, 22, "Công thức Heron"]);
//   board.create('text', [9, 20, "S = &Sqrt;p(p-a)(p-b)(p-c)"], {strokeColor:'red'});
//   board.create('text', [-15, 10, "R"], {strokeColor:'red'});
//   board.create('text', [-4.6, 3, "r"], {strokeColor:'red'});
//   board.create('text', [-22, -12, "R: Bán kính vòng tròn ngoại tiếp (tiếp xúc 3 điểm &xutri;ABC"], {strokeColor:'red'});
//   board.create('text', [-22, -14, "r: Bán kính vòng tròn nội tiếp (tiếp xúc 3 cạnh &xutri;ABC"], {strokeColor:'red'});
//   board.create('text', [-22, -16, "p: Nữa chu vi (p = a+b+c/2)"], {strokeColor:'red'});
//   board.update();
// };

// function median_line() {
//   let board = JXG.JSXGraph.initBoard('median_line', {boundingbox: [-25, 25, 25, -25], axis:true, showCopyright:false});
//   point[0] = board.create('point',[0,15], {name:'A',size:4});
//   point[1] = board.create('point',[-20,0], {name:'B',size:4});
//   point[2] = board.create('point',[15,0], {name:'C',size:4});

//   point[3] = board.create('midpoint', [point[0], point[1]], {name:'D',size:4});
//   point[4] = board.create('midpoint', [point[1], point[2]], {name:'E',size:4});
//   point[5] = board.create('midpoint', [point[2], point[0]], {name:'M',size:4});

//   function line_point (x, y, color='rgb(61, 0, 202)') {
//     board.create('line',[x, y], {strokeColor: color,strokeWidth:2, straightFirst:false, straightLast:false,});
//   }
//   line_point("A","B");
//   line_point("A","C");
//   line_point("B","C");
//   line_point("A","E", "rgb(0, 255, 34)");

//   let line1 = board.create('line',["B","M"], {strokeColor: "rgb(202, 0, 151)",strokeWidth:2, straightFirst:false, straightLast:false,});
//   let line2 = board.create('line',["C","D"], {strokeColor: "rgb(255, 251, 0)",strokeWidth:2, straightFirst:false, straightLast:false,});

//   board.create('text', [-10, 3.8, "mb"], {strokeColor:'rgb(202, 0, 151)'});
//   board.create('text', [7, 4.2, "mc"], {strokeColor:'rgb(255, 251, 0)'});
//   board.create('text', [-3.7, -1.5, "ma"], {strokeColor:'rgb(0, 255, 34)'});

//   board.create('text', [6, -7, "ma^2 = (b^2+c^2)/2 - a^2/4"], {strokeColor:'red'});
//   board.create('text', [6, -9, "mb^2 = (a^2+c^2)/2 - b^2/4"], {strokeColor:'red'});
//   board.create('text', [6, -11, "ma^2 = (a^2+b^2)/2 - c^2/4"], {strokeColor:'red'});
//   board.create('intersection', [line1, line2, 0], {name:"G",fillColor:'#9932CC',strokeColor:'red'});

//   board.update();

// };

// function direct () {
//   let board = JXG.JSXGraph.initBoard('direct', {boundingbox: [-25, 25, 25, -25], axis:true, showCopyright:false});
//   point[0] = board.create('point',[-15,15], {name:'A',size:4});
//   point[1] = board.create('point',[-12,-12], {name:'B',size:4});
//   point[2] = board.create('point',[17,11], {name:'C',size:4});

//   let line1 = board.create('line',["A","B"], {strokeColor: "rgb(61, 0, 202)",strokeWidth:2, straightFirst:false, straightLast:false,});
//   let line2 = board.create('line',["A","C"], {strokeColor: "rgb(61, 0, 202)",strokeWidth:2, straightFirst:false, straightLast:false,});
//   let line3 = board.create('line',["B","C"], {strokeColor: "rgb(61, 0, 202)",strokeWidth:2, straightFirst:false, straightLast:false,});

//   point[3] = board.create('perpendicularpoint', [point[0], line3], {name:'M',size:4, strokeColor: "rgb(251, 253, 0)"});
//   point[4] = board.create('perpendicularpoint', [point[1], line2], {name:'N',size:4, strokeColor: "rgb(251, 253, 0)"});
//   point[5] =  board.create('perpendicularpoint', [point[2], line1], {name:'Q',size:4, strokeColor: "rgb(251, 253, 0)"});

//   let line4 = board.create('line',["C","Q"], {strokeColor: "rgb(251, 3, 0)",strokeWidth:2, straightFirst:false, straightLast:false,});
//   let line5 = board.create('line',["A","M"], {strokeColor: "rgb(251, 3, 0)",strokeWidth:2, straightFirst:false, straightLast:false,});
//   let line6 = board.create('line',["B","N"], {strokeColor: "rgb(251, 3, 0)",strokeWidth:2, straightFirst:false, straightLast:false,});

//   board.create('angle', [point[1],point[4],point[2]], {type:'sector', orthoType:'square', orthoSensitivity:2, radius:2});
//   board.create('angle', [point[0],point[3],point[1]], {type:'sector', orthoType:'square', orthoSensitivity:2, radius:2});
//   board.create('angle', [point[1],point[5],point[2]], {type:'sector', orthoType:'square', orthoSensitivity:2, radius:2});

//   board.create('intersection', [line4, line5, line6], {name:"H",fillColor:'#9932CC',strokeColor:'red'});
  
//   board.update();

// };

// function circumcircle_out() {
//   let board = JXG.JSXGraph.initBoard('circumcircle_out', {boundingbox: [-25, 25, 25, -25], axis:true, showCopyright:false});
//   point[0] = board.create('point',[-5,15], {name:'A',size:4});
//   point[1] = board.create('point',[-20,-10], {name:'B',size:4});
//   point[2] = board.create('point',[15,-5], {name:'C',size:4});
//   point[3] = board.create('midpoint', [point[0], point[1]], {name:'Q',size:4});
//   point[4] = board.create('midpoint', [point[1], point[2]], {name:'M',size:4});
//   point[5] = board.create('midpoint', [point[2], point[0]], {name:'N',size:4});
  
  
//   let line1 = board.create('line',["A","B"], {strokeColor: "rgb(61, 0, 202)",strokeWidth:2, straightFirst:false, straightLast:false});
//   let line2 = board.create('line',["A","C"], {strokeColor: "rgb(61, 0, 202)",strokeWidth:2, straightFirst:false, straightLast:false});
//   let line3 = board.create('line',["B","C"], {strokeColor: "rgb(61, 0, 202)",strokeWidth:2, straightFirst:false, straightLast:false});

  
//   board.create('perpendicularpoint', [line1, point[3]], {name:'K',size:4, strokeColor: "rgb(251, 253, 0)"});
//   board.create('perpendicularpoint', [line2, point[5]], {name:'L',size:4, strokeColor: "rgb(251, 253, 0)"});
//   board.create('perpendicularpoint', [line3, point[4]], {name:'P',size:4, strokeColor: "rgb(251, 253, 0)"});

//   let line4 = board.create('line',["Q","K"], {strokeColor: "rgb(234, 23, 122)", strokeWidth: 1});
//   let line5 = board.create('line',["N","L"], {strokeColor: "rgb(234, 23, 122)", strokeWidth: 1});
//   let line6 = board.create('line',["M","P"], {strokeColor: "rgb(234, 23, 122)", strokeWidth: 1});

//   let center = board.create('intersection', [line4, line5, line6], {name:"I",fillColor:'#9932CC',strokeColor:'red'});

//   board.create('angle', [point[2],point[4],center], {type:'sector', orthoType:'square', orthoSensitivity:2, radius:2});
//   board.create('angle', [center,point[5],point[2]], {type:'sector', orthoType:'square', orthoSensitivity:2, radius:2});
//   board.create('angle', [point[1],point[3],center], {type:'sector', orthoType:'square', orthoSensitivity:2, radius:2});
//   board.update();

// };

// function circumcircle_in() {
//   let board = JXG.JSXGraph.initBoard('circumcircle_in', {boundingbox: [-25, 25, 25, -25], axis:true, showCopyright:false});
//   point[0] = board.create('point',[5,15], {name:'A',size:4});
//   point[1] = board.create('point',[-20,-5], {name:'B',size:4});
//   point[2] = board.create('point',[20,-15], {name:'C',size:4});

//   let b1 = board.create('segment',['A','B'],{name:''});
//   let b2 = board.create('segment',['A','C'],{name:''});
//   let b3 = board.create('segment',['C','B'],{name:''});

//   let l1 = board.create('bisector',['B','A','C'],{name:'',visible:false}); // alpha
//   let l2 = board.create('bisector',['C','B','A'],{name:'',visible:false}); // beta
//   let i1 = board.create('intersection',[l1,l2,0],{name:'',visible:false});

//   let pp1 = board.create('perpendicularpoint',[i1,b1],{name:"C'",fillColor:'blue'});
//   let pp2 = board.create('perpendicularpoint',[i1,b2],{name:"B'",fillColor:'blue'});
//   let pp3 = board.create('perpendicularpoint',[i1,b3],{name:"A'",fillColor:'blue'});

//   board.create('circumcircle',[pp1,pp2,pp3],{name:'', strokeColor: '#3CB371', point: {visible: false}});

//   board.create('perpendicularpoint', [pp1, b1], {name:'K',size:4, strokeColor: "rgb(251, 253, 0)"});
//   board.create('perpendicularpoint', [pp2, b2], {name:'M',size:4, strokeColor: "rgb(251, 253, 0)"});
//   board.create('perpendicularpoint', [pp3, b3], {name:'N',size:4, strokeColor: "rgb(251, 253, 0)"});

//   let inline1 = board.create('line',["C'","K"], {strokeColor: "rgb(234, 23, 122)", strokeWidth: 1});
//   let inline2 = board.create('line',["B'","M"], {strokeColor: "rgb(234, 23, 122)", strokeWidth: 1});
//   let inline3 = board.create('line',["A'","N"], {strokeColor: "rgb(234, 23, 122)", strokeWidth: 1});

//   let center = board.create('intersection', [inline1, inline2, inline3], {name:"I",fillColor:'#9932CC',strokeColor:'red'});

//   board.create('line',["I","A"], {strokeColor: "rgb(250, 255, 0)", strokeWidth: 3, straightFirst:false, straightLast:false});
//   board.create('line',["I","B"], {strokeColor: "rgb(250, 255, 0)", strokeWidth: 3, straightFirst:false, straightLast:false});
//   board.create('line',["I","C"], {strokeColor: "rgb(250, 255, 0)", strokeWidth: 3, straightFirst:false, straightLast:false});

//   board.create('angle', [point[0],pp2,center], {type:'sector', orthoType:'square', orthoSensitivity:2, radius:2});
//   board.create('angle', [point[1],pp1,center], {type:'sector', orthoType:'square', orthoSensitivity:2, radius:2});
//   board.create('angle', [point[2],pp3,center], {type:'sector', orthoType:'square', orthoSensitivity:2, radius:2});

//   board.update();

// };

// one_point();
// two_point();
// midpoint();
// threedot();
// triangle('triangle_basic_1',-7,12.2,2,-7,18.5,-5);
// triangle('triangle_basic_2',-5,15,-5,-10,12,-10);
// triangle('triangle_basic_3',0,10.8,-12,-10,12,-10);
// triangle('triangle_basic_4',0,14,-8,-5.3,8,-5.3);
// triangle('triangle_basic_5',0,10,-20,-10,20,-10);
// high_road('high_road_1',-5,15,-15,-5,15,-5,-5,-5);
// high_road('high_road_2',-5,15,3,-5,15,-5,-5,-5);
// pitago();
// trigonometric();
// acreage();
// acreage_2();
// median_line();
// direct();
// circumcircle_out();
// circumcircle_in();
// export { one_point, two_point, midpoint, threedot, triangle, high_road, pitago,
//   trigonometric, acreage, acreage_2, median_line, direct, circumcircle_out, circumcircle_in };