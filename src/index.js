import Konva from 'konva';
import {circ,rect1,message} from '../src/shapes/shapes'
import DrawBtn from './shapes/DrawBtn'
export const mstage = new Konva.Stage({
    container : "mcontainer",
    width : 800,
    height: 600,
    
})

const layer = new Konva.Layer({
})

let pencilBtn = new DrawBtn(layer,500,50,'draw');
pencilBtn.create();
pencilBtn.kobj.on('click',function(){pencilBtn.onClickHandler();});

pencilBtn.makeClearBtn(550,50,'black','white','clear')
pencilBtn.clearObj.on('click',function(){
    pencilBtn.clearLines();
})


<<<<<<< HEAD
layer.add(rect1,circ,message);
=======
layer.add(circ,message,rect1);
rect1.zIndex(0);
>>>>>>> 5fa5b7ba235278b05e56ee35b32e4297afaf6524

mstage.add(layer);


//general example functions


// mstage.on('mousedown',function(){
//     //console.log("mouseover hua hai");
//     let mpointer = mstage.getPointerPosition();
//     message.text(`${mpointer.x} and ${mpointer.y} -> mouseenter`);
//     layer.draw();
// })














circ.on('mouseover',function(){
    // console.log("mouseover");
    this.fill('black');
    layer.draw();
})
circ.on('mouseout',function(){
    // console.log("mouseover");
    this.fill('#a3d2ca');
    layer.draw();
})