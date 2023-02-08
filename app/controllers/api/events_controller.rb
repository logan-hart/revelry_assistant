class EventsController < ApplicationController

    def index
        @events = Event.all
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

    end

    def destroy
        @event = current_user.events.find(params[:id])
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
            :promoter_id
            )
    end
end
