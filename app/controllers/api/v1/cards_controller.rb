module Api
  module V1
    class CardsController < BaseController
      def index
        render json: Card.all
      end
    end
  end
end
