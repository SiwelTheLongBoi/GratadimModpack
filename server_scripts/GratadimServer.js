// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {

// shaped craft for the desh reinforced furnace
event.shaped(
    Item.of('kubejs:desh_furnace', 1), // arg 1: output
    [
        'SES',
        'SFS', // arg 2: the shape (array of strings)
        'DBD'
    ],
    {//arg 3: the mapping object
        S: 'ad_astra:steel_plate',
        E: 'ad_astra:etrionic_blast_furnace',
        F: 'minecraft:blast_furnace',  
        D: 'ad_astra:desh_plate',
        B: 'ad_astra:desh_block'
    }
)

// mekanism crusher to turn 1 desh ingot into 2 desh plates
event.custom({
	"conditions": [
		{
			"type": "forge:false"
		}
	],
	"type": "mekanism:crushing",
	"input": {
		"ingredient": {
			"item": "ad_astra:desh_ingot"
		}
	},
	"output": {
		"count": 2,
		"item": "ad_astra:desh_plate"
	}
})

// Desh plate gold cast
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/plate"
  },
  "cooling_time": 83,
  "fluid": {
    "amount": 90,
    "tag": "tcintegrations:molten_desh"
  },
  "result": {
    "item": "ad_astra:desh_plate"
  }
})

// Desh plate sand cast
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/plate"
  },
  "cooling_time": 83,
  "fluid": {
    "amount": 90,
    "tag": "tcintegrations:molten_desh"
  },
  "result": {
    "item": "ad_astra:desh_plate"
  }
})

// remove the default cardboard box recipie
event.remove({ output: 'mekanism:cardboard_box' })

// Add new cardboard box recipie with desh nugget
event.shaped(
    Item.of('mekanism:cardboard_box', 1),
    [
        ' D ',
        'DND',
        ' D '
    ],
    {
        D: 'mekanism:sawdust',
        N: 'ad_astra:desh_nugget'
    }
)

// remove the default smeltery controller recipie
event.remove({ output: 'tconstruct:smeltery_controller' })

// Smeltery controller now requires desh
event.custom({
  "type": "tconstruct:retextured_casting_basin",
  "cast": {
    "tag": "tconstruct:smeltery_bricks"
  },
  "cast_consumed": true,
  "cooling_time": 100,
  "fluid": {
    "amount": 360,
    "tag": "tcintegrations:molten_desh"
  },
  "result": "tconstruct:smeltery_controller"
})

// remove stone tools
event.remove({ output: 'minecraft:stone_pickaxe' })
event.remove({ output: 'minecraft:stone_shovel' })
event.remove({ output: 'minecraft:stone_axe' })
event.remove({ output: 'minecraft:stone_sword' })
event.remove({ output: 'minecraft:stone_hoe' })

// remove iron tools
event.remove({ output: 'minecraft:iron_pickaxe' })
event.remove({ output: 'minecraft:iron_shovel' })
event.remove({ output: 'minecraft:iron_axe' })
event.remove({ output: 'minecraft:iron_sword' })
event.remove({ output: 'minecraft:iron_hoe' })

// remove golden tools
event.remove({ output: 'minecraft:golden_pickaxe' })
event.remove({ output: 'minecraft:golden_shovel' })
event.remove({ output: 'minecraft:golden_axe' })
event.remove({ output: 'minecraft:golden_sword' })
event.remove({ output: 'minecraft:golden_hoe' })

// remove diamond tools
event.remove({ output: 'minecraft:diamond_pickaxe' })
event.remove({ output: 'minecraft:diamond_shovel' })
event.remove({ output: 'minecraft:diamond_axe' })
event.remove({ output: 'minecraft:diamond_sword' })
event.remove({ output: 'minecraft:diamond_hoe' })

// Add raw copper & raw tin crafting recipie for bronze dust
event.shapeless(
  Item.of('mekanism:dust_bronze', 4), // arg 1: output
  [
    '6x minecraft:raw_copper',
    '2x mekanism:raw_tin'
  ]
)

// Etrionic alloyer recipie for bronze
event.custom({
  "type": "ad_astra:alloying",
  "cookingtime": 100,
  "energy": 20,
  "ingredients": [
    {
      "item": "minecraft:copper_ingot"
    },
    {
      "item": "minecraft:copper_ingot"
    },
    {
      "item": "minecraft:copper_ingot"
    },
    {
      "item": "mekanism:ingot_tin"
    }
  ],
  "result": {
    "count": 3,
    "id": "mekanism:ingot_bronze"
  }
})

// Stony osmium items into block form
event.shapeless(
  Item.of('kubejs:stony_osmium_block', 1),
  [
    '9x kubejs:stony_osmium'
  ]
)

// Stony osmium block back into items
event.shapeless(
  Item.of('kubejs:stony_osmium', 9),
  [
    '1x kubejs:stony_osmium_block'
  ]
)

