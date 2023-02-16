class Api::TicketsController < ApplicationController

    before_action :require_logged_in

    def index
        @events = Ticket.where(user_id: current_user.id)
    end

    def show
        if current_user
            @tickets = Tickets.find(params[:id])
        end
    end

    def create
        @ticket = current_user.tickets.new(ticket_params)

        if @ticket.save
            render :show
        else
            render json: {errors: @review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update

    end

    def destroy
        @ticket = current_user.reviews.find(params[:id])

        unless @ticket
            render json: { message: 'Unauthorized'}, status: :unauthorized
            return
        end

        @ticket.destroy
        render:show
    end

    private

    def ticket_params
        params.require(:ticket).permit(:user_id, :event_id, :num_tickets)
    end


end
