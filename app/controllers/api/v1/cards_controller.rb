module Api
  module V1
    class CardsController < BaseController
      def index
        respond_with Card.all
      end
    end
  end
end