// Etrionic crafting recipie for osmium item refinement
event.custom({
  "type": "ad_astra:alloying",
  "cookingtime": 200,
  "energy": 40,
  "ingredients": [
    {
      "item": "ad_astra:desh_nugget"
    },
    {
      "item": "kubejs:stony_osmium"
    },
    {
      "item": "kubejs:stony_osmium"
    },
    {
      "item": "kubejs:stony_osmium"
    }
  ],
  "result": {
    "count": 2,
    "id": "mekanism:raw_osmium"
  }
})

// Etrionic crafting recipie for osmium block refinement
event.custom({
  "type": "ad_astra:alloying",
  "cookingtime": 1800,
  "energy": 40,
  "ingredients": [
    {
      "item": "ad_astra:desh_ingot"
    },
    {
      "item": "kubejs:stony_osmium_block"
    },
    {
      "item": "kubejs:stony_osmium_block"
    },
    {
      "item": "kubejs:stony_osmium_block"
    }
  ],
  "result": {
    "count": 2,
    "id": "mekanism:block_raw_osmium"
  }
})

// Crafting of blister steel
event.shaped(
    Item.of('kubejs:blister_steel', 3),
    [
        'CCC',
        'III'
    ],
    {
        C: 'minecraft:charcoal',
        I: {tag:'forge:ingots/iron'}
    }
)

// Blister steel melting into steel
event.custom({
  "type": "tconstruct:melting",
  "ingredient": {
    "item": "kubejs:blister_steel"
  },
  "result": {
    "amount": 60,
    "fluid": "tconstruct:molten_steel"
  },
  "temperature": 750,
  "time": 128
})

// Recipie to add bronze casing
event.shaped(
    Item.of('kubejs:bronze_casing', 1),
    [
        'BGB',
        'GIG',
        'BGB'
    ],
    {
        B: {tag:'forge:ingots/bronze'},
        G: {tag:'forge:glass'},
        I: {tag:'forge:ingots/iron'}
    }
)

// Copper plate gold cast
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/plate"
  },
  "cooling_time": 83,
  "fluid": {
    "amount": 90,
    "tag": "tconstruct:molten_copper"
  },
  "result": {
    "item": "kubejs:copper_plate"
  }
})

// Copper plate sand cast
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/plate"
  },
  "cooling_time": 83,
  "fluid": {
    "amount": 90,
    "tag": "tconstruct:molten_copper"
  },
  "result": {
    "item": "kubejs:copper_plate"
  }
})

// Recipie to add copper plate
event.shaped(
    Item.of('kubejs:copper_plate', 1),
    [
        'C',
        'C'
    ],
    {
        C: {tag:'forge:ingots/copper'}
    }
)

// remove the default melter recipie
event.remove({ output: 'tconstruct:seared_melter' })

// New melter recipie
event.shaped(
    Item.of('tconstruct:seared_melter', 1),
    [
        'GGG',
        'GBG',
        'SSS'
    ],
    {
        G: {tag:'forge:glass'},
        B: 'kubejs:bronze_casing',
        S: 'tconstruct:seared_bricks'
    }
)

// remove the default seared heater recipie
event.remove({ output: 'tconstruct:seared_heater' })

// New seared  heater recipie with furnace
event.shaped(
    Item.of('tconstruct:seared_heater', 1),
    [
        'SSS',
        'SFS',
        'SSS'
    ],
    {
        S: 'tconstruct:seared_brick',
        F: 'minecraft:furnace'
    }
)

// Zeroth step for tier 1 circuits
event.shaped(
    Item.of('kubejs:circuit_tier1_stage1', 1),
    [
        ' K ',
        'GGG'
    ],
    {
        K: {tag:'forge:tools/knives'},
        G: {tag:'forge:glass_panes'}
    }
).damageIngredient("#forge:tools/knives")

// First casting step of tier 1 circuit
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "item": "kubejs:circuit_tier1_stage1"
  },
  "cast_consumed": true,
  "cooling_time": 50,
  "fluid": {
    "amount": 90,
    "tag": "forge:molten_copper"
  },
  "result": "kubejs:circuit_tier1_stage2"
})

// second casting step of tier 1 circuit
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "item": "kubejs:circuit_tier1_stage2"
  },
  "cast_consumed": true,
  "cooling_time": 50,
  "fluid": {
    "amount": 250,
    "tag": "tconstruct:venom"
  },
  "result": "kubejs:circuit_tier1_stage3"
})

// third casting step of tier 1 circuit
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "item": "kubejs:circuit_tier1_stage3"
  },
  "cast_consumed": true,
  "cooling_time": 50,
  "fluid": {
    "amount": 90,
    "tag": "forge:molten_tin"
  },
  "result": "kubejs:circuit_tier1_stage4"
})

// remove the default nosecone recipie
event.remove({ output: 'ad_astra:rocket_nose_cone' })

// New rocket nosecone with circuit
event.shaped(
    Item.of('kubejs:rocket_nose_cone_tier1', 1),
    [
        ' R ',
        ' S ',
        'SCS'
    ],
    {
        R: 'minecraft:lightning_rod',
        S: {tag: 'forge:plates/steel'},
        C: {tag: 'forge:circuit_tier1'}
    }
)

