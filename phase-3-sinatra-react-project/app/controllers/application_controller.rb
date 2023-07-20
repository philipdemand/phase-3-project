class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get '/categories' do
    categories = Category.all
    categories.to_json
  end

  get '/tasks' do
    tasks = Task.all
    tasks.to_json
  end

  delete '/tasks/:id' do
    task = Task.find(params[:id])
    task.destroy
    task.to_json
  end

  post '/tasks' do
    task = Task.create(
      name: params[:name],
      category_id: params[:category_id],
      completed: params[:completed]
    )
    task.to_json
  end

  post '/categories' do
    category = Category.create(
      name: params[:name]
    )
    category.to_json
  end

  patch '/tasks/:id' do
    task = Task.find(params[:id])
    task.update(
      name: params[:name]
    )
    task.to_json
  end

end
