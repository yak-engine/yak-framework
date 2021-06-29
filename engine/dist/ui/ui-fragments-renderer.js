var UIFragmentsRenderer = /** @class */ (function () {
    function UIFragmentsRenderer(canvas) {
        this.graphics = canvas;
    }
    UIFragmentsRenderer.prototype.run = function () {
        this.draw();
        // this.processInteractables();
    };
    UIFragmentsRenderer.prototype.draw = function () {
        // this.graphics.fragments.uiFragments.forEach((uiFragment: UIFragment) => {
        //     if (uiFragment.isEnabled) {
        //         this.graphics.context.beginPath();
        //         if (uiFragment.isHovered && uiFragment.hoverState) {
        //             this.graphics.context.fillStyle = <string>uiFragment.hoverState.backgroundColor;
        //         }
        //         else {
        //             this.graphics.context.fillStyle = uiFragment.backgroundColor;
        //         }
        //         // this.graphics.context.fillRect(uiFragment.transform.x, uiFragment.transform.y, uiFragment.transform.width, uiFragment.transform.height);
        //         this.graphics.context.closePath(); 
        //         switch(uiFragment.constructor.name) {
        //             case uiConstants.entityName.button:
        //                 this.graphics.context.font = '16px Arial';
        //                 this.graphics.context.fillStyle = 'white';
        //                 this.graphics.context.textAlign = 'center';
        //                 this.graphics.context.textBaseline = 'middle';
        //                 let x = 0; //uiFragment.transform.x + (uiFragment.transform.width / 2);
        //                 let y = 0; //uiFragment.transform.y + (uiFragment.transform.height / 2);
        //                 this.graphics.context.fillText((<Button>uiFragment).text, x, y);
        //                 break;
        //             default:
        //                 break;
        //         }
        //     }
        // });
    };
    return UIFragmentsRenderer;
}());
export default UIFragmentsRenderer;
//# sourceMappingURL=ui-fragments-renderer.js.map