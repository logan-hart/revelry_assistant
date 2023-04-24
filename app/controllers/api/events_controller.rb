class Api::EventsController < ApplicationController
    class Api::EventsController < ApplicationController

        # before_action :require_logged_in, only: [:create, :update, :destroy]

        def index

            if params['promoter_id']
                @events = Event.where(promoter_id: params['promoter_id'])
            else
                @events = Event.all
            end

        end
    
        def show
            @event = Event.find(params[:id])
        end
    
        def create
            @event = Event.new(event_params) 
    
            if @event.save!
                render :show
            else
                render json: { errors: @event.errors.full_messages }, status: :unprocessable_entity
            end
        end
        
        def update
            @event = Event.find(params[:event_id])
            if @event.update(event_params)
              render :show
            else
              render json: @event.errors.full_messages, status: 422
            end
        end
    
        def destroy
            @event = Event.find(params[:id])

            unless @event
                render json: { message: 'Unauthorized' }, status: :unauthorized
                return
            end
            @event.destroy
            render :show
        end
    
        private
        def event_params
            params.require(:event).permit(
                :id,
                :name, 
                :start_date,
                :end_date,
                :start_time,
                :end_time,
                :lineup,
                :genres,
                :details,
                :cost,
                :age_minimum,
                :images,
                :promotional_links,
                :media,
                :available_tickets,
                :venue,
                :links,
                :promoter
                )
        end
    end
    
end