// remove the default tier1 rocket recipie
event.remove({ type: "ad_astra:nasa_workbench" })

// nasa workbench recipie to craft a tier 1 rocket
event.custom({
  "type": "ad_astra:nasa_workbench",
  "ingredients": [
    {
      "item": "kubejs:rocket_nose_cone_tier1"
    },
    {
      "tag": "ad_astra:steel_blocks"
    },
    {
      "tag": "ad_astra:steel_blocks"
    },
    {
      "tag": "ad_astra:steel_blocks"
    },
    {
      "tag": "ad_astra:steel_blocks"
    },
    {
      "tag": "ad_astra:steel_blocks"
    },
    {
      "tag": "ad_astra:steel_blocks"
    },
    {
      "item": "kubejs:rocket_fin_tier1"
    },
    {
      "item": "ad_astra:steel_tank"
    },
    {
      "item": "ad_astra:steel_tank"
    },
    {
      "item": "kubejs:rocket_fin_tier1"
    },
    {
      "item": "kubejs:rocket_fin_tier1"
    },
    {
      "item": "ad_astra:steel_engine"
    },
    {
      "item": "kubejs:rocket_fin_tier1"
    }
  ],
  "result": {
    "count": 1,
    "id": "ad_astra:tier_1_rocket"
  }
})

// remove the default rocket fin recipie
event.remove({ output: 'ad_astra:rocket_fin' })

// New tier 1 rocket nosecone with circuit
event.shaped(
    Item.of('kubejs:rocket_fin_tier1', 4),
    [
        ' B ',
        'BSB',
        'S S'
    ],
    {
        B: {tag: 'forge:plates/bronze'},
        S: {tag: 'forge:plates/steel'}
    }
)

// Bronze plate gold cast
event.custom({
  "type": "tconstruct:casting_table",
  "cast": {
    "tag": "tconstruct:casts/multi_use/plate"
  },
  "cooling_time": 83,
  "fluid": {
    "amount": 90,
    "tag": "forge:molten_bronze"
  },
  "result": {
    "item": "kubejs:bronze_plate"
  }
})

// Etrionic crafting recipie for steel from blister steel
event.custom({
  "type": "ad_astra:alloying",
  "cookingtime": 200,
  "energy": 40,
  "ingredients": [
    {
      "item": "kubejs:blister_steel"
    },
    {
      "item": "minecraft:iron_ingot"
    },
  ],
  "result": {
    "count": 2,
    "id": "ad_astra:steel_ingot"
  }
})

// remove the default etrionic furnace recipie
event.remove({ output: 'ad_astra:etrionic_blast_furnace' })

// New rocket nosecone with circuit
event.shaped(
    Item.of('ad_astra:etrionic_blast_furnace', 1),
    [
        'P P',
        'P P',
        'DFD'
    ],
    {
        P: {tag: 'forge:plates/steel'},
        D: {tag: 'forge:plates/desh'},
        F: 'minecraft:blast_furnace'
    }
)


console.log('Hello! The recipe event has fired!')
})

// log stripping in the gui test
ServerEvents.recipes((event) => {
  const { kubejs } = event.recipes;

  kubejs
    .shapeless("stripped_oak_log", 
	[
		"oak_log", 
		"#minecraft:axes"
	])
    .damageIngredient("#minecraft:axes");
});

// Listen to item tag event
ServerEvents.tags('fluid', event => {
  // Assign tier 3 and 4 rocket fuels
  //event.add('ad_astra:tier_3_rocket_fuel', '#tconstruct:molten_duralumin')
  event.add('ad_astra:tier_4_rocket_fuel', '#forge:fusion_fuel')
  
  // Remove the fuel usage from the tier 1 fuel
  event.remove('ad_astra:tier_2_rocket_fuel', '#ad_astra:fuel')
  event.remove('ad_astra:tier_3_rocket_fuel', '#ad_astra:fuel')
  event.remove('ad_astra:tier_4_rocket_fuel', '#ad_astra:fuel')
  
  event.remove('ad_astra:tier_1_rocket_fuel', '#ad_astra:efficent_fuel')
  
  // Re add the fuel usage from the tier 2 fuel
  event.add('ad_astra:tier_2_rocket_fuel', '#ad_astra:efficient_fuel')
})

LootJS.modifiers((event) => {
	
// Osmium ore now drops stony osmium
event.addBlockLootModifier("mekanism:osmium_ore")
	.removeLoot(Ingredient.all)
	.addAlternativesLoot(
		LootEntry.of("kubejs:stony_osmium")
	);

// Deepslate osmium ore now drops stony osmium
event.addBlockLootModifier("mekanism:deepslate_osmium_ore")
	.removeLoot(Ingredient.all)
	.addAlternativesLoot(
		LootEntry.of("kubejs:stony_osmium")
	);

});