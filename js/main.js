require.config({
    paths: {
        
        swipe:'swipe',
        walk:'walk',
        script1:'script1',
        all_step:'all_step'

    }
});

require([ 'swipe', 'walk', 'script1',  'all_step'], function($) {
    console.log($().jquery);
});