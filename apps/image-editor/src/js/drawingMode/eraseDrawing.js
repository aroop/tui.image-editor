import DrawingMode from '@/interface/drawingMode';
import { drawingModes, componentNames as components } from '@/consts';

/**
 * EraseDrawingMode class
 * @class
 * @ignore
 */
class EraseDrawingMode extends DrawingMode {
  constructor() {
    super(drawingModes.ERASE_DRAWING);
  }

  /**
   * start this drawing mode
   * @param {Graphics} graphics - Graphics instance
   * @param {{width: ?number}} [options] - Eraser width
   * @override
   */
  start(graphics, options) {
    const eraseDrawing = graphics.getComponent(components.ERASE_DRAWING);
    eraseDrawing.start(options);
  }

  /**
   * stop this drawing mode
   * @param {Graphics} graphics - Graphics instance
   * @override
   */
  end(graphics) {
    const eraseDrawing = graphics.getComponent(components.ERASE_DRAWING);
    eraseDrawing.end();
  }
}

export default EraseDrawingMode;
