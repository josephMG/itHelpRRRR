Rails.application.routes.draw do
	root "books#home"
  get 'hello_world', to: 'hello_world#index'
  resources :books, :defaults => {:format => :json}
  #resources :books, defaults: {format: :json}
#  get 'books/index', controller: :books, action: :index
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
