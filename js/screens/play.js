/**                             Game.js
 * 
 */
/**     Globals         */


game.PlayScreen = me.ScreenObject.extend({
    /**
     * action to perform on state change
     */
    onResetEvent : function () {
        // draw black bg
        me.game.world.addChild(new me.ColorLayer("background", "#000000"), 0);
        // add the player
        me.game.world.addChild(me.pool.pull("player"), 1);
        /** add the enemies
         * **/
        // blue fairy
        me.game.world.addChild(me.pool.pull("fairy-blue", 50, 50), 2);
        // add keyboard controls
        me.input.bindKey(me.input.KEY.LEFT, "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.UP, "up");
        me.input.bindKey(me.input.KEY.DOWN, "down");
    },
  
    /**
     * action to perform when leaving this screen (state change)
     */
    onDestroyEvent : function () {
        // destroy the keys
        me.input.unbindKey(me.input.KEY.LEFT);
        me.input.unbindKey(me.input.KEY.RIGHT);
        me.input.unbindKey(me.input.KEY.UP);
        me.input.unbindKey(me.input.KEY.DOWN);
    }
  });
