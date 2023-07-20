puts "🌱 Seeding spices..."

Task.destroy_all
Category.destroy_all

categories_list = ['Maintenance', 'Academic', 'Personal', 'Health']

categories_list.each do |category_name|
  Category.create(name: category_name)
end

tasks_list = [
  { name: 'Go For a Walk', category_id: Category.find_by(name: 'Health').id, completed: false },
  { name: 'Practice Ruby', category_id: Category.find_by(name: 'Academic').id, completed: false },
  { name: 'Call Mom', category_id: Category.find_by(name: 'Personal').id, completed: false },
  { name: 'Schedule Oil Change', category_id: Category.find_by(name: 'Maintenance').id, completed: true },
]

tasks_list.each do |task_params|
  Task.create(task_params)
end

puts "✅ Done seeding!"
