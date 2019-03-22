/**                             Enememies.js
 * 
 */
game.Enemy = me.Entity.extend({
    init: function (x, y) {
        this._super(me.Entity, "init", [x, y, {
            image   : "fairy-blue.png",
            width   : 32,
            height  : 32
        }]);
    },
  
    update: function (dt) {
        this._super(me.Entity, "update", [dt]);
        return true;
    }
  });