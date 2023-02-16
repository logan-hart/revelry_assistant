Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:show, :create, :destroy]
    resources :users, only: [:create, :show, :destroy]
    resources :events, only: [:create, :show, :index, :update, :destroy]
    resources :tickets, only: [:create, :show, :index, :update, :destroy]
  end

  get '*path', to: "static_pages#frontend_index"
end
