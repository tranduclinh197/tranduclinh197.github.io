// 1 diem
function one_point () {
    let board = JXG.JSXGraph.initBoard('point', {boundingbox: [-10, 10, 30, -10], axis:true});
    board.create('point', [4.5,4.5], { name:'A',size:3 });
};

function two_point () {
  let street = JXG.JSXGraph.initBoard('twoPoint', {boundingbox: [-10, 10, 30, -10], axis:true});
  street.create('point',[5,5], {name:'A',size:4});
  street.create('point',[20,5], {name:'B',size:4});
  street.create('line',["A","B"], {strokeColor:'#208',strokeWidth:2, straightFirst:false, straightLast:false,});
}

function midpoint() {

}

one_point();
two_point();

export { one_point, two_point };