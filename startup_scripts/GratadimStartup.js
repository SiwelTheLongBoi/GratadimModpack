// priority: 0
// Visit the wiki for more info - https://kubejs.com/

Platform.mods.kubejs.name = 'Gratadim'

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
		.textureAll('kubejs:block/stony_osmium_block')
	
	// Bronze machine casing
	event.create('bronze_casing')
		.displayName('Bronze Casing')
		.stoneSoundType()
		.hardness(3.5)
		.resistance(3.5)
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:needs_stone_tool')
		.textureAll('kubejs:block/bronze_casing')
})

StartupEvents.registry('item', event => {

	// Stony osmium item for pre-moon
	event.create('stony_osmium')
		.displayName('Stony Osmium')
		.texture('kubejs:item/stony_osmium')
	
	// Blister Steel item for early steel 
	event.create('blister_steel')
		.displayName('Blister Steel')
		.texture('kubejs:item/blister_steel')
	
	// Copper plate item for first plate cast 
	event.create('copper_plate')
		.displayName('Copper Plate')
		.texture('kubejs:item/copper_plate')
		.tag("forge:plates")
		.tag("forge:plates/copper")
		
	// Tier 1 circuit stage 1 
	event.create('circuit_tier1_stage1')
		.displayName('Tier 1 Circuit (1/4)')
		.texture('kubejs:item/circuit_tier1_stage1')
		
	// Tier 1 circuit stage 2 
	event.create('circuit_tier1_stage2')
		.displayName('Tier 1 Circuit (2/4)')
		.texture('kubejs:item/circuit_tier1_stage2')
		
	// Tier 1 circuit stage 3 
	event.create('circuit_tier1_stage3')
		.displayName('Tier 1 Circuit (3/4)')
		.texture('kubejs:item/circuit_tier1_stage3')
		
	// Tier 1 circuit stage 4 
	event.create('circuit_tier1_stage4')
		.displayName('Tier 1 Circuit')
		.texture('kubejs:item/circuit_tier1_stage4')
		.tag("forge:circuit_tier1")
		
	// Tier 1 rocket nose cone 
	event.create('rocket_nose_cone_tier1')
		.displayName('Tier 1 Rocket Nose Cone')
		.texture('kubejs:item/rocket_nose_cone_tier1')
		
	// Tier 1 rocket fins 
	event.create('rocket_fin_tier1')
		.displayName('Tier 1 Rocket Fin')
		.texture('kubejs:item/rocket_fin_tier1')
		
	// Tier 1 rocket fins 
	event.create('bronze_plate')
		.displayName('Bronze Plate')
		.texture('kubejs:item/bronze_plate')
		.tag("forge:plates/bronze")
		
	// biofuel item 
	event.create('biomass')
		.displayName('Biomass')
		.texture('kubejs:item/biomass')
	
	// copper coil 
	event.create('copper_coil')
		.displayName('Copper Coil')
		.texture('kubejs:item/copper_coil')
	
	// Tier 1 motor
	event.create('motor_tier1')
		.displayName('Basic Motor')
		.texture('kubejs:item/motor_tier1')
		
	// copper coil 
	event.create('copper_nozzle')
		.displayName('Copper Nozzle')
		.texture('kubejs:item/copper_nozzle')
	
	// copper coil 
	event.create('steel_nozzle')
		.displayName('Steel Coated Copper Nozzle')
		.texture('kubejs:item/steel_nozzle')
})

StartupEvents.registry('fluid', event => {
  // Nuclear fuel for the tier 3 rocket
  event.create('nuclear_fuel')
    .thickTexture(0x2c9948)
    .bucketColor(0x2c9948)
    .displayName('Nuclear Fuel')
	.viscosity(5000)
	.tag("ad_astra:tier_3_rocket_fuel")
})
