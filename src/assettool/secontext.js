import * as PIXI from 'pixi.js'

var ContextCreate = (function(){

    function ContextSingleton() {
        this.tilesetpxw = 0;
        this.tilesetpxh = 0;
        this.tilesettilew = 0;
        this.tilesettileh = 0;
        this.MAXTILEINDEX = 0;
        this.tile_index = 0;
        this.selected_tiles = []; // current set of selected tiles
        this.tiledimx = 48; // px
        this.tiledimy = 96; // px
        this.dimlog = Math.log2(this.tileDim);  //log2(TileDim)
        this.dkey = false;   // is 'd' key depressed? (for delete)
        this.tiles32  = [];  // all tiles from tilemap (32x32)
        this.tiles16  = []; 
        this.fudgetiles = [];
        this.g_layers = []; // level layers

    }

    var instance;
    return {
        getInstance: function(){
            if (instance == null) {
                instance = new ContextSingleton();
                // Hide the constructor so the returned object can't be new'd...
                instance.constructor = null;
            }
            return instance;
        }
   };
})();

// global shared state between all panes
export let g_ctx = ContextCreate.getInstance();