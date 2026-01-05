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

console.log('Hello! The recipe event has fired!')
})