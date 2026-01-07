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

// nasa workbench recipie to craft a desh engine
event.custom({
  "type": "ad_astra:nasa_workbench",
  "ingredients": [
    {
      "item": "ad_astra:rocket_nose_cone"
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
      "item": "ad_astra:rocket_fin"
    },
    {
      "item": "ad_astra:steel_tank"
    },
    {
      "item": "ad_astra:steel_tank"
    },
    {
      "item": "ad_astra:rocket_fin"
    },
    {
      "item": "ad_astra:rocket_fin"
    },
    {
      "item": "ad_astra:steel_engine"
    },
    {
      "item": "ad_astra:rocket_fin"
    }
  ],
  "result": {
    "count": 1,
    "id": "ad_astra:desh_engine"
  }
})

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

// remove the default smeltery controller recipie
event.remove({ output: 'minecraft:stone_pickaxe' })

// remove the default smeltery controller recipie
event.remove({ output: 'minecraft:stone_shovel' })

// remove the default smeltery controller recipie
event.remove({ output: 'minecraft:stone_axe' })

// remove the default smeltery controller recipie
event.remove({ output: 'minecraft:stone_sword' })

// remove the default smeltery controller recipie
event.remove({ output: 'minecraft:stone_hoe' })

// remove the default smeltery controller recipie
event.remove({ output: 'minecraft:iron_pickaxe' })

// remove the default smeltery controller recipie
event.remove({ output: 'minecraft:iron_shovel' })

// remove the default smeltery controller recipie
event.remove({ output: 'minecraft:iron_axe' })

// remove the default smeltery controller recipie
event.remove({ output: 'minecraft:iron_sword' })

// remove the default smeltery controller recipie
event.remove({ output: 'minecraft:iron_hoe' })

// remove the default smeltery controller recipie
event.remove({ output: 'minecraft:golden_pickaxe' })

// remove the default smeltery controller recipie
event.remove({ output: 'minecraft:golden_shovel' })

// remove the default smeltery controller recipie
event.remove({ output: 'minecraft:golden_axe' })

// remove the default smeltery controller recipie
event.remove({ output: 'minecraft:golden_sword' })

// remove the default smeltery controller recipie
event.remove({ output: 'minecraft:golden_hoe' })

// remove the default smeltery controller recipie
event.remove({ output: 'minecraft:diamond_pickaxe' })

// remove the default smeltery controller recipie
event.remove({ output: 'minecraft:diamond_shovel' })

// remove the default smeltery controller recipie
event.remove({ output: 'minecraft:diamond_axe' })

// remove the default smeltery controller recipie
event.remove({ output: 'minecraft:diamond_sword' })

// remove the default smeltery controller recipie
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

console.log('Hello! The recipe event has fired!')
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