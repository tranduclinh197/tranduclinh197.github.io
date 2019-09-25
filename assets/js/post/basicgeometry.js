// 1 diem
function one_point () {
    let board = JXG.JSXGraph.initBoard('point', {boundingbox: [-25, 25, 25, -25], axis:true, showCopyright:false});
    board.create('point', [4.5,4.5], { name:'A',size:5 });
};

function two_point () {
  let street = JXG.JSXGraph.initBoard('twoPoint', {boundingbox: [-25, 25, 25, -25], axis:true, showCopyright:false});
  street.create('point',[-15,10], {name:'A',size:4});
  street.create('point',[20,5], {name:'B',size:4});
  street.create('line',["A","B"], {strokeColor:'#208',strokeWidth:2, straightFirst:false, straightLast:false,});
};

function midpoint() {
  let mid_point = JXG.JSXGraph.initBoard('midPoint', {boundingbox: [-25, 25, 25, -25], axis:true, showCopyright:false});
  const point = [];
  point[0] = mid_point.create('point',[-10,5], {name:'A',size:4});
  point[1] = mid_point.create('point',[20,5], {name:'B',size:4});
  point[2] = mid_point.create('point',[5,-5], {name:'N',size:4});
  point[3] = mid_point.create('point',[5,5], {name:'M',size:5});
  mid_point.create('text', [8, 6, "Trung điểm"]);

function line_point (x, y, color='#208', sF = false, sL = false) {
    mid_point.create('line',[x, y], {strokeColor: color,strokeWidth:2, straightFirst:sF, straightLast:sL,});
  }
  line_point("A","B");
  line_point("A","N","rgb(238, 117, 3)");
  line_point("B","N","rgb(238, 117, 3)");
  line_point("M","N","rgb(11, 238, 3)", true, true);
};

function threedot () {
  let three_dot = JXG.JSXGraph.initBoard("threeDot", {boundingbox: [-25, 25, 25, -25], axis:true, showCopyright:false});
  const point = [];
  point[0] = three_dot.create('point',[-15,10], {name:'A',size:4});
  point[1] = three_dot.create('point',[0,8], {name:'B',size:4});
  point[2] = three_dot.create('point',[20,5], {name:'C',size:4});

  point[3] = three_dot.create('point',[-18,3], {name:'D',size:4});
  point[4] = three_dot.create('point',[-5,-10], {name:'E',size:4});
  point[5] = three_dot.create('point',[15,-5], {name:'F',size:4});


  three_dot.create('line',["A", "C"], {strokeColor: "#208",strokeWidth:2, straightFirst:false, straightLast:false,});
  three_dot.create('line',["D", "E"], {strokeColor: "#208",strokeWidth:2, straightFirst:false, straightLast:false,});
  three_dot.create('line',["D", "F"], {strokeColor: "#208",strokeWidth:2, straightFirst:false, straightLast:false,});
  three_dot.create('line',["E", "F"], {strokeColor: "#208",strokeWidth:2, straightFirst:false, straightLast:false,});

}

function triangle (id, x1, y1, x2, y2, x3, y3) {
  let board = JXG.JSXGraph.initBoard(id, {axis:false,boundingbox:[-25, 25, 25, -25], axis:true, showCopyright:false});
  const point = [];
  point[1] = board.create('point', [x1, y1]);
  point[2] = board.create('point', [x2, y2]);
  point[3] = board.create('point', [x3, y3]);
  
const triArr1 = [point[3],point[2],point[1]];
board.create('polygon',triArr1, {strokeWidth:2, strokeColor:'#dd00dd',highlight:false});
  
const arc1 = board.create('angle',triArr1,{radius:4,name:'&theta;2'});
const triArr2 = [point[2],point[1],point[3]];
const arc2 = board.create('angle',triArr2,{radius:4,name:'&theta;1'});
const triArr3 = [point[1],point[3],point[2]];
const arc3 = board.create('angle',triArr3,{radius:4,name:'&theta;3'});

const updateG = function() {
	board.suspendUpdate();
	if( arc1.Value() > Math.PI) {
		board.removeObject(arc1);
		triArr1 = [triArr1[2], triArr1[1], triArr1[0]];	
		arc1 = board.create('angle',triArr1,{radius:1,name:'&theta;2'});			
		board.removeObject(arc2);
		triArr2 = [triArr2[2], triArr2[1], triArr2[0]];
		arc2 = board.create('angle',triArr2,{radius:1,name:'&theta;1'});			
		board.removeObject(arc3);
		triArr3 = [triArr3[2], triArr3[1], triArr3[0]];
		arc3 = board.create('angle',triArr3,{radius:1,name:'&theta;3'});				
	}		
	board.unsuspendUpdate();
}
  point[1].on('drag',function(){
    updateG();
  });
  point[2].on('drag',function(){
    updateG();
  });
  point[3].on('drag',function(){
    updateG();
  }); 

board.create('text', [-22, 10, function () {
  return `<p>&theta;_1 = ${(arc2.Value() * 180 / Math.PI).toFixed(1)} '&deg;</p> 
  <p>&theta;_2 = ${(arc1.Value() * 180 / Math.PI).toFixed(1)} &deg;</p>
  <p>&theta;_3 = ${(arc3.Value() * 180 / Math.PI).toFixed(1)} &deg;</p>
  <p>&theta;_1 + &theta;_2 + &theta;_3 = 180&deg;</p>`;
  }],{highlight:false,fixed:true});
};

