Rails.application.routes.draw do
  root to: 'view#index'

  namespace :api do
    namespace :v1 do
      resources :cards, only: [:index]
    end
  end
end
