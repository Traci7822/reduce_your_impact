# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Category.create([
  {name: 'Waste'},
  {name: 'Environment'},
  {name: 'Food'},
  {name: 'Home'}
])

Topic.create([
  {name: 'Reusables', category: Category.find_by(name: 'Waste')},
  {name: 'Recyclables', category: Category.find_by(name: 'Waste')},
  {name: 'Agriculture', category: Category.find_by(name: 'Environment')},
  {name: 'Lighting', category: Category.find_by(name: 'Home')},
  {name: 'Compost', category: Category.find_by(name: 'Food')},
])

Component.create([
  {name: 'Plastic Bottles', topic: Topic.find_by(name: 'Recyclables'), notes: 'Recycling one plastic bottle save enough energy to power a 60 Watt equivalent high efficiency LED bulb for 42 hours'},
])