function high_road (id,x1, y1, x2, y2, x3, y3, x4=0, y4=0) {
  let three_dot = JXG.JSXGraph.initBoard(id, {boundingbox: [-25, 25, 25, -25], axis:true, showCopyright:false});
  const point = [];
  point[0] = three_dot.create('point',[x1, y1], {name:'A',size:4});
  point[1] = three_dot.create('point',[x2, y2], {name:'B',size:4});
  point[3] = three_dot.create('point',[x3, y3], {name:'C',size:4});
  point[2] = three_dot.create('point',[x4, y4], {name:'H',size:4});
  let A = three_dot.create('line',["A", "B"], {strokeColor: "#208",strokeWidth:2, straightFirst:false, straightLast:false,});
  let B = three_dot.create('line',["A", "C"], {strokeColor: "#208",strokeWidth:2, straightFirst:false, straightLast:false,});
  let C = three_dot.create('line',["B", "C"], {strokeColor: "#208",strokeWidth:2, straightFirst:false, straightLast:false,});
  let H_ = three_dot.create('line',["H", "B"], {strokeColor: "#208",dash:2, straightFirst:false, straightLast:false,});
  let H = three_dot.create('line',["A", "H"], {strokeColor: "rgb(194, 6, 6)",dash:2, straightFirst:false, straightLast:false,});
};

function pitago () {
  let board = JXG.JSXGraph.initBoard('pitago', {boundingbox: [-25, 25, 25, -25], axis:true, showCopyright:false});
  const point = [];
  point[0] = board.create('point',[-15,-15], {name:'A',size:4});
  point[1] = board.create('point',[-15,15], {name:'B',size:4});
  point[3] = board.create('point',[15,-15], {name:'C',size:4});
  point[2] = board.create('point',[0,0], {name:'H',size:4});
  board.create('text', [-10, 10, "Hình chiếu"]);
  board.create('text', [-21, 3, "Đường xiên"]);
  board.create('text', [-10, -9, "Đường cao"]);
  board.create('text', [-4, -14, "Kề"]);
  board.create('text', [3, 3, "Huyền"]);
  board.create('text', [-18.4, -5, "Đối"]);
  board.create('text', [7, 13, "BC^2 = BA^2 + AC^2"], {strokeColor:'red'});

  function line_point (x, y, color='#208') {
    board.create('line',[x, y], {strokeColor: color,strokeWidth:2, straightFirst:false, straightLast:false,});
  }
  line_point("A","B");
  line_point("A","C");
  line_point("B","C");
  line_point("A","H");
};

function trigonometric () {
  let board = JXG.JSXGraph.initBoard('trigonometric', {boundingbox: [-25, 25, 25, -25], axis:true, showCopyright:false});
  point[0] = board.create('point',[15,-5], {name:'A',size:4});
  point[1] = board.create('point',[5,10], {name:'B',size:4});
  point[3] = board.create('point',[-20,-5], {name:'C',size:4});
  point[2] = board.create('point',[5,-5], {name:'H',size:4});
};

one_point();
two_point();
midpoint();
threedot();
triangle('triangle_basic_1',-7,12.2,2,-7,18.5,-5);
triangle('triangle_basic_2',-5,15,-5,-10,12,-10);
triangle('triangle_basic_3',0,10.8,-12,-10,12,-10);
triangle('triangle_basic_4',0,14,-8,-5.3,8,-5.3);
triangle('triangle_basic_5',0,10,-20,-10,20,-10);
high_road('high_road_1',-5,15,-15,-5,15,-5,-5,-5);
high_road('high_road_2',-5,15,3,-5,15,-5,-5,-5);
pitago();
trigonometric();
export { one_point, two_point, midpoint, threedot, triangle, high_road, pitago, trigonometric };