import { fabric } from 'fabric';
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

    /**
     * Eraser width
     * @type {number}
     */
    this.width = 12;

    /**
     * Inverted erasing (undo)
     * @type {boolean}
     */
    this.inverted = false;
  }

  start(setting) {
    const canvas = this.getCanvas();

    // Enable drawing mode with erasing behavior
    canvas.isDrawingMode = true;

    canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
    canvas.freeDrawingBrush.width = setting?.width || this.width;
    canvas.freeDrawingBrush.inverted = setting?.inverted || this.inverted;
  }

  end() {
    const canvas = this.getCanvas();

    canvas.isDrawingMode = false;
  }
}

export default EraseDrawing;
