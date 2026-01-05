// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

StartupEvents.registry('block', event =>{
    event.create('desh_furnace','cardinal')// will show up as kubejs:desh_furnace. 'cardinal' is what allows for the directional placement
    .displayName('Desh Reinforced Blast Furnace')// The name displayed in game
    .stoneSoundType()//place/break sound effect
    .hardness(3.5)
    .resistance(3.5)
    //.unbreakable()
    .tagBlock('minecraft:mineable/pickaxe')
    .tagBlock('minecraft:furnace')
    .tagBlock('minecraft:needs_iron_tool')
    //.textureAll('desh_furnace_side')
    .texture('top', 'kubejs:block/desh_furnace_top')
    .texture('bottom', 'kubejs:block/desh_pillar_top')
    .texture('north', 'kubejs:block/desh_furnace_front')
    //.texture('east', 'kubejs:block/desh_furnace_side')
    //.texture('south', 'kubejs:block/desh_furnace_side')
    //.texture('west', 'kubejs:block/desh_furnace_side')
})

StartupEvents.registry('item', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('test_item')

  // If you want to specify a different texture location you can do that too, like this:
  event.create('example_item').texture('kubejs:item/example_item') // This texture would be located at kubejs/assets/mobbo/textures/item/lava.png
})