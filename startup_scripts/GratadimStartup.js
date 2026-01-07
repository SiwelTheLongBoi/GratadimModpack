// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

StartupEvents.registry('block', event =>{
	
	// Add the desh reinforced furnace block
    event.create('desh_furnace','cardinal')// will show up as kubejs:desh_furnace. 'cardinal' is what allows for the directional placement
		.displayName('Desh Reinforced Blast Furnace')
		.stoneSoundType()
		.hardness(3.5)
		.resistance(3.5)
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:furnace')
		.tagBlock('minecraft:needs_iron_tool')
		.texture('top', 'kubejs:block/desh_furnace_top')
		.texture('bottom', 'kubejs:block/desh_pillar_top')
		.texture('north', 'kubejs:block/desh_furnace_front')
	
	// Stony osmium ore storage block
	event.create('stony_osmium_block')
		.displayName('Stony Osmium Block')
		.stoneSoundType()
		.hardness(3.5)
		.resistance(3.5)
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:needs_stone_tool')
		.textureAll('kubejs:block/dead_bubble_coral_block')
})

StartupEvents.registry('item', event => {

	// Stony osmium item for early 
	event.create('stony_osmium')
		.displayName('Stony Osmium')
		.texture('kubejs:item/stony_osmium')
})
