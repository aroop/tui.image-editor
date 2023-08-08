import Component from '@/interface/component';
import { componentNames } from '@/consts';

/**
 * EraseDrawing
 * @class EraseDrawing
 * @param {Graphics} graphics - Graphics instance
 * @extends {Component}
 * @ignore
 */
class EraseDrawing extends Component {
  constructor(graphics) {
    super(componentNames.ERASE_DRAWING, graphics);
    this.width = 12;
  }

  start(setting) {
    console.log('eraseDrawing start');
    const canvas = this.getCanvas();

    canvas.isDrawingMode = true;
    this.setEraser(setting);
  }

  setEraser(setting) {
    console.log('setEraser');
    const brush = this.getCanvas().freeDrawingBrush;

    setting = setting || {};
    this.width = setting.width || this.width;
    brush.width = this.width;
    brush.color = 'rgba(0, 0, 0, 0)';
    brush.globalCompositeOperation = 'destination-out'; // Eraser effect
  }

  end() {
    console.log('eraseDrawing end');
    const canvas = this.getCanvas();
    canvas.isDrawingMode = false;
  }
}

export default EraseDrawing;
