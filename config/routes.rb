Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :pens, only: [:index, :create, :destroy, :update]
    end
  end

  root to: 'home#index'

end
